import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detaiPage.css";
const DetailPage = () => {
  const params = useParams();
  const id = params.productId;

  const [product, setProduct] = useState(null);
  // const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Lấy dữ liệu sản phẩm từ server
    fetch(
      `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
    )
      .then((response) => response.json())
      .then((data) => {
        let pro = null;

        data.map((item) => {
          if (item._id.$oid === id) {
            pro = item;
          }
        });

        setProduct(pro);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // const handleQuantityInputChange = (event) => {
  //   setQuantity(event.target.value);
  // };
  return (
    <>
      <div className="container mb-4 mt-5">
        <div className="d-flex detai">
          <img src={product.img1} alt={product.name} />

          <div>
            <h3>{product.name}</h3>
            <p>{Number(product.price).toLocaleString("vi-VN")} đ</p>
            <p>{product.short_desc}</p>
            <div className="d-flex ">
              <h5 className="pe-2 ">CATEGORY: </h5>
              <p className="">{product.category}</p>
            </div>
            {/* add */}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPage;
