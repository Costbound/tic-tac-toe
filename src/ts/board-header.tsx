import sprite from '../assets/img/sprite.svg'


type HeaderProps = {
    isXStep: boolean
    onClick: () => void
}
type StepSVGProps = {
    isXStep: boolean
}


export default function Header(props: HeaderProps) {
    return (
        <div className="board__header">
            <svg width='72' height='32'>
                <use href={ `${sprite}#logo` } />
            </svg>
            <div className="header__turn-container">
                <StepSVG
                    isXStep={props.isXStep}
                />
                <p className="header__turn-para">turn</p>
            </div>
            <button className="header__reset-btn" type='button' onClick={props.onClick}>
                <svg className='header-reset-icon' width='20' height='20'>
                    <use href={`${sprite}#icon-restart`}></use>
                </svg>
            </button>
        </div>
    )
}

function StepSVG(props: StepSVGProps) {
    if (props.isXStep) {
        return (
            <svg className='header__x-icon' width='20' height='20'>
                <use href={`${sprite}#icon-x`}></use>
            </svg>
        )
    }
    return (
        <svg className='header__o-icon' width='20' height='20'>
            <use href={`${sprite}#icon-o`}></use>
        </svg>
    )
}
