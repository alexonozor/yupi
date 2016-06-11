module.exports = {
  getusers: function(next) {
    User.find().populate('products').exec(function(err, user) {
      if(err) throw err;
      next(User);
    });
  },

  addUser: function(UserVal, next) {
      User.create(UserVal).exec(function(err, user) {
        if(err) throw err;
        next(User);
      });
  },

  showUser: function(id, next) {
    User.findOne({id: id})
    .populate('products')
      .exec(function(err, user) {
      if(err) throw err;
      next(User);
    })
  },

  removeUser: function(id, next) {
    User.destroy({id: id}).exec(function(err, user) {
      if(err) throw err;
      next(User);
    });
  },
};
