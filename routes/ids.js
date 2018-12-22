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
  var callback = '';
  //通过账号密码检查是否登陆
  //var isLogin= utils.checkLoginByIdPw();
  var haveCb = req.headers.referer.indexOf('?callback=')>-1?true:false;
  if (haveCb) {
    callback = req.headers.referer.split('?callback=')[1];
  }
  if (callback) {
    //设置cookie 身份信息
    //没有跳转成功呢？？？？？？
    res.redirect(callback);
  }else {
    res.send('您打开的应用地址不对，请重新打开');
  }
  // var result = ids(queryParam);
  // res.json(result);
});

module.exports = router;