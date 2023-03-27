/* eslint-disable react/react-in-jsx-scope */
// interactive drink coice will come in future exercise (R. state)
import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice.jsx';
import { DrinkSearch } from './components/DrinkSearch';
import { DrinkItem } from './components/DrinkItem.jsx';
import { availableDrinks } from './utils/data.js';

export const App = () => {
	const greeting = "Welcome to our cafe!";
	const [userDrink, setUserDrink] = useState();
	const drinkItems = availableDrinks.map((item) => (<li key={item.id}><DrinkItem drink={item} /></li>));

	return (
		<div className="App">
			{userDrink ? (<DrinkChoice drink={userDrink} />) : (
				<>
					<h1>{greeting}</h1>
					<DrinkSearch />
					<ul className="drink-list">{drinkItems}</ul>
				</>
			)}
		</div>
	);
} 
