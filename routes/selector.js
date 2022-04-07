var express = require('express');
var router = express.Router();

/* GET selctor page. */
router.get('/', function(req, res, next) {
  res.render('selector', { title: 'Selector ' });
});

module.exports = router;
