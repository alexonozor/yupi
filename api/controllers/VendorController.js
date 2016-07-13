/**
 * VendorController
 *
 * @description :: Server-side logic for managing vendors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
		 model: 'vendor',
		 rest: false
	},

	index: function(req, res) {
		vendorService.getVendors(function(vendor) {
			res.status(200).json(vendor);
		})
	},

	create: function(req, res) {
		var vendorParams = (req.body) ? req.body : undefined;
		vendorService.addVendor(vendorParams, function(vendor) {
			res.status(200).json("created successfully");
		})
	}
};
