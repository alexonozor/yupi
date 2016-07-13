module.exports = {

  getVendors: function(next) {
    Vendor.find()
    .populate('product').exec(function(err, vendor) {
      if(err) throw err;
      next(vendor);
    });
  },

  addVendor: function(vendorVal, next) {
    Vendor.create(vendorVal).exec(function(err, vendor) {
      if(err) throw err;
      next(vendor);
    });
  }

}
