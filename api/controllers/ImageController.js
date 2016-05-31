/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

   _config: {
      model: 'image',
 		 rest: false
   },

 	index: function(req, res) {
 		imageService.getImages(function(images) {
 			res.json(images);
 		})
 	},

 	create: function(req, res) {
    var imageVal = (req.body) ? req.body : undefined;
    req.file('src').upload(function(err, file) {
      if (err) {
        return res.serverError(err)
      } else {
        var imageVal = (req.body) ? req.body : undefined;
        imageService.addImages(imageVal, function(success) {
          res.json(success);
        })
      };
    })
 	},

 	show: function(req, res) {
 		var imageId = req.params;
 		imageService.showImage(imageId.id, function(success) {
 			res.json(success);
 		})
 	},

  destory: function(req, res) {
		var imageId = req.params;
    console.log(imageId)
		imageService.remove(imageId.id, function(success) {
			res.json({ message: 'Image was successfully deleted' });
		})
	}
 };
