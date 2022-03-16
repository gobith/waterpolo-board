<svelte:options accessors/>

<script lang="ts">
  import { onMount } from "svelte";
  import type { Board , Dimension} from "../domain/domain";

  export let board: Board;
  export let dimension: Dimension;

  let scale = 8;
  
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

 

  
  let initialWidth = board.width;
  let initialHeight = board.height;

  let width = initialWidth * scale;
  let height = initialHeight * scale;

 $: {
   dimension;
   if (ctx) {
     const newScale = 4;
     console.log(newScale);
    ctx.scale(newScale, newScale)
   }
 }
  

  onMount(() => {
   
    ctx = canvas.getContext("2d");

    canvas.onpointerdown = pointerdown_handler;
    canvas.onpointermove = pointermove_handler;
    canvas.onpointerup = pointerup_handler;

    canvas.height = height;
    canvas.width = width;

    ctx.scale(scale, scale);

    displayOn(ctx);
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

  const displayOn = (ctx) => {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    board.displayOn(ctx);
    ctx.restore();
  };

  const relativePoint = (event) => {
    return {
      x: (event.pageX - event.target.offsetLeft) / scale,
      y: (event.pageY - event.target.offsetTop) / scale,
    };
  };

  const pointerdown_handler = (event) => {
    let point = relativePoint(event);
    board.select(point);
    displayOn(ctx);
  };

  const pointermove_handler = (event) => {
    if (event.buttons !== 1) {
      return;
    }
    board.move_selected(relativePoint(event));
    displayOn(ctx);
  };

  const pointerup_handler = (event) => {
    board.deselect();
    displayOn(ctx);
  };
</script>

<canvas bind:this={canvas} />

<style>
  canvas {
    background-color: #e7feff;
    
  }
</style>
