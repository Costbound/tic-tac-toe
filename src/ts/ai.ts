
// Calculating cpu next step. Return number from 0 to 8 or undefined. Returned number will be index of square for cpu step
export default function makeStep(marksDirty: string[] | null[], isXSelected: boolean, isXStep: boolean): number | undefined {
    const marks = marksDirty.slice() // Create field state copy
    const oponent: string = isXSelected ? 'x' : 'o' // check which mark is player
    const cpu: string = isXSelected ? 'o' : 'x' // check which mark is cpu
    const isCpuStep = !isXSelected && isXStep ? true :
        isXSelected && !isXStep ? true : false
    
    // All win states. Numbers in arrays is index of square in marks or squares
    const winState: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    if (isCpuStep) {
        // if game field is empty generate rundom number
        if (marks.every(mark => mark === null)) {
            const randomMark = Math.floor(Math.random() * 10)
            if (randomMark > 8) {
                return 8
            }
            return randomMark
        }
        
        // Check if there is remain for cpu to put only one mark to win and if yes will return this square index
        for (let state of winState) {
            const [a, b, c] = state

            if (marks[a] === cpu && marks[b] === cpu && marks[c] === null) {
                return c
            } else if (marks[a] === cpu && marks[c] === cpu && marks[b] === null) {
                return b
            } else if (marks[b] === cpu && marks[c] === cpu && marks[a] === null) {
                return a
            }
        }

        // Check if thre is remain for player to put only one mark to win and if yes will return this quare index to block oponent
        for (let state of winState) {
            const [a, b, c] = state

            if (marks[a] === oponent && marks[b] === oponent && marks[c] === null) {
                return c
            } else if (marks[a] === oponent && marks[c] === oponent && marks[b] === null) {
                return b
            } else if (marks[b] === oponent && marks[c] === oponent && marks[a] === null) {
                return a
            }
        }

        // Put mark in center square if it is empty
        if (!marks[4]) {
            return 4
        }

        // Put mark in first empty square
        return marks.indexOf(null!)
    }
}