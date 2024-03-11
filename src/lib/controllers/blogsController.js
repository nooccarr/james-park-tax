const Blog = require('../models/Blog');

const getAllBlogs = async (req, res) => {
  res.json({ message: 'Get all blogs' });
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Here is blog number ${id}` });
};

const createNewBlog = async (req, res) => {};

const updateBlog = async (req, res) => {};

const deleteBlog = async (req, res) => {};

module.exports = {
  getAllBlogs,
  getBlogById,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
