import { useState, useMemo, useEffect } from "react";
import styles from "./App.module.css";
import { Item } from "./components/Item/Item";
import { shuffleArray } from "./utils/shuffleArray";
import { Items } from "./utils/Items";
import { PlayerMove } from "./components/PlayerMove/PlayerMove";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";

function App() {
	const [itemShown, setItemShown] = useState(Array(Items.length).fill(false));
	const [clickedItems, setClickedItems] = useState([]);
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [playerScores, setPlayerScores] = useState({ 1: 0, 2: 0 });
	const [matchedPairs, setMatchedPairs] = useState([]);
	const [disableClick, setDisableClick] = useState(false);
	const shuffledItems = useMemo(() => shuffleArray(Items), []);

	useEffect(() => {
		if (clickedItems.length === 2) {
			const [firstIndex, secondIndex] = clickedItems;
			const firstCard = shuffledItems[firstIndex];
			const secondCard = shuffledItems[secondIndex];

			setDisableClick(true);

			setTimeout(() => {
				if (firstCard && secondCard && firstCard.name === secondCard.name) {
					setMatchedPairs((prevPairs) => [...prevPairs, firstCard.name]);
					setPlayerScores((prevScores) => ({
						...prevScores,
						[currentPlayer]: prevScores[currentPlayer] + 1,
					}));
				} else {
					const newItemShown = Array(Items.length).fill(false);
					setItemShown(newItemShown);
					setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
				}

				setClickedItems([]);
				setDisableClick(false);
			}, 1000);
		}

		if (
			matchedPairs.length ===
			[...new Set(Items.map((item) => item.name))].length
		) {
			const winner = playerScores[1] > playerScores[2] ? "Gracz 1" : "Gracz 2";
			alert(`Koniec gry! Wygrywa ${winner}!`);

			resetGame();
		}
	}, [clickedItems, currentPlayer, shuffledItems, matchedPairs, playerScores]);

	function handleItemClick(index) {
		if (!disableClick && !matchedPairs.includes(shuffledItems[index]?.name)) {
			const newItemShown = [...itemShown];
			newItemShown[index] = true;
			setItemShown(newItemShown);
			setClickedItems((prevClickedItems) => [...prevClickedItems, index]);
		}
	}

	function resetGame() {
		setItemShown(Array(Items.length).fill(false));
		setClickedItems([]);
		setCurrentPlayer(1);
		setPlayerScores({ 1: 0, 2: 0 });
		setMatchedPairs([]);
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>MEMORY NUMBERS</h1>
			<PlayerMove>Player move: {currentPlayer}</PlayerMove>
			<div className={styles.itemsBox}>
				{shuffledItems.map(({ name, key, id }, index) => (
					<Item
						name={itemShown[index] || matchedPairs.includes(name) ? name : "?"}
						key={key}
						id={id}
						className={
							itemShown[index] || matchedPairs.includes(name)
								? styles.item
								: styles.hideItem
						}
						onClick={() => handleItemClick(index)}
					></Item>
				))}
			</div>
			<button className={styles.resetBtn} onClick={resetGame}>RESET</button>
			<ScoreBoard
				player1={"Player nr 1:"}
				player2={"Player nr 2:"}
				player1Score={playerScores[1]}
				player2Score={playerScores[2]}
			/>
		</div>
	);
}

export default App;
