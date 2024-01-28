import styles from "./ResetButton.module.css";

export function ResetButton({ onClick }) {
	return (
		<button onClick={onClick} className={styles.resetButton}>
			RESET
		</button>
	);
}
