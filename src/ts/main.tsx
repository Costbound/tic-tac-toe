import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.scss'
import { Menu } from './menu'


type GameProps = {

}
type State = {
    isXSelected: boolean
    isStarted: boolean
    isMultiplayer: boolean
}

export class Game extends React.Component<GameProps, State> {
    state: State
    constructor(props: GameProps) {
        super(props)
        this.state = {
            isXSelected: true,
            isStarted: false,
            isMultiplayer: false
        }
    }

    render(): React.ReactNode {
        if (!this.state.isStarted) {
            return (
                <Menu />
            )
        }
    }
}

const root = ReactDOM.createRoot(document.querySelector('.game')!)
root.render(<Game />)
