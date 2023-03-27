import './DrinkItem.css';

export const DrinkItem = ({ drink }) => {
	return (
		<>
			<div className="drink-item" >
				<img src={drink.imgUrl} />
				<p>{drink.name}</p>
			</div>
		</>
	);
};
