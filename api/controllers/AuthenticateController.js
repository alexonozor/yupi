/**
 * AuthenticateController
 *
 * @description :: Server-side logic for managing Authenticates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');
var nJwt = require('njwt');
var bcrypt = require('bcrypt');

module.exports = {
	login: function(req, res) {
		var emailParams = req.body.email;
		User.findOne({ email: emailParams }).exec(function(err, user) {
			if (err) throw err;
			if (!user) {
				res.json({ error: 'User not found'});
			} else if (user) {
				// check if password matches
				bcrypt.compare(req.body.password, user.password, function(err, correct) {
    			if (!correct) {
						res.json({ success: false, message: 'Wrong email or password' });
					} else {
						// if user is found and password is right
						// create a token
						//Generate RFC-compliant UUIDs
						var secretKey = uuid.v4();
						//genrate a claims
						var claims = {
							sub: 'user' + user.id,
							iss: req.host + req.originalUrl,
							permissions: 'upload-photos'
						}

						var jwt = nJwt.create(claims,secretKey);
						jwt.setExpiration(new Date().getTime() + (60*60*1000));
						var token = jwt.compact();
						res.json({
							user: user.email,
							token: token,
							secret: secretKey
						});
					}
				});
			}
		})
	}
};
