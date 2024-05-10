import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from '../data/board.json'

// create a function that returns an object
export const useBoardStore = defineStore('boardStore', () => {
    // CRUD OPERATIONS

    // ADD
    // add a key since local storage data is fetched via key
    const board = useStorage('board', boardData)

    // Getter request that fetches the task
    const getTask = computed(() => {
        // cache a requested value within the pinia storw
        return taskId => {
            for (const column of board.value.columns) {
                const task = column.tasks.find(task => task.id == taskId)
                if (task) {
                    return task
                }
            }
        }
    })

    // CREATE 
    function addColumn(columnName) {
        board.value.columns.push({
            name: columnName,
            tasks: []
        })
    }

    // DELETE
    function deleteColumn(columnIndex) {
        // splice the column and take out the column index of the first element
        board.value.columns.splice(columnIndex, 1)
    }


    // export variables
    return {
        // state
        board,
        // getters
        getTask,
        // actions
        addColumn,
        deleteColumn
    }
})