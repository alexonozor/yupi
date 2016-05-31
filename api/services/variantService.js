module.exports = {
  getVariants: function(next) {
    Variant.find().exec(function(err, variant) {
      if(err) throw err;
      next(variant);
    });
  },
  addVariant: function(variantVal, next) {
    Variant.create(variantVal).exec(function(err, variant) {
      if(err) throw err;
      next(variant);
    });
  },
  showVariant: function(id, next) {
    Variant.findOne({id: id}).exec(function(err, variant) {
      if(err) throw err;
      next(variant);
    })
  }
};
