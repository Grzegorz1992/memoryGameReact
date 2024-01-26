import { useState, useMemo } from "react";
import styles from "./App.module.css";
import { Item } from "./components/Item/Item";
import { shuffleArray } from "./utils/shuffleArray";
import { Items } from "./utils/Items";

function App() {
	const [itemShown, setItemShown] = useState(Array(Items.length).fill(false));
	const [clickedItems, setClickedItems] = useState([]);

	function handleItemClick(index) {
		if (clickedItems.length < 2 && !clickedItems.includes(index)) {
			const newItemShown = [...itemShown];
			newItemShown[index] = true;
			setItemShown(newItemShown);

			setClickedItems((prevClickedItems) => [...prevClickedItems, index]);

			if (clickedItems.length + 1 === 2) {
				setTimeout(() => {
					setItemShown(Array(Items.length).fill(false));
					setClickedItems([]);
				}, 1000);
			}
		}
	}

	const shuffledItems = useMemo(() => shuffleArray(Items), []);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>MEMORY NUMBERS</h1>
			<h2 className={styles.playerMove}>Ruch gracza 1</h2>
			<div className={styles.itemsBox}>
				{shuffledItems.map(({ name, key, id }, index) => (
					<Item
						name={itemShown[index] ? name : "?"}
						key={key}
						id={id}
						className={itemShown[index] ? styles.item : styles.hideItem}
						onClick={() => handleItemClick(index)}
					></Item>
				))}
			</div>
			<div>Gracz 1: 0</div>
			<div>Gracz 2: 0</div>
		</div>
	);
}

export default App;
