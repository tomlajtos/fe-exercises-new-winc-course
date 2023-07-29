import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([
    {
      id: "q_1",
      quote:
        " My biggest fear is that people will attribute fake quotes to me and millions of morons on the internet will believe it.",
      author: "Albert Einstein",
    },
  ]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const addQuote = (e) => {
    e.preventDefault();
    const id = `q_${quotes.length + 1}`;
    setQuotes([{ id, quote, author }].concat(quotes));
    // alt: setQuotes((quotes)=>[{id, quote, author}, ...quotes]), ??? why do we wrap it in a function here?;
    setQuote("");
    setAuthor("");
  };
  console.log("App rendered");
  console.log(quotes);
  return (
    <div className="App">
      <h1>Add your favorite quotes:</h1>
      <form onSubmit={addQuote}>
        <label>
          <textarea
            value={quote}
            placeholder={'"Quote..."'}
            onChange={(e) => setQuote(e.target.value)}
            rows={5}
            cols={30}
          ></textarea>
        </label>
        <label>
          <input
            value={author}
            placeholder={"Author..."}
            style={{ width: "200px" }}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </label>
        <button type="submit">Add Quote</button>
      </form>
      <h1>Quotes:</h1>
      {quotes.map((q, i, a) => {
        return (
          <div className="quote" key={q.id}>
            <p>{q.quote}</p>- <span>{q.author}</span>
            {a.length !== i + 1 && (
              <hr className="quote-hr" style={{ opacity: 0.1 }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
