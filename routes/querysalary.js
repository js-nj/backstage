var express = require('express');
var router = express.Router();
var utils = require('../contoller/utils');

router.get('/', function(req, res, next) {
  res.send('respond with a salary');
});

router.get('/index.do', function(req, res, next) {
  var isLogin = utils.checkLogin(req.cookies);
  //res.send('respond with a /salary/index.do');
  if(isLogin){
    res.redirect('http://localhost:8081/');
  }else {
    res.redirect('http://localhost:8080/?callback='+'http://localhost:3000'+req.originalUrl);
  }
});

module.exports = router;
