import "./searchList.css";

const SearchList = (props) => {
  return (
    <div>
      <div className="search p-3 border border-1 mb-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex ">
            <div className="px-2">
              <img src={props.image_url} alt="Hotles" />
            </div>

            <div className="">
              <h4 className="text-primary">{props.name}</h4>
              <p>{props.distance} from center</p>
              <button className="btn btn-success">{props.tag}</button>
              <p className="mt-2">
                <strong className="">{props.description}</strong>
              </p>
              <p>{props.type}</p>
              {props.free_cancel === true && (
                <div>
                  <p className="text-success">Free cancellation</p>
                  <p className="text-success">
                    you can cancel later, so lock in this gr today
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <div className="d-flex justify-content-between">
              <p className="">{props.rate_text}</p>
              <p className=" bg-primary text-white">{props.rate}</p>
            </div>
            <p className="text-success price">${props.price}</p>
            <p className="">includes taxes and fees</p>
            <button className="btn btn-primary mx-4">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
