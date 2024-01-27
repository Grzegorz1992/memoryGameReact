import styles from "./PlayerMove.module.css";

export function PlayerMove({children}) {
	return <h2 className={styles.playerMove}>{children}</h2>;
}
