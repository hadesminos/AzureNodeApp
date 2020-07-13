const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');


/* GET home page. */
router.get('/', function(req, res, next) {
  const { GA, cid } = req.query;

  var visitor = ua( GA, cid = cid);
  visitor.pageview("/test").send();
  visitor.event("Event Category", "Event Action").send();
  
  //const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //res.render('index', { title: 'Express ' + ip});
  res.send('ga ' + GA + ' client ' + cid);
});

module.exports = router;
