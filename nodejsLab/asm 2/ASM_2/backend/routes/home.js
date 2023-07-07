const path = require('path');

const express = require('express');

const homeControlller = require('../controllers/home');

const router = express.Router();

router.get('/', homeControlller.getHotels);

router.get('/city', homeControlller.getHotels);

router.get('/type', homeControlller.getbyPropType);

router.get('/top-rate', homeControlller.getTopRate);

router.get('/hotels/:id', homeControlller.getHotel);

router.post('/search', homeControlller.postSearch);

router.get('/rooms', homeControlller.getRooms);

router.post('/reserve', homeControlller.postBook);

router.post('/transaction', homeControlller.postTransaction);

module.exports = router;
