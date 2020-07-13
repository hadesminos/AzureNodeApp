const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');


/* GET home page. */
router.get('/', function(req, res, next) {
  const ip =  req.ip.split(":").shift();

  var visitor = ua('UA-165884413-8', cid = ip);
  visitor.pageview("/test").send();
  visitor.event("Event Category", "Event Action").send();
  
  //const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.render('index', { title: 'Express ' + ip});
});

module.exports = router;
