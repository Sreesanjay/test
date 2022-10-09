var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('admin', { title: 'Express' });
});
router.post('/h', function(req, res,next) {
  console.log('hai')
  res.send('hello')
});


module.exports = router;
