import { defineStore } from "pinia";
import boardData from '../data/board.json'

// create a function that returns an object
export const useBoardStore = defineStore('boardStore', () => {
    const board = ref(boardData)

    return{
        board
    }

})