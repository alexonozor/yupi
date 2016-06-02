module.exports = {
  getAdmins: function(next) {
    Admin.find().populate('products').exec(function(err, admin) {
      if(err) throw err;
      next(admin);
    });
  },

  addAdmin: function(adminVal, next) {
      Admin.create(adminVal).exec(function(err, admin) {
        if(err) throw err;
        next(admin);
      });
  },

  showAdmin: function(id, next) {
    Admin.findOne({id: id})
    .populate('products')
      .exec(function(err, admin) {
      if(err) throw err;
      next(admin);
    })
  },

  removeAdmin: function(id, next) {
    Admin.destroy({id: id}).exec(function(err, admin) {
      if(err) throw err;
      next(admin);
    });
  },
};
