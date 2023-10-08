const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};

// const fs = require("fs");

// // Hàm thêm sản phẩm vào giỏ hàng
// function addProduct(id, price) {
//   // Đọc dữ liệu từ file cart.json
//   let cartData;
//   try {
//     cartData = JSON.parse(fs.readFileSync("cart.json"));
//   } catch (error) {
//     // Nếu đọc file bị lỗi thì tạo giỏ hàng mới
//     cartData = { products: [], totalPrice: 0 };
//   }

//   // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
//   const existingProductIndex = cartData.products.findIndex(
//     (product) => product.id === id
//   );
//   if (existingProductIndex !== -1) {
//     // Nếu đã có thì tăng số lượng
//     cartData.products[existingProductIndex].qty++;
//   } else {
//     // Nếu chưa có thì thêm sản phẩm mới vào giỏ hàng
//     cartData.products.push({ id: id, qty: 1 });
//   }

//   // Ghi dữ liệu mới vào file cart.json
//   fs.writeFileSync("cart.json", JSON.stringify(cartData));
// }

// // Sử dụng hàm:
// addProduct("0.558673316244021, 10.99"); // Thêm sản phẩm có id là "0.558673316244021" và giá là 10.99 vào giỏ hàng
