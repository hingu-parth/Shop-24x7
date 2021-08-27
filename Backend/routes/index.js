var express = require('express');
var router = express();

// HomePage
// Method: GET
router.get('/', function (req, res, next) {
  res.send('Home page');
});

module.exports = router;
