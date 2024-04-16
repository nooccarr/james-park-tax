require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.createSecretToken = (id) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ id }, secretKey, { expiresIn: '1h' });
};
