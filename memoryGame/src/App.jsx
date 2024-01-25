import styles from "./App.module.css";
import { Item } from "./components/Item/Item";
import { shuffleArray } from "./utils/shuffleArray";
import { Items } from "./utils/Items";

function App() {
	const shuffledItems = shuffleArray(Items);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>MEMORY NUMBERS</h1>

			<h2 className={styles.playerMove}>Ruch gracza 1</h2>
			<div className={styles.itemsBox}>
				{shuffledItems.map(({ name, id }) => (
					<Item name={name} key={id} />
				))}
			</div>
			<div>Gracz 1: 0</div>
			<div>Gracz 2: 0</div>
		</div>
	);
}

export default App;
