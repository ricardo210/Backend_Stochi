var ProductController = require('./controllers/productController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, stochi')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'GET', path: '/v1/products', config: ProductController.getProducts},
	{method: 'POST', path: '/v1/product', config: ProductController.createProduct},
	{method: 'GET', path: '/v1/products/{productId}', config: ProductController.getProduct},
	{method: 'DELETE', path: '/v1/productd/{productId}', config: ProductController.deleteProduct},
	{method: 'PUT', path: '/v1/productu/{productId}', config: ProductController.updateProduct}
];
