// const fs = require("fs");
// const path = require("path");

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "products.json"
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(title, imageUrl, description, price) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }
//   save() {
//     this.id = Math.random().toString();
//     getProductsFromFile((products) => {
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }

//   static findById(id, cb) {
//     getProductsFromFile((products) => {
//       const product = products.find((p) => p.id === id);
//       cb(product);
//     });
//   }
// };

const fs = require("fs");

class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  // Hàm thêm sản phẩm và lưu vào file
  static addProduct(product) {
    const products = this.getProducts();

    products.push(product);

    fs.writeFileSync("./products.json", JSON.stringify(products));
  }

  // Hàm đọc danh sách sản phẩm từ file
  static getProducts() {
    try {
      const products = fs.readFileSync("./products.json");

      return JSON.parse(products);
    } catch (error) {
      return [];
    }
  }
}

module.exports = Product;
