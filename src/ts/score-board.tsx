interface ScoreBoardProps {
    isMultiplayer: boolean
    isXSelected: boolean
    scores: {
        xScore: number
        oScore: number
        ties: number
    }
}

export default function ScoreBoard(props: ScoreBoardProps) {
    let xTitle: string | undefined
    let oTitle: string | undefined
    if (props.isMultiplayer) {
        if (props.isXSelected) {
            xTitle = 'p1'
            oTitle = 'p2'
        } else {
            xTitle = 'p2'
            oTitle = 'p1'
        }
    } else {
        if (props.isXSelected) {
            xTitle = 'you'
            oTitle = 'cpu'
        } else {
            xTitle = 'cpu'
            oTitle = 'you'
        }
    }

    return (
        <div className="score-board__content-container">
            <div className="score-board__x-score-container score-board__score-container">
                <h3 className="score-board__title">x ({xTitle})</h3>
                <p className="score-board__scores">{props.scores.xScore}</p>
            </div>
            <div className="score-board__ties-container score-board__score-container">
                <h3 className="score-board__title">ties</h3>
                <p className="score-board__scores">{props.scores.ties}</p>
            </div>
            <div className="score-board__o-score-container score-board__score-container">
                <h3 className="score-board__title">o ({oTitle})</h3>
                <p className="score-board__scores">{props.scores.oScore}</p>
            </div>
        </div>
    )
}