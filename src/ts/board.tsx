import React, { MouseEventHandler } from 'react'
import sprite from '../assets/img/sprite.svg'
import Header from './board-header'
import ScoreBoard from './score-board'


interface BoardProps {

}
interface BoardState {
    field: {
        squares: JSX.Element[] | null[]
        marks: string[] | null[]
    }
    isXStep: boolean
}
interface GameFieldProps  {
    squares: React.ReactElement[] | null[]
    isXStep: boolean
    onClick: (param: number) => void
}
type SquareProps = {
    value: React.ReactElement | null
    isXStep: boolean
    onClick: MouseEventHandler
}

export default class Board extends React.Component<BoardProps, BoardState> {
    state: BoardState

    constructor(props: BoardProps) {
        super(props)
        this.state = {
            field: {
                squares: Array(9).fill(null),
                marks: Array(9).fill(null),
            },
            isXStep: true
        }
    }


    handleFieldClick(i: number): void {
        const { squares, marks } = this.state.field
        if (squares[i] || calculateWinner(this.state.field.marks)) {
            return
        }
        if (this.state.isXStep) {
            squares[i] = (
                <svg className='board__x-icon' width='64' height='64'>
                    <use href={`${sprite}#icon-x`}></use>
                </svg>
            )
            marks[i] = 'x'
        } else {
            squares[i] = (
                <svg className='board__o-icon' width='64' height='64'>
                    <use href={`${sprite}#icon-o`}></use>
                </svg>
            )
            marks[i] = 'o'
        }
            
        this.setState({
            field: {
                squares: squares,
                marks: marks
            },
            isXStep: !this.state.isXStep
        })
    }

    onRoundEnd(winner: [string, number, number, number] | string | null): JSX.Element | null {
        if (winner) {
            // const title = winner === 'tie' ? <h2 className="result__title_tie">round tied</h2> : 
            //     winner[0] === 'x' ? (
            //         <h2 className="result__title_x-win">
            //             <svg className='board__x-icon' width='64' height='64'>
            //                 <use href={`${sprite}#icon-x`}></use>
            //             </svg>
            //         </h2>
            //     ) 
            return (
                <div className="board__result-backdrop">
                    <div className="result__container">
                        {/* {title} */}
                        <div className="result__btns-wrapper">
                            <button className="result__quit-btn" type='button'>quit</button>
                            <button className="result__next-btn" type='button'>next round</button>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }


    render() {
        this.onRoundEnd(calculateWinner(this.state.field.marks))
        return (
            <div className="board-container">
                <Header
                    isXStep={this.state.isXStep}
                />
                <GameField
                    squares={this.state.field.squares}
                    onClick={(i) => this.handleFieldClick(i)}
                    isXStep={this.state.isXStep}
                />
                <ScoreBoard />
            </div>
        )
    }
}


class GameField extends React.Component<GameFieldProps> {

    constructor(props: GameFieldProps) {
        super(props)
    }

    renderSquare(i: number): React.ReactElement {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                isXStep={this.props.isXStep}
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
function Square(props: SquareProps): JSX.Element {
    let hoverIcon: JSX.Element | null = null
    if (!props.value) {
        if (props.isXStep) {
            hoverIcon = (
                <svg className='board__icon-outline' width='64' height='64'>
                    <use href={`${sprite}#icon-x-outline`}></use>
                </svg>
            )
        } else {
            hoverIcon = (
                <svg className='board__icon-outline' width='64' height='64'>
                    <use href={`${sprite}#icon-o-outline`}></use>
                </svg>
            )
        }
    }
    return (
            <button className='board__square-btn' onClick={props.onClick}>
                {props.value}
                {hoverIcon}
            </button>
    )
}

function calculateWinner(marks: string[] | null[]): [string, number, number, number] | string | null {
    const winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (const line of winState) {
        const [a, b, c] = line
        if (marks[a] && marks[a] === marks[b] && marks[a] === marks[c]) {
            return [ marks[a]!, a, b, c ]
        }
    }
    if (marks.every(mark => mark)) {
        return 'tie'
    }
    return null
}
