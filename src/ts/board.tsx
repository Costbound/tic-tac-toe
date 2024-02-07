import React from 'react'
import Header from './board-header'
import ScoreBoard from './score-board'


interface BoardProps {

}
interface BoardState {
    squares: null[] | React.ReactNode[]
    isXStep: boolean
}
interface GameFieldProps  {
    squares: React.ReactNode[] | null[]
}
interface GameFieldState extends GameFieldProps {

}
type SquareProps = {
    value: React.ReactNode | null
}

export default class Board extends React.Component<BoardProps, BoardState> {
    state: BoardState

    constructor(props: BoardProps) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            isXStep: true
        }
    }


    render() {
        return (
            <div className="board-container">
                <Header
                    isXStep={this.state.isXStep}
                />
                <GameField
                    squares = {this.state.squares}
                />
                <ScoreBoard />
            </div>
        )
    }
}


class GameField extends React.Component<GameFieldProps, GameFieldState> {
    state: GameFieldState

    constructor(props: GameFieldProps) {
        super(props)
        this.state = {
            squares: this.props.squares
        }
    }

    renderSquare(i: number): React.ReactNode {
        return (
            <Square
                value = {this.state.squares[i]}
            />

        )
    }


    render() {
        return (
            <div className="board__game-field">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        )
    }
}
function Square(props: SquareProps) {
    return (
        <button className='board__square-btn'>
            {props.value}
        </button>
    )
}

