const tailwindcss = require('tailwindcss');

module.exports = {
	plugins: [tailwindcss('./tailwind-custom-config.js'), require('autoprefixer')],
};
