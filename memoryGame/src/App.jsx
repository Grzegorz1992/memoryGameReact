import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Item } from "./components/Item/Item";
import { shuffleArray } from "./utils/shuffleArray";
import { Items } from "./utils/Items";
import { PlayerMove } from "./components/PlayerMove/PlayerMove";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { GameResult } from "./components/GameResult/GameResult";

function App() {
	const [itemShown, setItemShown] = useState(Array(Items.length).fill(false));
	const [clickedItems, setClickedItems] = useState([]);
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [playerScores, setPlayerScores] = useState({ 1: 0, 2: 0 });
	const [matchedItems, setMatchedItems] = useState([]);
	const [disableClick, setDisableClick] = useState(false);
	const [shuffledItems, setShuffledItems] = useState(() => shuffleArray(Items));
	const [foundPairs, setFoundPairs] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const winner =
		playerScores[1] > playerScores[2]
			? "Gracz 1"
			: playerScores[2] > playerScores[1]
			? "Gracz 2"
			: "Remis";

	useEffect(() => {
		if (clickedItems.length === 2) {
			const [firstIndex, secondIndex] = clickedItems;
			const firstCard = shuffledItems[firstIndex];
			const secondCard = shuffledItems[secondIndex];

			setDisableClick(true);

			setTimeout(() => {
				if (firstCard && secondCard && firstCard.name === secondCard.name) {
					setMatchedItems((prevMatchedItems) => [
						...prevMatchedItems,
						firstCard.name,
					]);
					setPlayerScores((prevScores) => ({
						...prevScores,
						[currentPlayer]: prevScores[currentPlayer] + 1,
					}));
					setFoundPairs((prevPairs) => prevPairs + 1);
				} else {
					const newItemShown = Array(Items.length).fill(false);
					setItemShown(newItemShown);
					setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
				}

				setClickedItems([]);
				setDisableClick(false);
			}, 1000);
		}

		if (foundPairs === Items.length / 2) {
			setShowModal(true);
		}
	}, [
		clickedItems,
		currentPlayer,
		shuffledItems,
		matchedItems,
		playerScores,
		foundPairs,
		showModal,
	]);

	function handleItemClick(index) {
		if (!disableClick && !matchedItems.includes(shuffledItems[index]?.name)) {
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
		setMatchedItems([]);
		setFoundPairs(0);
		setShuffledItems(shuffleArray(Items));
		setShowModal(false);
	}

	return (
		<>
			<div className={showModal ? styles.containerBlur : styles.container}>
				<h1 className={styles.header}>MEMORY NUMBERS</h1>
				<PlayerMove>{`Player ${currentPlayer}'s move`}</PlayerMove>
				<div className={styles.itemsBox}>
					{shuffledItems.map(({ name, key, id }, index) => (
						<Item
							name={
								itemShown[index] || matchedItems.includes(name) ? name : "?"
							}
							key={key}
							id={id}
							className={
								itemShown[index] || matchedItems.includes(name)
									? styles.item
									: styles.hideItem
							}
							onClick={() => handleItemClick(index)}
						></Item>
					))}
				</div>
				<ResetButton onClick={resetGame} />
				<ScoreBoard
					player1={"Player nr 1:"}
					player2={"Player nr 2:"}
					player1Score={playerScores[1]}
					player2Score={playerScores[2]}
				/>
			</div>
			{showModal && (
				<GameResult
					text={`Koniec gry! ${
						winner === "Remis" ? "Remis" : `Wygrywa ${winner}!`
					}`}
				>
					<ResetButton onClick={resetGame} />
				</GameResult>
			)}
		</>
	);
}

export default App;
