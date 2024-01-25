import styles from "./Item.module.css";
import { useState } from "react";

export function Item({ name }) {
	const [itemShown, setItemShown] = useState(false);

	return (
		<div onClick={() => setItemShown(true)} className={itemShown ? styles.item : styles.hideItem}>
			{itemShown ? name : "?"}
		</div>
	);
}
