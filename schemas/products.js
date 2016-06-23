var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  name : String,
  description : String,
  username: String,
  contact: String

});

module.exports = mongoose.model('product', productSchema);
