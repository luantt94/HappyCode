import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./allForm.css";

function AllForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  // const isSortAsc = sort === 'asc';
  const data = localStorage.getItem("quoteData");
  const quoteData = JSON.parse(data);
  const [quotesState, setQuotesState] = useState(quoteData);
  function sortByAuthors() {
    const sortBtn = document.getElementsByClassName("allForm_1")[0];
    // if (sortBtn.innerText === "Sort Ascending") {
    if (searchParams.get("sort") === "asc") {
      sortBtn.innerText = "Sort Descending";
      quoteData.quotes.sort(function (a, b) {
        return a.content.localeCompare(b.content);
      });
      // setSearchParams({ sort: "asc" });
    } else {
      sortBtn.innerText = "Sort Ascending";
      quoteData.quotes.sort(function (a, b) {
        return b.content.localeCompare(a.content);
      });
      // setSearchParams({ sort: "desc" });
    }

    const tmp = JSON.parse(JSON.stringify(quoteData));
    setQuotesState(tmp);
  }

  return (
    <>
      <div className="allForm">
        <div className="forma_1">
          <button onClick={sortByAuthors} className="allForm_1">
            {/* Sort Ascending */}
            <Link className="link_1">Sort Ascending</Link>
          </button>
        </div>
        {quotesState.quotes.map((item) => (
          <div key={item.content} className="allForm_2">
            <p>{item.content}</p>
            <div>
              <span>{item.author}</span>
              <button>
                <Link to={"/all/" + item.quoteId} className="link">
                  View Fullscreen
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllForm;
