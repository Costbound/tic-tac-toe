

export default function makeStep(marksDirty: string[] | null[], isXSelected: boolean, isXStep: boolean): number | undefined {
    const marks = marksDirty.slice()
    const oponent: string = isXSelected ? 'x' : 'o'
    const cpu: string = isXSelected ? 'o' : 'x'
    const isCpuStep = !isXSelected && isXStep ? true :
        isXSelected && !isXStep ? true : false
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
        if (marks.every(mark => mark === null)) {
            const randomMark = Math.floor(Math.random() * 10)
            if (randomMark > 8) {
                return 8
            }
            return randomMark
        }
        
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


        if (!marks[4]) {
            return 4
        }
        return marks.indexOf(null!)
    }
}