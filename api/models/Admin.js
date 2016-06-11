var bcrypt = require('bcrypt');

var Admin = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    email     : { type: 'string', email: true, unique: true, required: true },
    password  : { type: 'string', required: true, columnName: 'hashed_password' },
    products  : { collection: 'Product', via: 'product' },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password
      delete obj.hashed_password
      return obj
    },
    // Add a reference to roles
    roles: {
      collection: 'role',
      via: 'admins',
      dominant: true
    }
  },

  beforeCreate: function(values, cb) {
     bcrypt.hash(values.password, 10, function(err, hash) {
       if (err) return cb();
       values.password = hash;
       console.log(values.password);
       cb();
     })
  }
};

module.exports = Admin;
