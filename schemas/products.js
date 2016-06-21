var mongoose = require('mongoose');
var ingredient=require('../schemas/ingredients');

var productSchema = new mongoose.Schema({
  name : String,
  description : String,
  username: String,
  description: String,
  contact: String

});

module.exports = mongoose.model('product', productSchema);
