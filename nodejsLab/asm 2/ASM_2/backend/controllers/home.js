const Room = require('../models/room');
const Hotel = require('../models/hotel');
const Transaction = require('../models/transaction');

//City
exports.getHotels = (req, res, next) => {
  Hotel.find()
    .then(hotels => {
      const result = [];
      const cityNameList = ['Ha Noi', 'Ho Chi Minh', 'Da Nang'];

      cityNameList.forEach(cityName => {
        const city = hotels.filter(hotel => hotel.city === cityName);
        let i = {
          name: cityName,
          count: city.length,
        };
        result.push(i);
      });

      res.status(200).json(result);
    })
    .catch(err => console.log(err));
};

//Type
exports.getbyPropType = (req, res, next) => {
  Hotel.find()
    .then(hotels => {
      const result = [];
      const propTypeList = ['hotel', 'apartment', 'resort', 'villa', 'cabin'];

      propTypeList.forEach(propType => {
        const type = hotels.filter(hotel => hotel.type === propType);
        let i = {
          name: propType,
          count: type.length,
        };
        result.push(i);
      });

      res.status(200).json(result);
    })
    .catch(err => console.log(err));
};

//TopRate
exports.getTopRate = (req, res, next) => {
  Hotel.find({ featured: true })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
};

//FindById
exports.getHotel = (req, res, next) => {
  const hotelId = req.params.id;
  Hotel.findById(hotelId)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
};

//Search (unfinished)
exports.postSearch = (req, res, next) => {
  Room.find({ maxPeople: { $gt: 2 } })
    .then(rooms => {
      const roomIds = rooms.map(room => room._id.toString());

      return Hotel.find({ city: 'Ha Noi', rooms: { $in: roomIds } }).populate(
        'rooms',
        ['maxPeople']
      );
    })
    .then(hotels => {
      console.log(hotels);
      res.status(200).json(hotels);
    })
    .catch(err => console.log(err));
};

//Room
exports.getRooms = (req, res, next) => {
  const hotelId = req.query.hotel;
  if (hotelId) {
    Hotel.findById(hotelId)
      .then(hotel => {
        return Room.find({ _id: { $in: hotel.rooms } });
      })
      .then(rooms => {
        res.status(200).json(rooms);
      })
      .catch(err => console.log(err));
  }
};

//Transaction
exports.postBook = (req, res, next) => {
  const data = req.body.data;
  const user = req.body.data.user;
  const hotel = req.body.data.hotel;
  const transaction = new Transaction({
    user: user,
    hotel: hotel,
    room: data.room,
    dateStart: new Date(data.dateStart),
    dateEnd: new Date(data.dateEnd),
    price: data.price,
    payment: data.payment,
    status: data.status,
    createdAt: new Date(data.createdAt),
  });
  transaction
    .save()
    .then(result => {
      res.send('Room(s) booked !');
    })
    .catch(err => console.log(err));
};

exports.postTransaction = (req, res, next) => {
  const user = req.body.user;

  Transaction.find({ user: { _id: user._id } })
    .populate('hotel')
    .populate('user')
    .sort({ createdAt: -1 })
    .then(transaction => {
      res.status(200).json(transaction);
    })
    .catch(err => console.log(err));
};
