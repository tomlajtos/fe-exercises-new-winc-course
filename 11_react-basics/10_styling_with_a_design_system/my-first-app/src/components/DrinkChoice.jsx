/* eslint-disable react/react-in-jsx-scope */
import './DrinkChoice.css';
import { Button } from './ui/Button.jsx'
import { availableDrinks } from '../utils/data';


export const DrinkChoice = ({ drink, clickFn }) => {
	return (
		<>
			<div className="drink-choice-container">
				<p>Your choice: {drink.name}</p>
				<img src={drink.imgUrl} alt={drink.alt} />
				<p>Your drink will be ready in a couple of minutes...</p>
				<Button className="reset-button" text={'Change selection'} clickFn={() => clickFn()} />
			</div>
		</>
	);
};

