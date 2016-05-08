module.exports = {
  	options: {
		processors: [
				require('autoprefixer')({browsers: 'last 2 versions'})
			],
		parser: require('postcss-safe-parser'),
		syntax: require('postcss-scss')
	},
	dev: {
		src: ['<%= project.local %>/style.css']
	},
};