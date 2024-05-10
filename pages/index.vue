<script setup>
import { useBoardStore } from "../stores/boardStore";

const boardStore = useBoardStore();

// track the column name & give it a type
const newColumnName = ref("");

// add column
function addColumn() {
  boardStore.addColumn(newColumnName.value);
  // reset column input back to it's blank state
  newColumnName.value = "";
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
        <!-- track whether the name is being edited or deleted -->
        <!-- add event listener -->
        <!-- Delete later since we are looping through the board column and rendering it-->
        <!-- <div class="column-header mb-4">
          <div>
            <UInput v-if="editNameState" type="text" v-model="column.name" />
            <h2 v-else class="">{{ column.name }}</h2>
          </div>
          <div>
            <UButton
              icon="i-heroicons-pencil-square"
              class="mr-2"
              @click="editNameState = !editNameState"
            />
            <UButton
              icon="i-heroicons-trash"
              color="red"
              @click="deleteColumn(columnIndex)"
            />
          </div>
        </div>
        <ul>
          <li v-for="task in column.tasks" :key="task.id">
            <UCard class="mb-4">
              <strong> {{ task.name }}</strong>
              <p>{{ task.description }}</p>
            </UCard>
          </li>
        </ul> -->
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
  </div>
</template>
