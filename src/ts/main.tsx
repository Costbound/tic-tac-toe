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
export type HandleClick = {
    selectedMark?: string
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

    handleClick(i:HandleClick): void {
        console.log(i)
        if (i.selectedMark === "x") {
            this.setState({
                isXSelected: true
            }) 
        } else if (i.selectedMark === "o") {
            this.setState({
                isXSelected: false
            })
        }
        console.log(this.state)
    }

    render(): React.ReactNode | null {
        if (!this.state.isStarted) {
            return (
                <Menu
                    isXSelected={this.state.isXSelected}
                    onClick={(i) => { this.handleClick(i) }}
                />
            )
        }
        return null
    }
}


const root = ReactDOM.createRoot(document.querySelector('.game')!)
root.render(<Game />)
