import "./header.css";

const Header = () => {
  function handleSearch() {
    window.location.replace("/search");
  }
  return (
    <div>
      <div className="mt-4 mb-4 pb-5">
        <h2>A lifetime of discounts? it's Genius</h2>
        <h6 className="mt-3">
          Get rewarded for your trvals-unlock instant saving of 10% or more with
          a free account
        </h6>
        <button className="btn btn-primary mt-3">Sign in / Register</button>
      </div>
      <div className="d-flex align-items-center justify-content-between header">
        <div className="">
          <i className="fa fa-bed" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="headerSearchInput"
          />
        </div>
        <div className="">
          <i className="fa fa-calendar" />
          <input
            type="text"
            placeholder="06/24/2002 to 06/24/2002"
            className="headerSearchInput"
          />
        </div>
        <div className="">
          <i className="fa fa-female" />
          <input
            type="text"
            placeholder="1 adult 0 children 1 room"
            className="headerSearchInput"
          />
        </div>
        <div>
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
