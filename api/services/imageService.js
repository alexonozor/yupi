var cloudinary = require('cloudinary');
 console.log(process.env);
cloudinary.config({
  cloud_name: sails.config.cloudinaryKey.cloud_name || process.env.cloud_name,
  api_key:    sails.config.cloudinaryKey.api_key || process.env.api_key,
  api_secret: sails.config.cloudinaryKey.api_secret || process.env.api_secret
});

module.exports = {
  getImages: function(next) {
    Image.find().exec(function(err, images) {
      if(err) throw err;
      next(images);
    });
  },

  addImages: function(imageVal, file, next) {
    cloudinary.uploader.upload(file[0].fd, function(result) {
      attr = imageVal
      attr['product'] = imageVal.product_id
      attr['src'] = result.url
      Image.create(attr).exec(function(err, image) {
        if(err) throw err;
        next(image);
      });
    })
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
  },
};
