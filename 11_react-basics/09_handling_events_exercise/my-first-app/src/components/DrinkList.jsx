import { DrinkItem } from './DrinkItem.jsx';

export const DrinkList = ({ drinks, clickFn}) => {
	return (
		<>
			{drinks.map((drink) => (<DrinkItem key={drink.id} drink={drink} clickFn={clickFn}/>))}
		</>
	);
};
