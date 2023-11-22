import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import convertMoney from "../../convertMoney";

ListCart.propTypes = {
  listCart: PropTypes.array,
  onDeleteCart: PropTypes.func,
  onUpdateCount: PropTypes.func,
};

ListCart.defaultProps = {
  listCart: [],
  onDeleteCart: null,
  onUpdateCount: null,
};

function ListCart(props) {
  const { listCart, onDeleteCart, setUpdateListCart } = props;
  const [order, setOrder] = useState(listCart);

  useEffect(() => {
    if (listCart) {
      setOrder(listCart);
    }
  }, [listCart]);

  const handlerChangeText = (e, index) => {
    setOrder((prev) => {
      const list = [...prev];
      list[index].count = e.target.value;
      return list;
    });
    setUpdateListCart(order);
  };

  const handlerDelete = (getUser, getProduct, getCount) => {
    if (!onDeleteCart) {
      return;
    }

    onDeleteCart(getUser, getProduct, getCount);
  };

  return (
    <div className="table-responsive mb-4">
      <table className="table">
        <thead className="bg-light">
          <tr className="text-center">
            <th className="border-0" scope="col">
              {" "}
              <strong className="text-small text-uppercase">Image</strong>
            </th>
            <th className="border-0" scope="col">
              {" "}
              <strong className="text-small text-uppercase">Product</strong>
            </th>
            <th className="border-0" scope="col">
              {" "}
              <strong className="text-small text-uppercase">Price</strong>
            </th>
            <th className="border-0" scope="col">
              {" "}
              <strong className="text-small text-uppercase">Quantity</strong>
            </th>
            <th className="border-0" scope="col">
              {" "}
              <strong className="text-small text-uppercase">Total</strong>
            </th>
            <th className="border-0" scope="col">
              {" "}
              <strong className="text-small text-uppercase">Remove</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {order &&
            order.map((value, index) => (
              <tr className="text-center" key={index}>
                <td className="pl-0 border-0">
                  <div className="media align-items-center justify-content-center">
                    <Link
                      className="reset-anchor d-block animsition-link"
                      to={`/detail/${value.idProduct}`}
                    >
                      <img src={value.img} alt="..." width="70" />
                    </Link>
                  </div>
                </td>
                <td className="align-middle border-0">
                  <div className="media align-items-center justify-content-center">
                    <Link
                      className="reset-anchor h6 animsition-link"
                      to={`/detail/${value.idProduct}`}
                    >
                      {value.nameProduct}
                    </Link>
                  </div>
                </td>

                <td className="align-middle border-0">
                  <p className="mb-0 small">
                    {convertMoney(value.priceProduct)} VND
                  </p>
                </td>
                <td className="align-middle border-0">
                  <div className="quantity justify-content-center">
                    <input
                      className="form-control form-control-sm border-0 shadow-0 p-0"
                      type="number"
                      name="order"
                      value={value.count}
                      onChange={(e) => handlerChangeText(e, index)}
                    />
                  </div>
                </td>
                <td className="align-middle border-0">
                  <p className="mb-0 small">
                    {convertMoney(
                      parseInt(value.priceProduct) * parseInt(value.count)
                    )}{" "}
                    VND
                  </p>
                </td>
                <td className="align-middle border-0">
                  <a
                    className="reset-anchor remove_cart"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      handlerDelete(value.idUser, value.idProduct, value.count)
                    }
                  >
                    <i className="fas fa-trash-alt small text-muted"></i>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCart;
