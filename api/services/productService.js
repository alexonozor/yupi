
var parse = require('csv-parse');
var fs = require('fs');
module.exports = {
  getProducts: function(next) {
    Product.find({ limit: 10, sort: 'createdAt DESC' })
    .populate('images').exec(function(err, products) {
      if(err) throw err;
      next(products);
    });
  },

  addProduct: function(productVal, next) {
    Product.create(productVal).exec(function(err, product) {
      if(err) throw err;
      next(product);
    });
  },

  showProduct: function(id, next) {
    Product.findOne({id: id}).populate('images').exec(function(err, product) {
      if(err) throw err;
      next(product);
    })
  },

  removeProduct: function(productVal, next) {
    Product.destroy({id: productVal}).exec(function(err, product) {
      if(err) throw err;
      next(product)
    });
  },



  search: function(searchParams, next) {
    var search = searchParams.title;
    Product.find({ title: { 'like': `%${search}%` } }).exec(function(err, product) {
      if (err) throw err;
      next(product);
    })
  },

  uploadCsv: function(csv, next) {
    fs.readFile(csv, 'utf8', function(err, contents) {
        parse(contents, function(err, output) {
          function convertToArrayOfObjects(data) {
            // convert an array response to csv
              var keys = data.shift(),
                  i = 0, k = 0,
                  obj = null,
                  output = [];

              for (i = 0; i < data.length; i++) {
                  obj = {};

                  for (k = 0; k < keys.length; k++) {
                      obj[keys[k]] = data[i][k];
                  }

                  output.push(obj);
              }

              return output;
          }

         var csvDatas = convertToArrayOfObjects(output);
         for(var i = 0; i < csvDatas.length; i++) {
           Product.create(csvDatas[i]).exec(function(err, product) {
             if (err) {
               console.log(err);
             } else {
             next(product);
            }
           })
         }
        })
    })
  }


};
