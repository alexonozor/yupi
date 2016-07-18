/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    first_name: {
      type: 'string',
      required: true
    },

    last_name: {
      type: 'string',
      required: true
    },

    accepts_marketing: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },

    email: {
      type: 'email',
      required: true,
      unique: true,
      index: true
    },

    last_order_id: {
      type: 'integer'
    },

    last_order_name: {
      type: 'string'
    },

    note: {
      type: 'text'
    },

    orders_count: {
      type: 'integer'
    },

    state: {
      type: 'string',
      enum: ['decline', 'invited']
    },

    tax_exempt: {
      type: 'string'
    },

    total_spent: {
      type: 'integer'
    },

    verified_email: {
      type: 'boolean',
      defaultsTo: false
    },

    orders: {
      collections: 'orders',
      via: 'customer'
    }
  }
};
