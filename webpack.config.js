const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const entry_fn = defaultConfig.entry;
defaultConfig.entry = () => {
	return {
		...entry_fn(),
		"member-admin": path.resolve( process.cwd(), 'src', 'member-admin', 'index.js'),
	}
}

module.exports = defaultConfig;
