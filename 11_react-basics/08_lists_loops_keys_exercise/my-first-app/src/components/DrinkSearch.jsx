import { useState } from 'react';
import { TextInput } from './ui/TextInput.jsx';

export const DrinkSearch = () => {
	const [searchField, setSearchField] = useState("americano");

	return (
		<div className="drink-search">
			<label>You can search for available drinks here:</label>
			<TextInput />
			{searchField && (<p>Search results for: {searchField}</p>)}
		</div>
	);
};
