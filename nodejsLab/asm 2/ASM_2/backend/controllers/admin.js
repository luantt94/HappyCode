const Transaction = require('../models/transaction');
const Hotel = require('../models/hotel');
const Room = require('../models/room');
const User = require('../models/user');
const mongoose = require('mongoose');

//Recent Transacttion
exports.getRecentTrans = (req, res, next) => {
  const skipCount = req.query.page ? (parseInt(req.query.page) - 1) * 8 : 0;

  Transaction.find()
    .populate('hotel')
    .populate('user')
    .skip(skipCount)
    .limit(8)
    .sort({ createdAt: -1 })
    .then(transaction => {
      res.status(200).json(transaction);
    })
    .catch(err => console.log(err));
};

//All Transaction
exports.getAllTransaction = (req, res, next) => {
  Transaction.find()
    .populate('hotel')
    .populate('user')
    .sort({ createdAt: -1 })
    .then(transaction => {
      res.status(200).json(transaction);
    })
    .catch(err => console.log(err));
};

//All Hotel
exports.getAllHotel = (req, res, next) => {
  Hotel.find()
    .then(hotels => {
      res.status(200).json(hotels);
    })
    .catch(err => console.log(err));
};

//All Room
exports.getAllRoom = (req, res, next) => {
  Room.find()
    .then(rooms => {
      res.status(200).json(rooms);
    })
    .catch(err => console.log(err));
};

//AddHotel
exports.postAddHotel = (req, res, next) => {
  const data = req.body.data;
  console.log(data);
  const hotel = new Hotel({
    name: data.name,
    type: data.type,
    city: data.city,
    address: data.address,
    title: data.title,
    distance: data.distance,
    photos: data.photos,
    desc: data.desc,
    featured: data.featured === 'true',
    rooms: data.rooms,
  });
  hotel
    .save()
    .then(result => {
      res.send('Hotel created !');
    })
    .catch(err => console.log(err));
};

//AddRoom
exports.postAddRoom = (req, res, next) => {
  const data = req.body.data;
  console.log(data);
  const room = new Room({
    title: data.title,
    price: data.price,
    maxPeople: data.maxPeople,
    desc: data.desc,
    roomNumbers: data.roomNumbers,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  room
    .save()
    .then(result => {
      console.log(result);
      Hotel.findByIdAndUpdate(data.hotel, {
        $push: { rooms: result._id.toString() },
      })
        .then(updatedHotel => {
          console.log(updatedHotel);
          return res.status(200).send('Room created and added successfully !!');
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

//Delete Hotel
exports.postDeleteHotel = (req, res, next) => {
  const hotelId = new mongoose.Types.ObjectId(req.body.hotelId);
  Transaction.find({
    hotel: hotelId,
  })
    .then(trans => {
      if (trans.length <= 0) {
        return Hotel.findByIdAndDelete(hotelId).then(result => {
          res.send('HOTEL DELETED SUCCESSFULLY !!');
        });
      } else res.send('HOTEL INCLUDE IN A TRANSACTION !!');
    })
    .catch(err => console.log(err));
};

//Delete Room
exports.postDeleteRoom = (req, res, next) => {
  const roomId = req.body.roomId;
};
