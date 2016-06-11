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
		Admin.findOne({ email: emailParams }).exec(function(err, admin) {
			if (err) throw err;
			if (!admin) {
				res.json({ error: 'Admin not found'});
			} else if (admin) {
				// check if password matches
				bcrypt.compare(req.body.password, admin.password, function(err, correct) {
    			if (!correct) {
						res.json({ success: false, message: 'Wrong email or password' });
					} else {
						// if admin is found and password is right
						// create a token
						//Generate RFC-compliant UUIDs
						var secretKey = uuid.v4();
						//genrate a claims
						var claims = {
							sub: 'admin' + admin.id,
							iss: req.host + req.originalUrl,
							permissions: 'upload-photos'
						}

						var jwt = nJwt.create(claims,secretKey);
						jwt.setExpiration(new Date().getTime() + (60*60*1000));
						var token = jwt.compact();
						res.json({
							admin: admin.email,
							token: token,
							secret: secretKey
						});
					}
				});
			}
		})
	}
};
