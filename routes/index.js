var express = require('express');
var router = express.Router();
var ids = require('../contoller/ids/ids.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ids/login', function(req, res, next) {
  //debugger
  var queryParam = req.query;
  var result = ids(queryParam);
  res.json(result);
});

module.exports = router;
