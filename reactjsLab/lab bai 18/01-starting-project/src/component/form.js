import { Link } from "react-router-dom";
import "./form.css";
function Form() {
  return (
    <>
      <div className="form">
        <div className="form_1">
          <label>Author</label>
          <input></input>
        </div>

        <div className="form_2">
          <label>Text</label>
          <textarea></textarea>
        </div>

        <button>
          <Link to="/all" className="link">
            Add Quotes
          </Link>
        </button>
      </div>
    </>
  );
}

export default Form;
