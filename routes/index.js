const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');


/* GET home page. */
router.get('/', function(req, res, next) {


  var visitor = ua('UA-165884413-8', cid = req.ip.split(":").shift());
  visitor.pageview("/test").send();
  visitor.event("Event Category", "Event Action").send();
  
  //const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('index', { title: 'Express ' + req.ip});
});

module.exports = router;
