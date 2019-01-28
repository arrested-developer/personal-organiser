var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/message/', function(req, res, next) {
  res.status(200).send('Message from Express');
});

module.exports = router;
