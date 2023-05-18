import './TextInput.css';

export const TextInput = ({changeFn}) => {
	return (
		<input className="text-input" type="text" placeholder="Type the name of the drink..." onChange={changeFn} />
	);
}
