import { Link } from "react-router-dom";
import "./allForm.css";
function AllForm() {
  return (
    <>
      <div className="allForm">
        <div className="forma_1">
          <button className="allForm_1">
            <Link className="link_1">Sort Ascending</Link>
          </button>
        </div>
        <div className="allForm_2">
          <p>
            By setting resize to none, you disable the grabber handle in the
            bottom right corner of the textarea element, which prevents users
            from resizing the element. You can also set resize to other values
            if you want to allow certain types of resizing, such as horizontal
            or vertical resizing only, or a specific minimum size.
          </p>
          <div>
            <span> Quote 01</span>
            <button>
              <Link className="link">View Fullscreen</Link>
            </button>
          </div>
        </div>
        <div className="allForm_3">
          <button>
            <Link className="link">View Fullscreen</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default AllForm;
