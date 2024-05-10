<script setup>
import { useBoardStore } from "../stores/boardStore";

const boardStore = useBoardStore();
const route = useRoute();
const router = useRouter();

// track whether the modal isOpen
const isModalOpen = computed(() => {
  // track the path
  return route.name === "index-tasks-id";
});

// track the column name & give it a type
const newColumnName = ref("");

// add column
function addColumn() {
  boardStore.addColumn(newColumnName.value);
  // reset column input back to it's blank state
  newColumnName.value = "";
}

// close modal
function closeModal() {
  router.push('/')
}
</script>

<template>
  <div class="board-wrapper">
    <main class="board">
      <!-- <h1>{{ boardStore.board.name }}</h1> -->
      <BoardColumn
        v-for="(column, columnIndex) in boardStore.board.columns"
        :key="column.id"
        :column="column"
        :columnIndex="columnIndex"
      >
      </BoardColumn>
      <!-- create a container and an input field from Nuxt UI -->
      <!-- i-icon-library -->
      <!-- add column and track the data -->
      <UContainer class="column">
        <UInput
          v-model="newColumnName"
          type="text"
          class=""
          placeholder="Create new column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="addColumn"
        />
      </UContainer>
    </main>
    <!-- create a task modal -->
    <!-- open & close modal -->
    <div v-show="isModalOpen" class="task-bg" @click.self="closeModal">
      <!-- create a child routed view -->
      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>
