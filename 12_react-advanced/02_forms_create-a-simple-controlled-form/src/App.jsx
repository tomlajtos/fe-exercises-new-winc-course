import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const addQuote = (e) => {
    e.preventDefault();
    setQuotes([{ quote, author }].concat(quotes)); // setQuotes([{quote,author}, ...quotes])
    setQuote("");
    setAuthor("");
  };

  return (
    <div className="App">
      <h1>Our beautiful form will be here:</h1>
      <form onSubmit={addQuote}>
        <label>
          <textarea
            value={quote}
            placeholder={"Quote..."}
            onChange={(e) => setQuote(e.target.value)}
          ></textarea>
        </label>
        <label>
          <input
            value={author}
            placeholder={"Author"}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </label>
        <button type="submit">Add Quote</button>
      </form>
      <h1>Quotes:</h1>
      <div className="quote">
        <p>
          My biggest fear is that people will attribute fake quotes to me and
          millions of morons on the internet will believe it.
        </p>
        - <span>Albert Einstein</span>
      </div>
    </div>
  );
}

export default App;
