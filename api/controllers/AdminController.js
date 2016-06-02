/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
     model: 'admin',
		 rest: false
  },

	index: function(req, res) {
		adminService.getAdmins(function(admins) {
			res.json(admins);
		})
	},

	create: function(req, res) {
		var adminVal = (req.body) ? req.body : undefined;
		adminService.addAdmin(adminVal, function(success) {
			res.json(success);
		})
	},

	show: function(req, res) {
		var adminId = req.params;
		adminService.showAdmin(adminId.id, function(success) {
			res.json(success);
		})
	},

	destory: function(req, res) {
		var adminId = req.params;
		adminService.removeAdmin(adminId.id, function(success) {
			res.json({ message: 'Admin was successfully deleted' });
		})
	}
};
