/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {
	_config: {
     model: 'product',
		 rest: false
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
	},

	destory: function(req, res) {
		var productId = req.params;
		productService.removeProduct(productId.id, function(success) {
			res.json({ message: 'Product was successfully deleted' });
		})
	},

	search: function(req, res) {
    var searchParams = req.allParams();
    productService.search(searchParams, function(product) {
      res.json(product);
    })
  },

	import: function(req, res) {
		req.file('file').upload(function(err, file) {
			productService.uploadCsv(file[0].fd, function(err, success) {
				res.status(200).json(success);
			})
		})
	}


};
