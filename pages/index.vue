<script setup>
import { useBoardStore } from '../stores/boardStore';
    const boardStore = useBoardStore()

</script>
<template>
  <main>
    <h1>Build a trello clone home page</h1>
    <pre> {{ boardStore.board }}</pre>
  </main>
</template>
