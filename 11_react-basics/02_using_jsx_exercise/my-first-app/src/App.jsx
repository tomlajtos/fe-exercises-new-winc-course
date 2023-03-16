import './App.css';

function App() {
	const greeting = "Hi, this is an app made with React";
	const description = <p>I think it holds an interestig future</p>;
	return (
		<div className="App">
			<h1> Welcome! </h1>
			<p>{greeting}</p>
			{description}
		</div>
	);
}

export default App;
