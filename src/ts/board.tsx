import React, { MouseEventHandler } from 'react'
import sprite from '../assets/img/sprite.svg'
import Header from './board-header'
import ScoreBoard from './score-board'


interface BoardProps {
    resetGame: () => void
    isMultiplayer: boolean
    isXSelected: boolean
}
interface BoardState {
    field: {
        squares: JSX.Element[] | null[]
        marks: string[] | null[]
    }
    scores: {
        xScore: number
        oScore: number
        ties: number
    }
    isXStep: boolean
    isRestart: boolean
}
interface GameFieldProps  {
    squares: JSX.Element[] | null[]
    marks : string[] | null[]
    isXStep: boolean
    onClick: (param: number) => void
}
type SquareProps = {
    value: React.ReactElement | null
    marks: string[] | null[]
    id: number
    isXStep: boolean
    onClick: MouseEventHandler
}

export default class Board extends React.Component<BoardProps, BoardState> {
    state: BoardState
    readonly iconX: JSX.Element
    readonly iconO: JSX.Element

    constructor(props: BoardProps) {
        super(props)
        this.iconX = (
            <svg className='board__x-icon' width='64' height='64'>
                <use href={`${sprite}#icon-x`}></use>
            </svg>
        )
        this.iconO = (
            <svg className='board__o-icon' width='64' height='64'>
                <use href={`${sprite}#icon-o`}></use>
            </svg>
        )
        this.state = {
            field: {
                squares: Array(9).fill(null),
                marks: Array(9).fill(null),
            },
            scores: {
                xScore: 0,
                oScore: 0,
                ties: 0
            },
            isXStep: true,
            isRestart: false
        }
    }


    handleFieldClick(i: number): void {
        const { squares, marks } = this.state.field
        if (squares[i] || calculateWinner(this.state.field.marks)) {
            return
        }
        if (this.state.isXStep) {
            squares[i] = this.iconX
            marks[i] = 'x'
        } else {
            squares[i] = this.iconO
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

    restartClickHandler() {
        this.setState({
            isRestart: true
        })
    }

    nextRoundHandler(): void {
        const winner = calculateWinner(this.state.field.marks)
        let { xScore, oScore, ties } = this.state.scores

        if (winner) {
            winner === 'tie' ? ties += 1 :
                winner[0] === 'x' ? xScore += 1 :
                    winner[0] === 'o' ? oScore += 1 : null
        }

        this.setState({
            field: {
                squares: Array(9).fill(null),
                marks: Array(9).fill(null)
            },
            isXStep: true,
            scores: {
                xScore: xScore,
                oScore: oScore,
                ties: ties
            }
        })
    }

    restartGame() {
        this.setState({
            field: {
                squares: Array(9).fill(null),
                marks: Array(9).fill(null),
            },
            scores: {
                xScore: 0,
                oScore: 0,
                ties: 0
            },
            isXStep: true,
            isRestart: false
        })
        this.props.resetGame()
    }

    onRoundEnd(winner: [string, number, number, number] | string | null): JSX.Element | null {

        if (winner) {
            let title: JSX.Element | null = null
            let para: JSX.Element | null = null

            if (winner === 'tie') {
                title = (<h2 className="result__title_tie">round tied</h2>)
            } else if (winner[0] === "x") {
                title = (<h2 className="result__title_x-win">{this.iconX} takes the round</h2>)
                para = <p className="result__winner-para">player 1 wins!</p>
            } else if (winner[0] === "o") {
                title = (<h2 className="result__title_o-win">{this.iconO}takes the round</h2>)
                para = (<p className="result__winner-para">player 2 wins!</p>)
            }

                    
            return (
                <div className="board__result-backdrop">
                    <div className="result__container">
                        {para}
                        {title}
                        <div className="result__btns-wrapper">
                            <button className="result__quit-btn" type='button'onClick={() => this.restartClickHandler()}>quit</button>
                            <button className="result__next-btn" type='button' onClick={ () => this.nextRoundHandler() }>next round</button>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }


    render() {
        const winner: JSX.Element | null = calculateWinner(this.state.field.marks) ?
            this.onRoundEnd(calculateWinner(this.state.field.marks)) :
            null
        const restartModal = !this.state.isRestart ? null :
            (
               <div className="board__restart-backdrop">
                    <div className="restart__container">
                        <h2 className="restart__title">restart game?</h2>
                        <div className="restart__btns-wrapper">
                            <button className="restart__no-btn" type='button' onClick={() => {this.setState({isRestart: false})}}>no, cancel</button>
                            <button className="restart__yes-btn" type='button' onClick={() => {this.restartGame()}}>yes, restart</button>
                        </div>
                    </div>
                </div> 
            )
        
        return (
            <div className="board-container">
                <Header
                    isXStep={this.state.isXStep}
                    onClick={() => this.restartClickHandler()}
                />
                <GameField
                    squares={this.state.field.squares}
                    marks={this.state.field.marks}
                    onClick={(i) => this.handleFieldClick(i)}
                    isXStep={this.state.isXStep}
                />
                <ScoreBoard
                    isMultiplayer={this.props.isMultiplayer}
                    isXSelected={this.props.isXSelected}
                    scores={this.state.scores}
                />
                {winner}
                {restartModal}
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
                marks={this.props.marks}
                id={i}
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
    const winner = calculateWinner(props.marks)

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
    if (winner && winner !== 'tie' && (winner[1] === props.id || winner[2] === props.id || winner[3] === props.id)) {
        const winnerClass: string = winner[0] === 'x' ?
            'board__square-btn_x-win' :
            'board__square-btn_o-win'
        
        return (
            <button className={`board__square-btn ${winnerClass}`}>
                {props.value}
                {hoverIcon}
            </button>
        )
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
