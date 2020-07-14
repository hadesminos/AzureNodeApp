const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');
const uuid = require('uuid');

const uid = uuid.v4();

/* GET home page. */
router.get('/', function(req, res, next) {
  var GA = req.query.GA;
  //const cid = req.query.cid;
  //const { GA, ClientDIP } = req.query;
  const uip = req.ip.split(':').shift();
  var visitor = ua( tid = GA, {
    cid: uid,
    uid: uid,
    strictCidFormat: false
  });

  visitor.set('uip', uip);
  visitor.pageview("/" + req.query.Page).send();


  res.send('Success with uid ' + uid);
 
});

module.exports = router;
