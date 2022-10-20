var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addNotification', function(req, res, next) {
  res.render('addNotification', { title: 'Notification' });
});
module.exports = router;
