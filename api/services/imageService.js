module.exports = {
  getImages: function(next) {
    Image.find().exec(function(err, images) {
      if(err) throw err;
      next(images);
    });
  },
  addImages: function(imageVal, next) {
    Image.create(imageVal).exec(function(err, image) {
      if(err) throw err;
      next(image);
    });
  },
  showImage: function(id, next) {
    Image.findOne({id: id}).exec(function(err, image) {
      if(err) throw err;
      next(image);
    })
  },
  removeImage: function(id, next) {
    Product.destroy({id: id}).exec(function(err, image) {
      if(err) throw err;
      next(image);
    });
  }
};
