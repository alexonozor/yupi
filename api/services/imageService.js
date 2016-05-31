module.exports = {
  getImages: function(next) {
    Image.find().exec(function(err, images) {
      if(err) throw err;
      next(images);
    });
  },
  
  addImages: function(imageVal, next) {
    attr = imageVal
    attr['product'] = imageVal.product_id
    Image.create(attr).exec(function(err, image) {
      if(err) throw err;
      next(image);
    });
  },

  showImage: function(id, next) {
    Image.findOne({id: id})
    .populate('product')
      .exec(function(err, image) {
      if(err) throw err;
      next(image);
    })
  },

  removeImage: function(id, next) {
    Image.destroy({id: id}).exec(function(err, image) {
      if(err) throw err;
      next(image);
    });
  }
};
