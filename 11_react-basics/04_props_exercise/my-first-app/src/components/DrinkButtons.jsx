/* eslint-disable react/react-in-jsx-scope */
import './DrinkButtons.css';

export const DrinkButtons = ({drinkOne, drinkTwo}) => {
	return (
		<>
			<h2>Would you like to have tea or coffee?</h2>
			<div className="button-group">
				<button className="button">{drinkOne}</button>
				<button className="button">{drinkTwo}</button>
			</div>
		</>
	);
};


