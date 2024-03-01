import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.scss'
import Menu from './menu'
import Board from './board'

type GameState = {
    isXSelected: boolean
    isMultiplayer: boolean | null
}

// Main Element, render Menu or Game field
export class Game extends React.Component<object, GameState> {
    state: GameState
    

    constructor(props: object) {
        super(props)
        this.state = localStorage.getItem('game') ? JSON.parse(localStorage.getItem('game')!) :
            {
                isXSelected: true, // Mark X or O selector state
                isMultiplayer: null // Select play vs CPU or another player, if null - menu will be rendered
            }
    }

    // Handle what user select - play vs CPU or vs another player
    handleEnemySelect(i: boolean) {
        this.setState({
            isMultiplayer: i
        })
    }

    // Handle what player select - mark X or mark O
    handleMarkChange(i: boolean): void {
        this.setState({
            isXSelected: i
        })
    }

    // Reset states to default when game reset activated
    handleReset() {
        this.setState({
            isXSelected: true,
            isMultiplayer: null
        })
        localStorage.clear()
    }

    render(): React.ReactElement | null {
        // Save game progress to local storage
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