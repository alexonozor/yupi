var jwt = require('jsonwebtoken');
module.exports = {
  getAdmins: function(next) {
    Admin.find().populate('roles').populate('products').exec(function(err, admin) {
      if(err) throw err;
      next(admin);
    });
  },

  addAdmin: function(adminVal, rolesIdsInArray, next) {
    Admin.create(adminVal).exec(function(err, admin) {
      if(err) throw(err);
      Admin.findOne({email: adminVal.email}).exec(function(err, fundAdmin) {
				if (err) throw err;
				fundAdmin.roles.add(rolesIdsInArray);
					fundAdmin.save(function(err) {
            if (err) throw(err);
						next();
					})
				})
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

  addAddRoles: function(admin, next) {
    Admin.findOne({id: admin.id }).exec(function(err, admin) {
      if (err) throw err;
        admin.roles.add(roleId);
        admin.save(function(err, admin) {
          next(admin);
       })
    })
  }
};
