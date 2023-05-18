/* eslint-disable react/react-in-jsx-scope */
import './Button.css'

export const Button = ({ text, clickFn }) => {
	return (
		<button className="button" type="button" onClick={clickFn}>{text}</button>
	);
};

