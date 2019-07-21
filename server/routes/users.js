const express = require('express');
const router = express.Router();

/* GET users listing. */

router.get('/test', function(req, res) {
  res.send("sad")
});

module.exports = router;
