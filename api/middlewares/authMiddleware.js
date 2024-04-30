const User = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const path = require('path');

const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (token === undefined || token === 'undefined') {
    return res.json({ status: false });
  }
  const secretKey = process.env.JWT_SECRET_KEY;
  jwt.verify(token, secretKey, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (token === undefined || token === 'undefined') {
    return res.sendFile(
      path.join(__dirname, '..', '..', 'dist', 'index.html'),
      (err) => {
        if (err) console.log(err);
      }
    );
  }
  const secretKey = process.env.JWT_SECRET_KEY;
  jwt.verify(token, secretKey, async (err, _) => {
    if (err) {
      return res.sendFile(
        path.join(__dirname, '..', '..', 'dist', 'index.html'),
        (err) => {
          if (err) console.log(err);
        }
      );
    } else {
      next();
    }
  });
};

module.exports = { userVerification, isAuthenticated };
