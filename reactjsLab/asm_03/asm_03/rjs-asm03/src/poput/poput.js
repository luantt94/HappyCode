import React from "react";
import { connect } from "react-redux";
import { hidePopup } from "../actions";

const Popup = (props) => {
  const { product, show, hidePopup } = props; // show và hidePopup được cung cấp bởi connect Redux

  return (
    <div className={`popup ${show ? "show" : ""}`}>
      <div className="popup-inner">
        <button className="close-btn" onClick={hidePopup}>
          X
        </button>
        <img className="product-image" src={product.image} alt={product.name} />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
  show: state.showPopup,
});

const mapDispatchToProps = {
  hidePopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
