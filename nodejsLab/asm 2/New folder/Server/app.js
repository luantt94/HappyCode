const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");

const http = require("http");

const app = express();
app.use(express.json());

app.use(cors());

const hotelRoutes = require("./routes/hotel");
const userRoutes = require("./routes/user");
const transRoutes = require("./routes/transaction");
const adminRoutes = require("./routes/admin");

app.use(hotelRoutes);
app.use(userRoutes);
app.use(transRoutes);
app.use("/admin", adminRoutes);

const server = http.createServer(app);

mongoose
  .connect(
    "mongodb+srv://chientc:123321@cluster0.nhyjteo.mongodb.net/assignment2?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const newUser = new User({
          name: "chien",
          password: "123456",
          isAdmin: true,
        });
        newUser.save();
      }
    });
    server.listen(5000);
  })

  .catch((err) => console.log(err));
