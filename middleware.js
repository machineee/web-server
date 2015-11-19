var middleware = {
requireAuthentification: function (req, res, next) {
	console.log('private route hit');
	next();
}, 
logger: function (req, res, next) {
	var date = new Date();
	console.log('Request: ' +  ' '+ date.toString() + ' ' + req.method + ' ' + req.originalUrl);
	next();
}
};

module.exports = middleware;