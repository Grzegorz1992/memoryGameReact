// import styles from "./Item.module.css";
// import { useState } from "react";

export function Item({ name, id, onClick, className }) {
	// const [itemShown, setItemShown] = useState(false);
	// const [numbers, setNumbers] = useState([{ name: name, id: id }]);

	// function handleItemClick() {
	// 	setNumbers((prevNumber) => [...prevNumber, { name: name, id: id }]);

	// 	setItemShown(true);
	// 	console.log(numbers);
	// }

	return (
		<div onClick={onClick} className={className} id={id}>
			{name}
		</div>
	);
}
