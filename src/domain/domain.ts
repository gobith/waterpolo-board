export class Team {
  name: string;
  color: string;
  players: Player[];

  constructor(name: string, color: string, numberOfPlayersPerTeam: number) {
    this.name = name;
    this.color = color;
    this.players = [];
    this.init_players(numberOfPlayersPerTeam);
  }

  init_players(numberOfPlayersPerTeam) {
    let y;
    if (this.isHome()) {
      y = 5;
    } else {
      y = 85;
    }

    let keeper = new Player("keeper", 1, this, 30, y, new Keeper());
    this.players.push(keeper);
  }

  isHome(): boolean {
    return this.color === "white";
  }

  displayOn(ctx) {
    this.players.forEach((player) => {
      player.displayOn(ctx);
    });
  }
}

export class Ball {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  displayOn(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}

export class Board {
  name: string;
  teams: Team[];
  balls: Ball[];
  scale: number;
  width: number;
  height: number;

  constructor(name: string, white_team: Team, blue_team: Team) {
    this.name = name;
    this.teams = [];
    this.teams.push(white_team);
    this.teams.push(blue_team);
    this.balls = [];
    this.balls.push(new Ball(30, 45));
    this.scale = 6;
    this.width = 60;
    this.height = 90;
  }

  displayOn(ctx) {
    this.balls.forEach((ball) => {
      ball.displayOn(ctx);
    });
    this.teams.forEach((team) => {
      team.displayOn(ctx);
    });
  }
}

export class Player {
  name: string;
  number: number;
  team: Team;
  x: number;
  y: number;
  type: Keeper | Field;

  constructor(
    name: string,
    number: number,
    team: Team,
    x: number,
    y: number,
    type: Keeper | Field
  ) {
    this.name = name;
    this.number = number;
    this.team = team;
    this.x = x;
    this.y = y;
    this.type = type;
  }

  displayOn(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = this.type.color(this.team);
    ctx.beginPath();
    ctx.arc(0, 0, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}

export class PlayerType {
  color(team): string {
    return team.color;
  }
}

export class Keeper extends PlayerType {
  color(team): string {
    return "red";
  }
}

export class Field extends PlayerType {}

export const new_board = (numberOfPlayersPerTeam: number) => {
  let team_white = new Team("white", "white", numberOfPlayersPerTeam);
  let team_blue = new Team("blue", "blue", numberOfPlayersPerTeam);
  let board = new Board("board 1", team_white, team_blue);
  return board;
};
