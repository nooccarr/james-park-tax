const express = require('express');
const router = express.Router();
const contentsController = require('../controllers/contentsController');

router.route('/')
  .get(contentsController.getAllContents)
  .post(contentsController.createNewContent)
  .patch(contentsController.updateContent)
  .delete(contentsController.deleteContent);

module.exports = router;