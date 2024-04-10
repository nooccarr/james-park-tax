const User = require('../models/User');
const { createSecretToken } = require('../utils/secretToken');
const bcrypt = require('bcrypt');

const signUp = async (req, res, next) => {
  try {
    const { email, username } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.json({ message: 'Email already exists' });
      }
      if (existingUser.username === username) {
        return res.json({ message: 'Username already exists' });
      }
    }
    const user = await User.create(req.body);
    const token = createSecretToken(user._id);
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: 'User signed in successfully', success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  signUp,
};
