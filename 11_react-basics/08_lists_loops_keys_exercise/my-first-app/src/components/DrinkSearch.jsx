/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { availableDrinks } from '../utils/data.js';
import './DrinkSearch.css';
import { TextInput } from './ui/TextInput.jsx';
import { DrinkList } from './DrinkList.jsx';

export const DrinkSearch = () => {
	const [searchField, setSearchField] = useState("americano");

	return (
		<div className="drink-search">
			<label>You can search for available drinks here:</label>
			<TextInput />
			{searchField && (<p>Search results for: {searchField}</p>)}
			<DrinkList className="list" drinks={availableDrinks} />
		</div>
	);
};
