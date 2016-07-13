/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:  {
      type: 'string',
      required: true
    },


    admin_id: {
      type: 'integer',
      required: true,
      index: true
    },

    body_html: {
      type: 'text',
      required: true
    },

    product_type: {
      type: 'string',
      required: true
    },
    published_at: {
      type: 'datetime'
    },

    // published_scope:  {
    //   type: 'string'
    // },
    tags: {
      type: 'array',
      required: true
    },

    vendor: {
      type: 'array',
      required: true
    },

    visibility: {
      type:  'boolean',
      defaultsTo: 'false'
    },

    status: {
      type: 'string',
      enum: ['Enabled', 'Disabled'],
      defaultsTo: 'Enabled'
    },

    product: {
      model: 'admin'
    },

    // variants: {
    //   type: 'variant',
    //   via: 'product'
    // },


    images: {
      collection: 'image',
      via: 'product'
    },
    //
    price: {
      type: 'integer',
      required: true
    },
    //
    sku: {
      type: 'string',
      required: true
    },

    // grams: {
    //   type: 'integer',
    //   required: true
    // },
    // inventory_policy: {
    //   type: 'string'
    // },
    compare_at_price:{
      type: 'integer',
      required: true
    },
    // fulfillment_service: {
    //   type: 'string'
    // },
    // inventory_management: {
    //   type: 'string',
    //   required: true
    // },
    taxable: {
      type: 'boolean',
      required: true,
      defaultsTo: 'true'
    },

    barcode: {
      type: 'string'
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

    shipping: {
      type: 'boolean',
      required: true,
      defaultsTo: 'true'
    },

    meta_title: {
      type: 'string',
      required: true
    },

    meta_description: {
      type: 'string',
      required: true
    },

    ProductType: {
      model: 'ProductType'
    }
  }
};
