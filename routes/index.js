const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');


/* GET home page. */
router.get('/', function(req, res, next) {
  var GA = req.query.GA;
  //const cid = req.query.cid;
  //const { GA, ClientDIP } = req.query;
  const cid = req.ip.split(':').shift();

  var visitor = ua( tid = GA, {
    cid: cid,
    uid: cid,
    strictCidFormat: false,
  });

  visitor.pageview("/" + req.query.Page).send();

  res.send('Success');
   
  //var visitor = ua( tid = 'UA-165884413-8',{
  //  cid: cid,
  //  uid: cid,
  //  strictCidFormat: false,
 // });

  //visitor.pageview("/").send();
  //visitor.event("Event Category", "Event Action").send();
  
  //const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  //res.render('index', { title: 'Express ' + ip});
  //res.send('ga ' + req.query.GA + ' client ' + req.query.cid);
  //res.send(' client id ' + cid);
 
});

module.exports = router;
