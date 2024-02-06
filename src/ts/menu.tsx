import React from 'react'
import sprite from '../assets/img/sprite.svg'
import { HandleClick } from './main'


type MenuProps = {
    isXSelected: boolean
    onClick: (param: HandleClick) => void
}

export function Menu(props: MenuProps): React.ReactNode {
        return (
            <div className='menu-container'>
                <Logo />
                <MarkSelector
                    isXSelected={props.isXSelected}
                    onClick = {(i) => {props.onClick(i)}}
                />
                <EnemySelector />
            </div>
        )
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

function MarkSelector(props: MenuProps) {
    const xSelected = props.isXSelected ? ' mark-selector__btn_selected' : ''
    const oSelected = props.isXSelected ? '' : ' mark-selector__btn_selected'
    console.log(xSelected, oSelected)

    return (
        <div className="mark-selector__container">
            <h2 className="mark-selector__title">pick players 1's mark</h2>
            <input type="checkbox" className="mark-selector__checkbox visually-hidden" id='mark-selector'/>
            <label className="mark-selector__label" htmlFor='mark-selector'>
                <div className="mark-selector__selected-div"></div>
                <svg className='mark-selector__x-icon' width='32' height='32'>
                    <use href={`${sprite}#icon-x`}></use>
                </svg>
                <svg className='mark-selector__o-icon' width='32' height='32'>
                    <use href={`${sprite}#icon-o`}></use>
                </svg>
            </label>
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
