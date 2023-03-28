import './DrinkItem.css';

export const DrinkItem = ({ drink }) => {
	return (
		<>
			<div className="drink-item" >
				<img src={drink.imgUrl} alt={drink.alt} />
				<p>{drink.name}</p>
			</div>
		</>
	);
};
