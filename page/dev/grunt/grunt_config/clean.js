module.exports = { 
	options: {
		force: true
	},
	dev: [
		'<%= project.local %>/**/*.*', 
		'<%= project.scripts %>/vendor/*.js', 
		'<%= project.styles %>/vendor/**/*.scss'
	],
	deploy : [
		'<%= project.root %>/latest.zip',
		'<%= project.root %>/wordpress/',
	]
};