module.exports = {
  getCustomers: function(next) {
    Customer.find().exec(function(err, customer) {
      if(err) throw err;
      next(customer);
    });
  },

  addCustomer: function(customerVal, next) {
    Customer.create(customerVal).exec(function(err, customer) {
      console.log(err);
      if(err) throw(err);
        next(customer);
			});
  },

  showCustomer: function(id, next) {
    Customer.findOne({id: id})
      .exec(function(err, customer) {
      if(err) throw err;
      next(customer);
    })
  },

  removeCustomer: function(id, next) {
    Customer.destroy({id: id}).exec(function(err, customer) {
      if(err) throw err;
      next(customer);
    });
  },

  updateCustomer: function(params, next) {
    Customer.findOne({ email: params.email }).exec(function(err, customer) {
      if(err) throw err;
      next(customer);
    });
  },

  search: function(searchParams, next) {
    var search = searchParams.first_name;
    Customer.find({ first_name: { 'like': `${search}` } }).exec(function(err, customer) {
      if (err) throw err;
      next(customer);
    })
  }
};
