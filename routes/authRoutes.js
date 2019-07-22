const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/google/auth',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/google/auth2callback', passport.authenticate('google') );
}
