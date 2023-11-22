import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./form.css";
const quoteData = {
  quotes: [
    {
      quoteId: 1,
      author: "To Hoai",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
  ],
};

function getMaxId(data) {
  let max = 1;
  data.quotes.map((item) => (max = max > item.quoteId ? max : item.quoteId));
  return max;
}

function Form() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate input
    if (!author || !content) {
      return;
    }
    const quoteId = getMaxId(quoteData) + 1;
    // Submit data
    const newQuote = { quoteId, author, content };
    quoteData.quotes.push(newQuote);
    // Store the object into storage
    localStorage.setItem("quoteData", JSON.stringify(quoteData));
    console.log("New content: ", newQuote);
    console.log(" quotes: ", quoteData);

    // Reset form
    setAuthor("");
    setContent("");
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
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>

        <button type="submit">Add Quotes</button>
      </form>
    </>
  );
}

export default Form;
