import { Link } from "react-router-dom";
import "./allForm.css";
function AllForm() {
  const data = localStorage.getItem("quoteData");
  const quoteData = JSON.parse(data);
  return (
    <>
      <div className="allForm">
        <div className="forma_1">
          <button className="allForm_1">
            <Link className="link_1">Sort Ascending</Link>
          </button>
        </div>
        {quoteData.quotes.map((item) => (
          <div className="allForm_2">
            <p>{item.quote}</p>
            <div>
              <span>{item.author}</span>
              <button>
                <Link className="link">View Fullscreen</Link>
              </button>
            </div>
          </div>
        ))}
        <div className="allForm_3">
          <button>
            <Link className="link">View Fullscreen</Link>
          </button>
        </div>
      </div>
      ;
    </>
  );
}

export default AllForm;
