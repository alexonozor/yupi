var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');
var nJwt = require('njwt');
module.exports = function isLoggedIn (req, res, next) {

  var secretKey = uuid.v4();
  var token  = req.headers.token;
  var secret = req.headers.secret;
  nJwt.verify(token, secret, function(err, token){
    if(err){
      // respond to request with error
      res.json({ error: 'Cannot verify token' });
    }else{
      // continue with the request
      next();
    }
  });
};
