import React from 'react'
import sprite from '../assets/img/sprite.svg'


type MenuProps = {

}

export class Menu extends React.Component {
    constructor(props: MenuProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <div className='menu-container'>
                <Logo />
                <MarkSelector />
                <EnemySelector />
            </div>
        )
    }
}

function Logo() {
    return (
        <div className="logo-container">
            <svg width='72' height='32'>
                <use href={ `${sprite}#logo` } />
            </svg>
        </div>
    )
}

function MarkSelector() {
    return (
        <div className="mark-selector__container">
            <h2 className="mark-selector__title">pick players 1's mark</h2>
            <div className="mark-selector__btns-container">
                <button className="mark-selector__o-btn" type='button'>
                    <svg className='mark-selector__o-icon' width='32' height='32'>
                        <use href={`${sprite}#icon-o`}></use>
                    </svg>
                </button>
                <button className="mark-selector__x-btn" type='button'>
                    <svg className='mark-selector__x-icon' width='32' height='32'>
                        <use href={`${sprite}#icon-x`}></use>
                    </svg>
                </button>
            </div>
            <p className="mark-selector__notice">remember: x goes firt</p>
        </div>
    )
}

function EnemySelector() {
    return (
        <div className="enemy-selector__container">
            <button className="enemy-selector__cpu-btn" type='button'>new game (vs cpu)</button>
            <button className="enemy-selector__multiplayer-btn" type='button'>new game (vs player)</button>
        </div>
    )
}