import React, { useState } from 'react'
import sprite from '../assets/img/sprite.svg'


interface MenuProps  {
    onChange: (param: boolean) => void
    onClick: (param: boolean) => void
}
interface MarkSelectorProps {
    onChange: (param: boolean) => void
}
interface EnemySelectorProps {
    onClick: (param: boolean) => void
}

    
export default function Menu(props: MenuProps): React.ReactNode {
        return (
            <div className='menu-container'>
                <Logo />
                <MarkSelector
                    onChange = {(i) => {props.onChange(i)}}
                />
                <EnemySelector
                    onClick = {(i) => {props.onClick(i)}}
                />
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

function MarkSelector(props: MarkSelectorProps) {
const [checked, setChecked] = useState(true)

    return (
        <div className="mark-selector__container">
            <h2 className="mark-selector__title">pick players 1's mark</h2>
            <input
                type="checkbox"
                className="mark-selector__checkbox visually-hidden"
                id='mark-selector'
                checked={!checked}
                onChange={() => { props.onChange(!checked);  setChecked(!checked) }}
            />
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

function EnemySelector(props: EnemySelectorProps) {
    return (
        <div className="enemy-selector__container">
            <button
                className="enemy-selector__cpu-btn"
                type='button'
                onClick={() => props.onClick(false)}
            >
                new game (vs cpu)
            </button>
            <button
                className="enemy-selector__multiplayer-btn"
                type='button'
                onClick={() => props.onClick(true)}
            >
                new game (vs player)
            </button>
        </div>
    )
}
