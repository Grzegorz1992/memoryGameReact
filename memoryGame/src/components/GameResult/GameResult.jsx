import styles from "./GameResult.module.css";

export function GameResult({ children, text }) {
	return (
		<div className={styles.gameResult}>
			<p>{text}</p>
			{children}
		</div>
	);
}
