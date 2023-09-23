import "./searchPopup.css";

const SearchPopup = () => {
  return (
    <div className="">
      <div className="  bg-warning p-3 popu">
        <h1>Search</h1>
        <div>
          <strong>Destination</strong>
          <input className="p-2 mb-4 inp " type="text" />
        </div>
        <div>
          <strong>Check-in Date</strong>
          <input
            className="p-2 mb-4 inp"
            type="text"
            placeholder="06/24/2022 to 06/24/2022"
          />
        </div>
        <div>
          <strong>Options</strong>
          <div className="d-flex align-items-center justify-content-between">
            <p>Min price per night</p>
            <input type="text" size="3" />
          </div>
          <div className="d-flex  align-items-center justify-content-between">
            <p>Max price per night</p>
            <input type="text" size="3" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>adult</p>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              placeholder="1"
              size="2"
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>chidren</p>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              placeholder="0"
              size="2"
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>room</p>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              placeholder="1"
              size="2"
            />
          </div>
          <button className="p-3 mt-5 bg-primary text-white">Search</button>
        </div>
      </div>
    </div>
  );
};
export default SearchPopup;
