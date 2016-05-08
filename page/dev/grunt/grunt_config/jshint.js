module.exports = {
  	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	},
	dev: [
		'<%= project.local %>/js/<%= project.name%>.js'
	]
};