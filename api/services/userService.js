var jwt = require('jsonwebtoken');
module.exports = {
  getUsers: function(next) {
    User.find().populate('products').exec(function(err, user) {
      if(err) throw err;
      next(user);
    });
  },

  addUser: function(userVal, next) {
      User.create(userVal).exec(function(err, user) {
        if(err) throw err;
        next(user);
      });
  },

  showUser: function(id, next) {
    User.findOne({id: id})
    .populate('products')
      .exec(function(err, user) {
      if(err) throw err;
      next(user);
    })
  },

  removeUser: function(id, next) {
    User.destroy({id: id}).exec(function(err, user) {
      if(err) throw err;
      next(user);
    });
  },
};
