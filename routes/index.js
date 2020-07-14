const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');
//var uuid = require('uuid');


/* GET home page. */
router.get('/', function(req, res, next) {
  var GA = req.query.GA;
  //const cid = req.query.cid;
  //const { GA, ClientDIP } = req.query;
  const cid = req.ip.split(':').shift();
  const uip = req.ip.split(':').shift();
  const userId = req && req.user && req.user._id ;

  var visitor = ua( tid = GA, {
    cid: userId,
    uid: userId,
    strictCidFormat: false,
    uip: '198.143.41.9'
  });

  visitor.pageview("/" + req.query.Page).send();

  /*
  const analyticsMiddleware = (req, res, next) => {
    const userId = req && req.user && req.user._id 
    req.visitor.set("uid", userId);
    req.visitor.pageview(req.path).send();
    next();
}
*/
  //res.send('Success');
   
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
  //res.send(' client id ' + uuid.v4());
  res.send('Success ' + userId);
 
});

module.exports = router;
