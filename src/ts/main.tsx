import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.scss'
import Menu from './menu'
import Board from './board'

type GameState = {
    isXSelected: boolean
    isMultiplayer: boolean | null
}

export class Game extends React.Component<object, GameState> {
    state: GameState
    

    constructor(props: object) {
        super(props)
        this.state = localStorage.getItem('game') ? JSON.parse(localStorage.getItem('game')!) :
            {
                isXSelected: true,
                isMultiplayer: null
            }
    }

    handleEnemySelect(i: boolean) {
        this.setState({
            isMultiplayer: i
        })
    }

    handleMarkChange(i: boolean): void {
        this.setState({
            isXSelected: i
        })
    }
    handleReset() {
        this.setState({
            isXSelected: true,
            isMultiplayer: null
        })
        localStorage.clear()
    }

    render(): React.ReactElement | null {
        localStorage.setItem('game', JSON.stringify(this.state))
        if (this.state.isMultiplayer === null) {
            return (
                <Menu
                    onChange={(i) => { this.handleMarkChange(i) }}
                    onClick={(i) => { this.handleEnemySelect(i) }}
                />
            )
        }
        return (
            <Board
                resetGame={() => { this.handleReset() }}
                isMultiplayer={this.state.isMultiplayer}
                isXSelected={this.state.isXSelected}
            />
        )
    }
}


const root = ReactDOM.createRoot(document.querySelector('.game')!)
root.render(<Game />)