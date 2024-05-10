<script setup>
// use ~(tilda) instead of . so that if incase the file moves, the code will not break
import { useBoardStore } from "~/stores/boardStore"
// import { computed } from "vue";
// import { useRoute } from "vue-router";

const boardStore = useBoardStore()
const route = useRoute()
const router = useRouter()

const task = computed(() => {
  return boardStore.getTask(route.params.id)
});

// delete task
function deleteTask() {
  boardStore.deleteTask(route.params.id)
  router.push("/")
}
</script>

<template>
  <div class="task-wrapper">
    <div v-if="task" class="task-view">
      <UFormGroup label="Name" class="mb-4 w-full" required>
        <UInput type="text" v-model="task.name" />
      </UFormGroup>
      <UFormGroup label="Description" class="w-full mb-4" required>
        <UTextarea v-model="task.description" />
      </UFormGroup>
      <UButton icon="i-heroicons-trash" color="red" @click="deleteTask"
        >Delete task</UButton
      >
    </div>
    <div v-else>
      <p class="font-bold text-red-600">Task not found!</p>
    </div>
  </div>
</template>
