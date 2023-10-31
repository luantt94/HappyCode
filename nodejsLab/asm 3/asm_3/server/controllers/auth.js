import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import createError from "../utils/createError.js";
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrect)
      return next(createError(400, "wrong password ot username!"));

    // const token = jwt.sign(
    //   {
    //     id: user._id,
    //     isSeller: user.isSeller,
    //   },
    //   process.env.JWT_KEY
    // );

    // const { password, ...info } = user._doc;
    // res
    //   .cookie("accessToken", token, {
    //     httpOnly: true,
    //   })
    //   .status(200)
    //   .send(info);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    res.status(200).json("Logout success!");
  });
};
