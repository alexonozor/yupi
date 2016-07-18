/**
 * LineItem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:  {
      type: "string"
     },

    quantity: {
       type: "integer",
       defaultsTo: 0
     },

    price: {
      type: "string"
     },

    grams: {
      type: "string"
    },

    taxable: {
      type: 'boolean'
    },

    sku: {
       type: "string"
    },

    variant_title: {
       type: "string"
    },

    vendor: {
       type: 'string'
     },

     order_id: {
       type: 'integer'
     },

     product_id: {
       type: 'integer'
     }
   }
};
