<script setup>
import { useBoardStore } from "../stores/boardStore";

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
  columnIndex: {
    type: Number,
    required: true,
  },
});

const boardStore = useBoardStore()
const router = useRouter();

// variable for name edit status
const editNameState = ref(false)
// ref for new task
const newTaskName = ref("")

// add task
function addTask() {
  boardStore.addTask({
    taskName: newTaskName.value,
    columnIndex: props.columnIndex
  });
  newTaskName.value = ""
}

// delete column by index
function deleteColumn(columnIndex) {
  boardStore.deleteColumn(columnIndex)
}

function goToTask(taskId) {
  router.push(`/tasks/${taskId}`)
}
</script>

<template>
  <UContainer class="column">
    <div class="column-header mb-4">
      <div>
        <UInput v-if="editNameState" type="text" v-model="column.name" />
        <h2 v-else class="">{{ column.name }}</h2>
      </div>
      <!-- track whether the name is being edited or deleted -->
      <!-- add event listener -->
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
        <UCard class="mb-4" @click="goToTask(task.id)">
          <strong> {{ task.name }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
    <UInput
      v-model="newTaskName"
      type="text"
      class=""
      placeholder="Create new task"
      icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addTask"
    />
  </UContainer>
</template>
