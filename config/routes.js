/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  'get /products': {
    controller: 'ProductController',
    action: 'index'
  },

  'get /product/:id': {
    controller: 'ProductController',
    action: 'show'
  },

  'post /products': {
    controller: 'ProductController',
    action: 'create'
  },

  'delete /products/:id': {
    controller: 'ProductController',
    action: 'destory'
  },

  'get /products/search' : {
    controller: 'ProductController',
    action: 'search'
  },

  // variants routs
  'post /variants': {
    controller: 'VariantController',
    action: 'create'
  },

  'get /variants': {
    controller: 'VariantController',
    action: 'index'
  },

  'get /variants/:id': {
    controller: 'VariantController',
    action: 'show'
  },

  // image routes
  'get /images': {
    controller: 'ImageController',
    action: 'index'
  },
  'post /images': {
    controller: 'ImageController',
    action: 'create'
  },
  'get /image/:id': {
    controller: 'ImageController',
    action: 'show'
  },

  'delete /images/:id': {
    controller: 'ImageController',
    action: 'destroy'
  },

  // Admin routes
  'get /admins': {
    controller: 'AdminController',
    action: 'index'
  },
  'post /admins': {
    controller: 'AdminController',
    action: 'create'
  },
  'get /admin/:id': {
    controller: 'AdminController',
    action: 'show'
  },

  'delete /admins/:id': {
    controller: 'AdminController',
    action: 'destroy'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
