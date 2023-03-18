/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import {DrinkButtons} from './components/DrinkButtons.jsx';

export const App = () => {
	const greeting = "Welcome to our cafe!";

	return (
		<div className="App">
			<h1>{greeting}</h1>
			<DrinkButtons/>
		</div>
	);
}
