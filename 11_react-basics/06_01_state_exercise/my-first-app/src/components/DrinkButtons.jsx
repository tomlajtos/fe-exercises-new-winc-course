/* eslint-disable react/react-in-jsx-scope */
import './DrinkButtons.css';
import {Button} from './Button.jsx';

export const DrinkButtons = ({drinkOne, drinkTwo}) => {
	const drinkPrompt = "Would you like to have tea or coffee?";
	return (
		<>
			<h2>{drinkPrompt}</h2>
			<div className="button-group">
				<Button text={drinkOne} />
				<Button text={drinkTwo} />
			</div>
		</>
	);
};


