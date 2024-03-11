const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');

router
  .route('/')
  .get(blogsController.getAllBlogs)
  .post(blogsController.createNewBlog)
  .patch(blogsController.updateBlog)
  .delete(blogsController.deleteBlog);

router.route('/:id').get(blogsController.getBlogById);

module.exports = router;
