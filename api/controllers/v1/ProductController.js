/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
     model: 'product'
  },

	index: function(req, res) {
		productService.getProducts(function(products) {
			res.json(products);
		})
	},

	create: function(req, res) {
		var productVal = (req.body) ? req.body : undefined;
		productService.addProduct(productVal, function(success) {
			res.json(success);
		})
	},

	show: function(req, res) {
		var productId = req.params;
		productService.showProduct(productId.id, function(success) {
			res.json(success);
		})
	}
};
