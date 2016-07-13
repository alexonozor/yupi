/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    product_id: {
      type: 'integer',
      // required: true
    },
    position: {
      type: 'integer'
    },
    src: {
      type: 'string'
    },
    product: {
      model: 'product'
    }
  }
};
