import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./form.css";
const quoteData = {
  quotes: [{ author: "To Hoai", quote: "aaaaaaaaaaaaaaaa" }],
};
function Form() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate input
    if (!author || !quote) {
      return;
    }
    // Submit data
    const newQuote = { author, quote };
    quoteData.quotes.push(newQuote);
    // Store the object into storage
    localStorage.setItem("quoteData", JSON.stringify(quoteData));
    console.log("New quote: ", newQuote);
    console.log(" quotes: ", quoteData);

    // Reset form
    setAuthor("");
    setQuote("");
    navigate("/all");
  };

  // function handleClick() {
  //   navigate("/all");
  // }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form_1">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          ></input>
        </div>

        <div className="form_2">
          <label>Text</label>
          <textarea
            value={quote}
            onChange={(event) => setQuote(event.target.value)}
          ></textarea>
        </div>

        <button type="submit">
          Add Quotes
          {/* <Link to="/all" className="link">
            Add Quotes
          </Link> */}
        </button>
      </form>
    </>
  );
}

export default Form;
