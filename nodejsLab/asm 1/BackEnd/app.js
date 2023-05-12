const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const movieRoutes = require("./routes/movie");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(movieRoutes);
// app.use(shopRoutes);

app.listen(3000);
