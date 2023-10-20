const { async } = require('rxjs');
const Content = require('../models/Content');

const getAllContents = async (req, res) => { 
  res.json({ message: 'Get all contents' });
};

const getContentById = async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Here is content number ${id}` });
};

// TODO: fix getContentById

const createNewContent = async (req, res) => { };

const updateContent = async (req, res) => { };

const deleteContent = async (req, res) => { };

module.exports = {
  getAllContents,
  getContentById,
  createNewContent,
  updateContent,
  deleteContent
};