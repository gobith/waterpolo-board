<script lang="ts">
  import { onMount } from "svelte";
  import Board from "./components/Board.svelte";
  import Boards from "./components/Boards.svelte";
  import { selected_board, boards } from "./stores/session-store";
  import type { Dimension } from "./domain/domain";

  let show_selected = true;

  let dimension = {
      height: window.innerHeight,
      width: window.innerWidth,
    }

  let board;

  $: {
    dimension;
    if (board) board.dimension = dimension
  }

  const resize = () => {
    dimension = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  };

  onMount(() => {
    window.onresize = resize;
  });
</script>

<svelte:options accessors/>

{#if show_selected}
  <Board board={$selected_board} {dimension} bind:this={board} />
{:else}
  <Boards boards={$boards} />
{/if}

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: orange;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
  }

  :global(canvas) {
    grid-column: 2;
    grid-row: 2;
  }
</style>