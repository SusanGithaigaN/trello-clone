import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import boardData from '../data/board.json'

// create a function that returns an object
export const useBoardStore = defineStore('boardStore', () => {
    // CRUD OPERATIONS

    // ADD
    // add a key since local storage data is fetched via key
    const board = useStorage('board', boardData)

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
        board,
        addColumn,
        deleteColumn
    }
})