var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
//  router.post('/h', function(req, res,) {
//    console.log('hai')
//    res.send('hello')
// });


module.exports = router;
