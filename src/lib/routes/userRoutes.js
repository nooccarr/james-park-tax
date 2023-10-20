const express = require('express');
const router = express.Router();

router.routes('/')
  .get()
  .post()
  .patch()
  .delete();

module.exports = router;