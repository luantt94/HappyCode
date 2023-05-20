import { Link } from "react-router-dom";
import "./form.css";
function Form() {
  return (
    <>
      <div className="form">
        <div className="form_1">
          <label for="fname">Author</label>
          <input></input>
        </div>

        <div>
          <p>Text</p>
          <input></input>
        </div>

        <button>
          <Link>Add Quotes</Link>
        </button>
      </div>
    </>
  );
}

export default Form;
