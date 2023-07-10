const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();
const userRoutes = require('./routes/user');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

app.use(bodyParser.json());
app.use(userRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use((req, res, next) => {
//   User.findById('')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username, password: password })
    .then(user => {
      if (!user) {
        const user = new User({
          username: 'chien',
          password: 'chien123',
          fullName: 'Tran Cong Chien',
          phoneNumber: '12345',
          email: 'chien@gmail.com',
          isAdmin: true,
        });
        user.save();
        return res.status(401).json('Wrong username or password');
      } else {
        return res.status(200).json(user);
      }
    })
    .catch(err => console.log(err));
});

app.use(adminRoutes);
app.use(homeRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://chientc:123321@cluster0.nhyjteo.mongodb.net/')
  .then(result => {
    app.listen(5000);
  })
  .catch(err => console.log(err));
