<script lang="ts">
	import { onMount } from "svelte";

	export let board;

	let canvas;
	let ctx;
	let val = 2;
	let lineWidth = val / 10;

	onMount(() => {
		ctx = canvas.getContext("2d");

		canvas.height = val * 32 + lineWidth;
		canvas.width = val * 22 + lineWidth ;

		ctx.fillStyle = "lightblue";

		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.translate(lineWidth / 2 , val + (lineWidth / 2));
		pool(ctx);
		circle(ctx);
	});

	const pool = (ctx) => {
		circumference(ctx);
	};

	const circumference = (ctx) => {
		ctx.fillStyle = "#e7feff";
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(val * 9, 0);
		ctx.lineTo(val * 9, -val);
		ctx.lineTo(val * 13, -val);
		ctx.lineTo(val * 13, 0);
		ctx.lineTo(val * 22, 0);
		ctx.lineTo(val * 22, val * 30);
		ctx.lineTo(val * 13, val * 30);
		ctx.lineTo(val * 13, val * 31);
		ctx.lineTo(val * 9, val * 31);
		ctx.lineTo(val * 9, val * 30);
		ctx.lineTo(0, val * 30);
		ctx.lineTo(0, 0);
		ctx.fill();

		if (false) {return};

		ctx.lineCap = "square";
		ctx.lineWidth = lineWidth;

		let x = 0;

		draw_line(ctx, x, 0, x, val * 2, "#e51a4c");
		draw_line(ctx, x, val * 2, x, val * 6, "yellow");
		draw_line(ctx, x, val * 6, x, val * 15, "green");
		draw_line(ctx, x, val * 15, x, val * 24, "green");
		draw_line(ctx, x, val * 24, x, val * 28, "yellow");
		draw_line(ctx, x, val * 28, x, val * 30, "#e51a4c");

		x = val * 22;

		draw_line(ctx, x, 0, x, val * 2, "#e51a4c");
		draw_line(ctx, x, val * 2, x, val * 6, "yellow");
		draw_line(ctx, x, val * 6, x, val * 15, "green");
		draw_line(ctx, x, val * 15, x, val * 24, "green");
		draw_line(ctx, x, val * 24, x, val * 28, "yellow");
		draw_line(ctx, x, val * 28, x, val * 30, "#e51a4c");

		let y = 0;

		draw_line(ctx, 0, y, val * 9, y, "#0000cd");
		draw_line(ctx, val * 9, y, val * 9, y - val, "#0000cd");
		draw_line(ctx, val * 9, y - val, val * 13, y - val, "#0000cd");
		draw_line(ctx, val * 13, y - val, val * 13, y, "#0000cd");
		draw_line(ctx, val * 13, y, val * 22, y, "#0000cd");

		y = val * 30;
		draw_line(ctx, 0, y, val * 9, y, "#0000cd");
		draw_line(ctx, val * 9, y, val * 9, y + val, "#0000cd");
		draw_line(ctx, val * 9, y + val, val * 13, y + val, "#0000cd");
		draw_line(ctx, val * 13, y + val, val * 13, y, "#0000cd");
		draw_line(ctx, val * 13, y, val * 22, y, "#0000cd");
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

	const circle = (ctx) => {
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc(val * 11, val * 15, val * 0.6, 0, 2 * Math.PI);
		ctx.fill();
	};
</script>

<canvas bind:this={canvas} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: orange;
	}
</style>
