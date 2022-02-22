export class Team {
  name: string;
  color: string;
  font_color: string;
  players: Player[];

  constructor(name: string, color: string, font_color: string , numberOfPlayersPerTeam: number) {
    this.name = name;
    this.color = color;
    this.font_color = font_color;
    this.players = [];
    this.init_players(numberOfPlayersPerTeam);
  }

  init_players(numberOfPlayersPerTeam) {
    let y;
    if (this.isHome()) {
      y = 4;
    } else {
      y = 86;
    }

    this.players.push(new Player("keeper", 1, this, 30, y, new Keeper()));
    this.players.push(new Player("", 2, this, 5, y, new Field()));
    this.players.push(new Player("", 3, this, 12.5, y, new Field()));
    this.players.push(new Player("", 4, this, 20, y, new Field()));
    this.players.push(new Player("", 5, this, 40, y, new Field()));
    this.players.push(new Player("", 6, this, 47.5, y, new Field()));
    this.players.push(new Player("", 7, this, 55, y, new Field()));
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
    this.scale = 4;
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
    ctx.fillStyle = this.type.fontColor(this.team);
    ctx.font = `3px serif`;
    ctx.fillText(this.number, -0.9, 1);
    ctx.restore();
  }
}

export class PlayerType {
  color(team): string {
    return team.color;
  }

  fontColor(team): string {
    return team.font_color;
  }
}

export class Keeper extends PlayerType {
  color(team): string {
    return "red";
  }
  fontColor(team): string {
    return "black"
  }
}

export class Field extends PlayerType {}

export const new_board = (numberOfPlayersPerTeam: number) => {
  let team_white = new Team("white", "white", "black" , numberOfPlayersPerTeam);
  let team_blue = new Team("blue", "blue", "white" , numberOfPlayersPerTeam);
  let board = new Board("board 1", team_white, team_blue);
  return board;
};
