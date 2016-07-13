/**
 * ProductTypeController
 *
 * @description :: Server-side logic for managing producttypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
		 model: 'productType',
		 rest: false
	},

	index: function(req, res) {
		productTypeService.getProductTypes(function(ProductType) {
			res.status(200).json(ProductType);
		})
	},

	create: function(req, res) {
		var typeProduct = (req.body) ? req.body : undefined;
		productTypeService.addProductType(typeProduct, function(ProductType) {
			res.status(200).json("created successfully");
		})
	}
};
