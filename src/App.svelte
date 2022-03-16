<script lang="ts">
    import Board from "./components/BoardNew.svelte";
    

  </script>

  <Board />
  
  <style>
    :global(*) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /* background-color: orange; */
      background-color: #4b4b4b;
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
  
    
  </style>