/**
 * VariantController
 *
 * @description :: Server-side logic for managing variants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		variantService.getVariants(function(variant) {
			res.json(variant);
		})
	},

	create: function(req, res) {
		var variantVal = (req.body) ? req.body : undefined;
		variantService.addVariant(variantVal, function(success) {
			res.json(success)
		})
	},

	show: function(req, res) {
		var variantId = (req.params) ? req.params.id : undefined;
		variantService.showVariant(variantId, function(success) {
			res.json(success);
		})
	},

	destory: function(req, res) {
		var variantId = req.params;
		variantService.removeVariant(variantId.id, function(success) {
			res.json({ message: 'Variant was successfully deleted' });
		})
	}
};
