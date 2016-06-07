/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
     model: 'user',
		 rest: false
  },

	index: function(req, res) {
		userService.getUsers(function(users) {
			res.json(users);
		})
	},

	create: function(req, res) {
		var userVal = (req.body) ? req.body : undefined;
		 userService.addUser(userVal, function(success) {
			res.json(success);
		})
	},

	show: function(req, res) {
		var userId = req.params;
		userService.showUser(userId.id, function(success) {
			res.json(success);
		})
	},

	destory: function(req, res) {
		var userId = req.params;
		userService.removeUser(userId.id, function(success) {
			res.json({ message: 'user was successfully deleted' });
		})
	}
};
