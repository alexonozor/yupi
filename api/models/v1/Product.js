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
    published_scope:  {
      type: 'string'
    },
    tags: {
      type: 'string',
      required: true
    },
    meta_title_tag:  {
      type: 'string',
      required: true
    },
    meta_description: {
      type: 'text',
      required: true
    },
    vendor: {
      type: 'string',
      required: true
    },
    visibility: {
      type:  'string',
      enum: ['Search', 'Catalog'],
      defaultsTo: 'Search'
    },
    status: {
      type: 'string',
      enum: ['Enabled', 'Disabled'],
      defaultsTo: 'Enabled'
    },
    
    variants: {
      collection: 'variant',
      via: 'product'
    }
  }
};
