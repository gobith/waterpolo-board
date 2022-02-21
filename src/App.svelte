<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  let canvas;
  let ctx;
  let val = 20;
  onMount(() => {
    ctx = canvas.getContext("2d");

    canvas.height = val * 34;
    canvas.width = val * 26;
	
	ctx.translate(2 , 10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pool(ctx);
  });

  const pool = (ctx) => {
    circumference1(ctx);
	circumference(ctx);
    // vertical_grid(ctx);
    //horizontal_grid(ctx);
  };

  const circumference1 = (ctx) => {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, val * 22, val * 30);
  };

  const circumference = (ctx) => {
    
	ctx.lineWidth = 4;
	
	let x = 0;
	
	draw_line(ctx, x , 0, x, val * 2, "red");
	draw_line(ctx, x, val*2, x, val * 6, "yellow");
	draw_line(ctx, x, val*6, x, val * 15, "green");
	draw_line(ctx, x, val*15, x, val * 24, "green");
	draw_line(ctx, x, val*24, x, val * 28, "yellow");
	draw_line(ctx, x, val*28, x, val * 30, "red");

	x = val * 22;
	
	draw_line(ctx, x , 0, x, val * 2, "red");
	draw_line(ctx, x, val*2, x, val * 6, "yellow");
	draw_line(ctx, x, val*6, x, val * 15, "green");
	draw_line(ctx, x, val*15, x, val * 24, "green");
	draw_line(ctx, x, val*24, x, val * 28, "yellow");
	draw_line(ctx, x, val*28, x, val * 30, "red");



  

  
  };

  const vertical_grid = (ctx) => {
    ctx.lineWidth = 1;
    let y = val * 16;

    draw_line(ctx, val, 0, val, y, "black");
    draw_line(ctx, val * 3, 0, val * 3, y, "black");
    draw_line(ctx, val * 5, 0, val * 5, y, "black");
    draw_line(ctx, val * 7, 0, val * 7, y, "black");
    draw_line(ctx, val * 9, 0, val * 9, y, "black");
    draw_line(ctx, val * 11, 0, val * 11, y, "black");
  };

  const horizontal_grid = (ctx) => {
    ctx.lineWidth = 1;
    let x = val * 22;
    draw_line(ctx, 0, val * 2, x, val * 2, "black");
    draw_line(ctx, 0, val * 6, x, val * 6, "black");
    draw_line(ctx, 0, val * 15, x, val * 15, "black");
    draw_line(ctx, 0, val * 24, x, val * 24, "black");
    draw_line(ctx, 0, val * 28, x, val * 28, "black");
   
  };

  const draw_line = (
    ctx: any,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string
  ) => {
	ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };
</script>

<div>
  <canvas bind:this={canvas} />
</div>

<style>
</style>
