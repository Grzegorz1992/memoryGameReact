import styles from "./ScoreBoard.module.css";

export function ScoreBoard({ player1, player2, player1Score, player2Score }) {
	return (
		<>
			<div className={styles.scoreBoardBox}>
				<div className={styles.playerScore1}>
					{player1} <span className={styles.scoreNumber}>{player1Score}</span>
				</div>
				<div className={styles.playerScore2}>
					{player2} <span className={styles.scoreNumber}>{player2Score}</span>
				</div>
			</div>
		</>
	);
}
