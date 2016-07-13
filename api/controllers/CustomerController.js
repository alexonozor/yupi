/**
 * CustomerController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


	module.exports = {
		_config: {
	     model: 'customer',
			 rest: false
	  },

		index: function(req, res) {
			customerService.getCustomers(function(customers) {
				res.json(customers);
			})
		},

		create: function(req, res) {
			var customerVal = (req.body) ? req.body : undefined;
			customerService.addCustomer(customerVal, function(success) {
				res.json(success);
			})
		},

		show: function(req, res) {
			var customerId = req.params;
			customerService.showCustomer(customerId.id, function(success) {
				res.json(success);
			})
		},

		destory: function(req, res) {
			var customerId = req.params;
			customerService.removeCustomer(customerId.id, function(success) {
				res.json({ message: 'Customer was successfully deleted' });
			})
		},

		update: function(req, res) {
			var customerVal = (req.body) ? req.body : undefined;
	    customerService.updateCustomer(customerVal, function(success) {
				Customer.update(success, customerVal).exec(function(err, updated) {
					if(err) {
						res.serverError(err);
					} else {
						res.json(updated)
					}
				})
			})
	  },

		search: function(req, res) {
	    var searchParams = req.allParams();
	    customerService.search(searchParams, function(customer) {
	      res.json(customer);
	    })
	  }
	};
