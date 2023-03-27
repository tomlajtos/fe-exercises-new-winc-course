/* eslint-disable react/react-in-jsx-scope */
// interactive drink coice will come in future exercise (R. state)
import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice.jsx';
import { DrinkSearch } from './components/DrinkSearch';

export const App = () => {
	const greeting = "Welcome to our cafe!";
	const [userDrink, setUserDrink] = useState();

	return (
		<div className="App">
			{userDrink ? (<DrinkChoice drink={userDrink} />) : (
				<>
					<h1>{greeting}</h1>
					<DrinkSearch />
				</>
			)}
		</div>
	);
} 
