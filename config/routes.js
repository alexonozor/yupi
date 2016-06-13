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


  'get /': {
    controller: 'ProductController',
    action: 'index'
  },

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
  'post /variant': {
    controller: 'VariantController',
    action: 'create'
  },

  'get /variant': {
    controller: 'VariantController',
    action: 'index'
  },

  'get /variant/:id': {
    controller: 'VariantController',
    action: 'show'
  },

  'delete /variant/:id': {
    controller: 'VariantController',
    action: 'destory'
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
  'get /admin': {
    controller: 'adminController',
    action: 'index'
  },
  'post /admin': {
    controller: 'adminController',
    action: 'create'
  },

  'get /admin/:id': {
    controller: 'adminController',
    action: 'show'
  },

  'delete /admin/:id': {
    controller: 'adminController',
    action: 'destroy'
  },

  'post /authentication': {
    controller: 'AuthenticateController',
    action: 'login'
  },

  //customer routes
  'get /customer': {
    controller: 'CustomerController',
    action: 'index'
  },

  'get /customer/:id': {
    controller: 'CustomerController',
    action: 'show'
  },

  'delete /customer/:id': {
    controller: 'CustomerController',
    action: 'destory'
  },

  'post /customer': {
    controller: 'CustomerController',
    action: 'create'
  },

  'get /customers/search': {
    controller: 'CustomerController',
    action: 'search'
  },

  'post /customer/:id': {
    controller: 'CustomerController',
    action: 'update'
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
