const express = require("express");
const Hotel = require("../models/Hotel.js");

const {
  createHotel,
  updatedHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotel.js");

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updatedHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL

router.get("/", getHotels);

module.exports = router;
