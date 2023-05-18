import './DrinkItem.css';

export const DrinkItem = ({ drink, clickFn}) => {
	return (
		<>
			<button className="drink-item" onClick={()=>clickFn(drink)}>
				<img src={drink.imgUrl} alt={drink.alt} />
				<p>{drink.name}</p>
			</button>
		</>
	);
};
