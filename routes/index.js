var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var ua = require('universal-analytics');
  var visitor = ua('UA-165884413-8');
  visitor.pageview("/test").send();
  res.render('index', { title: 'Express' });
});

module.exports = router;
