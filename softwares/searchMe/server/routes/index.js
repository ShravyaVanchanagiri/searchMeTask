var express = require('express');
var router = express.Router();
var path = require('path');
var userRoutes = require('./userRoutes');
router = function (app) {
  app.get('/', function (req, res, next) {
    res.render(path.join(__dirname , '../../client/app/index'));

  });
  app.get('/getUserDetails',userRoutes.getUserDetails);
};
module.exports = router;
