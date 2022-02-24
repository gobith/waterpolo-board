<script lang="ts">
  import Board from "./components/Board.svelte";
  import { boards } from "./stores/session-store";

  console.log($boards);
</script>

{#each $boards as board}
  <Board {board} scale={2}/>
{/each}

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
  }
</style>
