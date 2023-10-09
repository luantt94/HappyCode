import React, { useContext, useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";
import SortProduct from "../components/SortProduct";
import { ShopContext } from "../context/app";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Shop = () => {
  const [category, setCategory] = useState([
    {
      cate: "IPHONE & MAC",
      child: ["iPhone", "iPad", "Macbook"],
    },
    {
      cate: "WIRELESS",
      child: ["Airpod", "Watch"],
    },
    {
      cate: "OTHER",
      child: ["Mouse", "Keyboard", "Other"],
    },
  ]);

  const { product } = useContext(ShopContext);
  const [products, setProducts] = useState(product);

  const [filter, setFilter] = useState("all");
  useEffect(() => {
    if (filter === "all") {
      setProducts(product);
    } else {
      const req = product.filter((pr) => pr.category === filter);
      setProducts(req);
    }
  }, [filter, product]);

  //   const handlerSearch = (value) => {
  //     console.log("Value: ", value)

  //     setPagination({
  //         page: pagination.page,
  //         count: pagination.count,
  //         search: value,
  //         category: pagination.category
  //     })
  // }

  return (
    <div>
      <div className="container">
        <div className=" m-5 py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-5">
          <div className="col-lg-3 order-2 order-lg-1 ">
            <h5 className="text-uppercase mb-4 fst-italic">Categories</h5>
            <p className=" bg-black text-white px-4 py-2">APPLE</p>

            <div className="px-4">
              <div className="shop__childen" style={{ margin: "15px 0px" }}>
                <span
                  className=" text-muted"
                  onClick={() => setFilter("all")}
                  style={{ cursor: "pointer" }}
                >
                  All
                </span>
              </div>
            </div>
            {category.map((cate, index) => (
              <div key={index}>
                <div className=" bg-light px-4 py-2 fw-bold fst-italic">
                  <span>{cate.cate}</span>
                </div>
                <div className=" px-4 py-2">
                  {cate.child.map((child, index) => (
                    <div key={index} className=" py-2">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setFilter(child.toLocaleLowerCase())}
                      >
                        {child}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="row mb-3 align-items-center">
              <Search />
              <div className="col-lg-8">
                <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                  <li className="list-inline-item">
                    <SortProduct />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                {products &&
                  products.map((i) => <ProductList i={i} key={i._id.$oid} />)}
                <div className="row ">
                  <div className=" col-lg-12">
                    <div className=" d-flex justify-content-end">
                      <button>
                        <FaAngleDoubleLeft />
                      </button>
                      <span className=" px-3 border border-dark text-white bg-black">
                        1
                      </span>
                      <button>
                        <FaAngleDoubleRight />
                      </button>
                    </div>
                    <p className=" text-end">Show 1-9 of 9 results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
