import React from 'react'
import './DrinkButtons.css';

export const DrinkButtons = () => {
	const tea = "Tea";
	const coffee = "Coffee";

	return (
		<>
			<h2>Would you like to have tea or coffee?</h2>
			<div className="button-group">
				<button className="button">{tea}</button>
				<button className="button">{coffee}</button>
			</div>
		</>
	);
};


