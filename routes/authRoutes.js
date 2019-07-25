const passport = require('passport');

module.exports = (app) => {
	app.get('/google/auth', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	app.get('/google/auth2callback', passport.authenticate('google') );

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
}
