var product = require('../schemas/products');

exports.getProducts = {
  handler: function(request, reply){
    var products = product.find({});
    reply(products);
  }
}

exports.getProduct = {
  handler: function(request, reply){
    var products = product.find({_id:request.params.productId});
    reply(products);
  }
}

exports.createProduct = {
  handler: function(request, reply){
    var newproduct = new product({
      name : request.payload.name,
      username: request.payload.username,
      description: request.payload.description,
      contact: request.payload.contact
    });
    newproduct.save();
    console.log('product saved');
    return reply('ok');
  }
}

exports.updateProduct = {
  handler: function(request, reply){
    var reproduct = product.findByIdAndUpdate(encodeURIComponent(request.params.productId), {
      name : request.payload.name,
      username: request.payload.username,
      description: request.payload.description,
      contact: request.payload.contact
    },function(err){
      if(err){
        console.log(err);
        reply("error removing")
      }
      console.log('product updated');
      return  reply('product update');
    });
  }
}
exports.deleteProduct = {
  handler: function(request, reply){
    var products = product.findByIdAndRemove(encodeURIComponent(request.params.productId), function(err){
      if(err){
        console.log(err);
        reply("error removing")
      }
      console.log('product deleted');
      return  reply('product deleted');
    });
  }
}
