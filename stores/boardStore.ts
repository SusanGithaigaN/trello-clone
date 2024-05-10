import { v4 as uuid } from 'uuid'
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from '~/data/board.json'

// create a function that returns an object
export const useBoardStore = defineStore('boardStore', () => {
    // CRUD OPERATIONS

    // ADD
    // add a key since local storage data is fetched via key
    const board = useStorage('board', boardData)

    // Tasks
    // Getter request that fetches the task
    const getTask = computed(() => {
        // cache a requested value within the pinia storw
        return taskId => {
            for (const column of board.value.columns) {
                const task = column.tasks.find(task => task.id === taskId)
                if (task) return task
            }
        }
    })

    // CREATE(add task)
    function addTask({ columnIndex, taskName }) {
        board.value.columns[columnIndex].tasks.push({
            id: uuid(),
            name: taskName,
            description: ''
        })
    }

    // DELETE task
    function deleteTask(taskId){
       for (const column of board.value.columns) {
        // find the index of the task
        const taskIndex = column.tasks.findIndex(task => task.id === taskId)

        // if we find something that doesn't exist in the column
        if (taskIndex !== -1) {
            columns.tasks.splice(taskIndex, 1)
            // end loop
            return
        }
       }
    }

    // Columns
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
        addTask,
        addColumn,
        deleteColumn,
        deleteTask
    }
})