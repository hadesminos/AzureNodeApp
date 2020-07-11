var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var ua = require('universal-analytics');
  var uuid = require('uuid');

  var visitor = ua('UA-165884413-8', req.connection.remoteAddress);
  visitor.pageview("/test").send();
  visitor.event("Event Category", "Event Action").send();
  
  res.render('index', { title: 'Express ' + req.connection.remoteAddress });
});

module.exports = router;
