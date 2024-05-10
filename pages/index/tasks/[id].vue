<script setup>
// use ~(tilda) instead of . so that if incase the file moves, the code will not break
import { useBoardStore } from '~/stores/boardStore'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const boardStore = useBoardStore()
const route = useRoute()

const task = computed(() => {
    return boardStore.getTask(route.params.id)
})


</script>

<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>Page: {{ task.name }}</h1>
      <p> {{ task.description }}</p>
    </div>
  </div>
</template>
