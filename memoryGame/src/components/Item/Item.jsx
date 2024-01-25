import styles from "./Item.module.css";

export function Item({ name }) {
	return <div className={styles.item}>{name}</div>;
}
