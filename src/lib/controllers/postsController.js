const Post = require('../models/Post');

const getAllPosts = async (req, res) => {
  res.json({ message: 'Get all posts' });
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Here is post number ${id}` });
};

const createNewPost = async (req, res) => { };

const updatePost = async (req, res) => { };

const deletePost = async (req, res) => { };

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost
};