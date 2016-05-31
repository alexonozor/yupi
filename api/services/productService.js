module.exports = {
  getProducts: function(next) {
    Product.find().populate('variants').populate('images').exec(function(err, products) {
      if(err) throw err;
      next(products);
    });
  },
  addProduct: function(productVal, next) {
    Product.create(productVal).exec(function(err, product) {
      if(err) throw err;
      next(product);
    });
  },
  showProduct: function(id, next) {
    Product.findOne({id: id}).populate('images').exec(function(err, product) {
      if(err) throw err;
      next(product);
    })
  },
  removeProduct: function(productVal, next) {
    Product.destroy({title: productVal}).exec(function(err, product) {
      if(err) throw err;
      next(product);
    });
  }
};
