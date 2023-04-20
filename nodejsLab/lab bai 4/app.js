// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write(
//       '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/users") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Assignment 1</title></head>");
//     res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
//     res.write("</html>");
//     return res.end();
//   }
//   // Send a HTML response with some "Page not found text
//   if (url === "/create-user") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody.split("=")[1]); // username=whatever-the-user-entered
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     res.end();
//   }
// });

// server.listen(3000);

const http = require("http");
const express = require("express");
const app = express();
// app.use('/', (req, res, next) => {
//     console.log('im first  middle ware');
//     next();
// })
// app.use('/', (req, res, next) => {
//     console.log('im another middle ware');
//     res.send('<h1>Hello from Express</h1>')
// })
// app.use('/', (req, res, next) => {
//     console.log('First');
//     next();
// })
// app.use('/', (req, res, next) => {
//     console.log('Second');
//     next();
// })
// app.use('/', (req, res, next) => {
//     res.send('<h1>HomePage</h1>')
// })
app.use("/users", (req, res, next) => {
  console.log("UsersPage Middleware");
  next();
});
app.use("/users", (req, res, next) => {
  console.log("UsersPage");
  res.send("<h1>UsersPage</h1>");
});
app.use("/", (req, res, next) => {
  console.log("homepage Middleware");
  next();
});
app.use("/", (req, res, next) => {
  console.log("homepage");
  res.send("<h1>HomePage</h1>");
});

const server = http.createServer(app);
server.listen(3000);
