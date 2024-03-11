const User = require('../models/User');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Here is user number ${id}` });
};

const createNewUser = async (req, res) => {
  const { username, email, password, roles } = req.body;
  const newUser = new User({ username, email, password, roles });
  await newUser.save();
  res.json({ message: 'New user created' });
};

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
