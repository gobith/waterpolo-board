<script lang="ts">
  import { onMount } from "svelte";
  export let board;
  let canvas;
  let ctx;

  let scale = board.scale;
  let initialWidth = board.width;
  let initialHeight = board.height;

  let width = initialWidth * scale;
  let height = initialHeight * scale;

  onMount(() => {
    ctx = canvas.getContext("2d");

    canvas.height = height;
    canvas.width = width;

    ctx.scale(scale, scale);

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, initialWidth, initialHeight);

    ctx.lineCap = "square";

    draw_line(ctx, 0, 0, 25, 0, "yellow");
    draw_line(ctx, 35, 0, 60, 0, "yellow");
    draw_line(ctx, 0, 90, 25, 90, "yellow");
    draw_line(ctx, 35, 90, 60, 90, "yellow");

    draw_line(ctx, 0, 0, 0, 6, "#e51a4c");
    draw_line(ctx, 0, 6, 0, 18, "yellow");
    draw_line(ctx, 0, 18, 0, 45, "green");
    draw_line(ctx, 0, 45, 0, 72, "green");
    draw_line(ctx, 0, 72, 0, 84, "yellow");
    draw_line(ctx, 0, 84, 0, 90, "#e51a4c");

    draw_line(ctx, 60, 0, 60, 6, "#e51a4c");
    draw_line(ctx, 60, 6, 60, 18, "yellow");
    draw_line(ctx, 60, 18, 60, 45, "green");
    draw_line(ctx, 60, 45, 60, 72, "green");
    draw_line(ctx, 60, 72, 60, 84, "yellow");
    draw_line(ctx, 60, 84, 60, 90, "#e51a4c");

    board.displayOn(ctx)
  });

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

<canvas bind:this={canvas} />

<style>
  canvas {
    background-color: #e7feff;
  }
</style>
