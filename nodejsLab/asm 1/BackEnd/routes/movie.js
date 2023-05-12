const express = require("express");
const fs = require("fs");
const { request } = require("https");

const router = express.Router();

// todo cap nhat lai
router.get("/trending/all/week", (req, res, next) => {
  // const movies = {
  //   all: function () {
  //     return JSON.parse(fs.readFile("./data/movieList.json", "utf8"));
  //   },
  // };

  // const jsonContent = JSON.stringify(movies);
  // res.end(jsonContent);

  const fs = require("fs");
  fs.readFile("./data/movieList.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    // console.log("File data:", jsonString);
    const jsonContent = JSON.stringify(jsonString);
    res.end(jsonContent);
  });
});

router.get("/api/movies/trending", (req, res, next) => {
  // const movies = {
  //   all: function () {
  //     return JSON.parse(fs.readFile("./data/movieList.json", "utf8"));
  //   },
  // };

  // const jsonContent = JSON.stringify(movies);
  // res.end(jsonContent);

  const fs = require("fs");
  fs.readFile("./data/movieList.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    // console.log("File data:", jsonString);
    const jsonContent = JSON.stringify(jsonString);
    res.end(jsonContent);
  });
});

router.get("/api/movies/top-rate", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/api/movies/discover", (req, res, next) => {
  const fs = require("fs");
  fs.readFile("./data/movieList.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    // console.log("File data:", jsonString);
    const jsonContent = JSON.stringify(jsonString);
    res.end(jsonContent);
  });
});
router.post("/api/movies/video", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.post("/api/movies/search", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
