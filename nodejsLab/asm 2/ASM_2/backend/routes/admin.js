const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/recent-trans', adminController.getRecentTrans);

router.get('/all-trans', adminController.getAllTransaction);

router.get('/all-hotels', adminController.getAllHotel);

router.get('/all-rooms', adminController.getAllRoom);

router.post('/add-hotel', adminController.postAddHotel);

router.post('/add-room', adminController.postAddRoom);

router.post('/delete-hotel', adminController.postDeleteHotel);

router.post('delete-room', adminController.postDeleteRoom);

module.exports = router;
