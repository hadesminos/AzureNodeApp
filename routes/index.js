const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');


/* GET home page. */
router.get('/', function(req, res, next) {
  //const  GA = req.query.GA;
  //const cid = req.query.cid;
  //const { GA, ClientDIP } = req.query;

  //var visitor = ua( req.query.GA, cid = req.query.cid);
  var visitor = ua( UA-165884413-8, cid = '186.87.8.104');
  visitor.pageview("/" + req.query.Page).send();
  visitor.event("Event Category", "Event Action").send();
  
  //const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //res.render('index', { title: 'Express ' + ip});
  //res.send('ga ' + req.query.GA + ' client ' + req.query.cid);
  res.send('Success');
});

module.exports = router;
