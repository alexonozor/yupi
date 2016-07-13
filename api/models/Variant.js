/**
 * Variant.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    product_id: {
      type: 'integer',
      required: true,
      columnName: 'product'
    },
    title: {
      type: 'string',
      required: true
    },
    price: {
      type: 'integer',
      required: true
    },
    sku: {
      type: 'string',
      required: true
    },
    position: {
      type: 'string',
      required: true
    },
    grams: {
      type: 'integer',
      required: true
    },
    inventory_policy: {
      type: 'string'
    },
    compare_at_price:{
      type: 'integer',
      required: true
    },
    fulfillment_service: {
      type: 'string'
    },
    inventory_management: {
      type: 'string',
      required: true
    },
    option1: {
      type: 'string'
    },
    option2: {
      type: 'string'
    },
    option3: {
      type: 'string'
    },
    taxable: {
      type: 'boolean',
      required: true,
      defaultsTo: 'true'
    },
    barcode: {
      type: 'string'
    },
    image_id: {
      type: 'integer',
      required: true
    },
    inventory_quantity: {
      type: 'integer'
    },
    weight: {
      type: 'integer'
    },
    weight_unit: {
      type: 'string',
      enum: ['kg', 'g'],
      defaultsTo: 'kg'
    },
    old_inventory_quantity: {
      type: 'integer'
    },
    requires_shipping: {
      type: 'boolean',
      required: true,
      defaultsTo: 'true'
    }
  }
};
