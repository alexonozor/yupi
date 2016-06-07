var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true, required: true },
    email     : { type: 'email',  unique: true, required: true },
    password  : { type: 'string', required: true },
    products  : { collection: 'Product', via: 'product' }
  }
};

module.exports = User;
