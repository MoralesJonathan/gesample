var logout = function(req, res, next) {
	req.session.destroy();
	next()
};

module.exports = logout;