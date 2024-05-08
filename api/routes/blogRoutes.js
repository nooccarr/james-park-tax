const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router
  .route('/')
  .get(blogsController.getAllBlogs)
  .post(isAuthenticated, blogsController.createNewBlog);

router
  .route('/:id')
  .get(blogsController.getBlogById)
  .put(isAuthenticated, blogsController.updateBlog);
// .delete(isAuthenticated, blogsController.deleteBlog);

module.exports = router;
