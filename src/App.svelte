<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	let canvas;
	let ctx;
	onMount(() => {
		let val = 41;

		ctx = canvas.getContext("2d");

		canvas.height = val * 16;
		canvas.width = val * 12;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;

		ctx.strokeRect(0, 0, val * 12, val * 16);

		ctx.lineWidth = 1;
		ctx.strokeRect(val, 0, val * 10, val * 16);
		ctx.strokeRect(val * 3, 0, val * 6, val * 16);
		ctx.strokeRect(val * 5, 0, val * 2, val * 16);
	});
</script>

<div>
	<canvas bind:this={canvas} />
</div>

<style>
</style>
