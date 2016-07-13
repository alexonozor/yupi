module.exports = {

  getProductTypes: function(next) {
    ProductType.find()
    .populate('products').exec(function(err, productType) {
      if(err) throw err;
      next(productType);
    });
  },

  addProductType: function(productTypeVal, next) {
    ProductType.create(productTypeVal).exec(function(err, product) {
      if(err) throw err;
      next(productTypeVal);
    });
  }
  
}
