const express = require("express");
const { request } = require("https");

const router = express.Router();

router.get("/api/movies/trending", (req, res, next) => {
  debugger;
  const movies = {
    all: function () {
      return JSON.parse(fs.readFileSync(".././data/movieList.json", "utf8"));
    },
  };
  res.send(movies);
});

router.get("/api/movies/top-rate", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/api/movies/discover", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
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
