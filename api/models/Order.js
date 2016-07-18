/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    browser_ip: {
      type: 'string'
    },

    buyer_accepts_marketing: {
      type: 'boolean',
      defaultsTo: true
    },

    cancel_reason: {
      type: 'string'
    },

    cancelled_at: {
      type: 'datetime'
    },

    client_details: {
      type: 'array'
    },

    closed_at: {
      type: 'datetime'
    },

    email: {
      type: 'string'
    },

    financial_status: {
      type: 'string',
      enum: ['pending', 'authorized', 'partially_paid', 'paid', 'partially_refunded', 'refunded', 'voided']
    },

    landing_site: {
      type: 'string'
    },

    note: {
      type: 'string'
    },

    referring_site: {
      type: 'string'
    },

    subtotal_price: {
      type: 'string'
    },

    token: {
      type: 'text',
      defaultsTo: function() {
        return uuid.v4();
      }
    },

    total_discounts: {
      type: 'string',
    },

    total_line_items_price: {
      type: 'string'
    },

    total_price: {
      type: 'string'
    },

    total_weight: {
      type: 'string'
    },

    customer: {
      model: 'customer'
    },

    order_number: {
      type: 'text',
      defaultsTo: function() {
        return uuid.v4();
      }
    }
  }
};
