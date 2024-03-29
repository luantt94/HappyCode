import express from "express";

import {
  createHotel,
  updatedHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";

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

export default router;
