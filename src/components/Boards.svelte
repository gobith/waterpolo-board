

<script lang="ts">
  import BoardComponent from "./Board.svelte";
  import type { Board, Dimension } from "../domain/domain";

  export let boards: Board[];

  let dimension: Dimension = { height: 90, width: 60 };
</script>



{#each boards as board}
  <BoardComponent {board} dimension = {dimension} />
{/each}

<style>
</style>
