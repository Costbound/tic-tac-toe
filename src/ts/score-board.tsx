// interface ScoreBoardProps {

// }

export default function ScoreBoard() {
    return (
        <div className="score-board__content-container">
            <div className="score-board__x-score-container score-board__score-container">
                <h3 className="score-board__title">x (P1)</h3>
                <p className="score-board__scores">0</p>
            </div>
            <div className="score-board__ties-container score-board__score-container">
                <h3 className="score-board__title">ties</h3>
                <p className="score-board__scores">0</p>
            </div>
            <div className="score-board__o-score-container score-board__score-container">
                <h3 className="score-board__title">o (P2)</h3>
                <p className="score-board__scores">0</p>
            </div>
        </div>
    )
}