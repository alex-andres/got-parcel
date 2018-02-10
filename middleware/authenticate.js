const User = require('../models/user');

const authenticate = (req, res, next) => {
	const token = req.header('X-Auth');

	User.findByToken(token).then(user => {
		if (!user) {
			return Promise.reject('You need login to access this page');
		}

		req.user = user;
		req.token = token;
		next();

	}).catch(e => {
		res.status(401).send(e);
	});
};

module.exports = authenticate;