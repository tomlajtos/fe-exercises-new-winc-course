import { DrinkItem } from './DrinkItem.jsx';

export const DrinkList = ({ drinks }) => {
	return (
		<>
			{drinks.map((drink) => (<DrinkItem key={drink.id} drink={drink} />))}
		</>
	);
};
