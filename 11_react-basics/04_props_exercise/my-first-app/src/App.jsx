/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {DrinkButtons} from './components/DrinkButtons.jsx';
import { coffee, tea } from './utils/data';

export const App = () => {
	const greeting = "Welcome to our cafe!";

	return (
		<div className="App">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
		</div>
	);
}
