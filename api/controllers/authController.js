const User = require('../models/User');
const { createSecretToken } = require('../utils/secretToken');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser?.email === email) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const user = await User.create(req.body);
    const token = createSecretToken(user._id);
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
      // httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: 'None', //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });
    res
      .status(201)
      .json({ message: 'User signed in successfully', success: true, user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' }); // 400 Bad Request
    }
    const foundUser = await User.findOne({ email }).exec();
    // console.log('BODY:', req.body);
    // console.log('USER:', foundUser);
    if (!foundUser) {
      return res.status(401).json({ message: 'Incorrect password or email' }); // 401 Unauthorized
    }
    const match = await bcrypt.compare(password, foundUser.password);
    // console.log('MATCH:', match);
    if (!match) {
      return res.status(401).json({ message: 'Incorrect password or email' }); // 401 Unauthorized
    }
    const token = createSecretToken(foundUser._id);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
      // httpOnly: true, //accessible only by web server
      secure: true, //https
      sameSite: 'None', //cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
    });
    res
      .status(201)
      .json({ message: 'User logged in successfully', success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  Login,
};
