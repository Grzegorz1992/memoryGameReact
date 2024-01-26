export function Item({ name, id, onClick, className }) {
	return (
		<div onClick={onClick} className={className} id={id}>
			{name}
		</div>
	);
}
