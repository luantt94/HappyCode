import { Form, Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./allForm.css";

function AllForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "asc";
  const isAsc = sort === "asc";
  const data = localStorage.getItem("quoteData");
  const quoteData = JSON.parse(data);
  const [quotesState, setQuotesState] = useState(quoteData);
  function sortByAuthors() {
    if (isAsc) {
      quoteData.quotes.sort(function (a, b) {
        return a.content.localeCompare(b.content);
      });
    } else {
      quoteData.quotes.sort(function (a, b) {
        return b.content.localeCompare(a.content);
      });
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
            <Link to={`?sort=${isAsc ? "desc" : "asc"}`} className="link_1">
              {isAsc ? "Sort Descending" : "Sort Ascending"}
            </Link>
          </button>
        </div>
        {quotesState.quotes.map((item) => (
          <div key={item.quoteId} className="allForm_2">
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
