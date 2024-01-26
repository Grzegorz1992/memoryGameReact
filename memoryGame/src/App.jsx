import { useState } from "react";
import styles from "./App.module.css";
import { Item } from "./components/Item/Item";
import { shuffleArray } from "./utils/shuffleArray";

function App() {
	const Items = [
		{ name: "1", id: 1, key: 10 },
		{ name: "1", id: 1, key: 20 },
		{ name: "2", id: 2, key: 30 },
		{ name: "2", id: 2, key: 40 },
		{ name: "3", id: 3, key: 50 },
		{ name: "3", id: 3, key: 60 },
		{ name: "4", id: 4, key: 70 },
		{ name: "4", id: 4, key: 80 },
		{ name: "5", id: 5, key: 90 },
		{ name: "5", id: 5, key: 100 },
		{ name: "6", id: 6, key: 110 },
		{ name: "6", id: 6, key: 120 },
		{ name: "7", id: 7, key: 130 },
		{ name: "7", id: 7, key: 140 },
		{ name: "8", id: 8, key: 150 },
		{ name: "8", id: 8, key: 160 },
	];

	const [numbers, setNumbers] = useState([{name:name}]);
	const [itemShown, setItemShown] = useState(false);

	function handleItemClick() {
		setNumbers((prevNumber) => [...prevNumber, {name:name  }]);

		setItemShown(true);
		console.log(numbers);
	}

	const shuffledItems = shuffleArray(Items);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>MEMORY NUMBERS</h1>
			<h2 className={styles.playerMove}>Ruch gracza 1</h2>
			<div className={styles.itemsBox}>
				{shuffledItems.map(({ name, key, id }) => (
					<Item
						name={itemShown && numbers.length <= 2 ? name : name}
						key={key}
						id={id}
						className={
							itemShown && numbers.length <= 2
								? styles.item
								: !itemShown
								? styles.item
								: styles.hideItem
						}
						onClick={() => handleItemClick(key)}
					></Item>
				))}
			</div>
			<div>Gracz 1: 0</div>
			<div>Gracz 2: 0</div>
		</div>
	);
}

export default App;


