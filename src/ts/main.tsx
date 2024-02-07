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
        this.state = {
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
        console.log('Param: ', i)
        this.setState({
            isXSelected: i
        })
    }

    render(): React.ReactNode | null {
        console.log('State: ', this.state.isMultiplayer)
        if (this.state.isMultiplayer !== true) {
            return (
                <Menu
                    onChange={(i) => { this.handleMarkChange(i) }}
                    onClick={(i) => { this.handleEnemySelect(i) }}
                />
            )
        }
        return (
            <Board />
        )
    }
}


const root = ReactDOM.createRoot(document.querySelector('.game')!)
root.render(<Game />)