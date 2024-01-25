import styles from "./App.module.css";

function App() {
	const Items = [
		{ name: "1", id: 1 },
		{ name: "1", id: 2 },
		{ name: "2", id: 3 },
		{ name: "2", id: 4 },
		{ name: "3", id: 5 },
		{ name: "3", id: 6 },
		{ name: "4", id: 7 },
		{ name: "4", id: 8 },
		{ name: "5", id: 9 },
		{ name: "5", id: 10 },
		{ name: "6", id: 12 },
		{ name: "6", id: 12 },
		{ name: "7", id: 13 },
		{ name: "7", id: 14 },
		{ name: "8", id: 15 },
		{ name: "8", id: 16 },
	];

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>MEMORY NUMBERS</h1>

			<h2 className={styles.playerMove}>Ruch gracza 1</h2>
			<div className={styles.itemsBox}>
				<div>1</div>
				<div>2</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>7</div>
				<div>8</div>
			</div>
			<div>Gracz 1: 0</div>
			<div>Gracz 2: 0</div>
		</div>
	);
}

export default App;
