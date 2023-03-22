/* eslint-disable react/react-in-jsx-scope */
import './DrinkChoice.css';


export const DrinkChoice = ({ drink }) => {
	return (
		<>
			<div className="drink-choice-container">
				<p>Your choice: {drink.name}</p>
				<img src={drink.imgUrl} alt={drink.alt} />
				<p>Your drink will be ready in a couple of minutes...</p>
			</div>
		</>
	);
};

