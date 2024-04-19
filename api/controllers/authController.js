const User = require('../models/User');
const { createSecretToken } = require('../utils/secretToken');
const bcrypt = require('bcrypt');

const signUp = async (req, res, next) => {
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
    });
    res
      .status(201)
      .json({ message: 'User signed in successfully', success: true, user });
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' }); // 400 Bad Request
    }
    const user = await User.findOne({ email });
    console.log('BODY:', req.body);
    console.log('USER:', user);
    if (!user) {
      return res.status(401).json({ message: 'Incorrect password or email' }); // 401 Unauthorized
    }
    const auth = await bcrypt.compare(password, user.password);
    console.log('AUTH:', auth);
    if (!auth) {
      return res.status(401).json({ message: 'Incorrect password or email' }); // 401 Unauthorized
    }
    const token = createSecretToken(user._id);
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: 'User logged in successfully', success: true });
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  Login,
};
