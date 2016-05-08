module.exports = {
  	dev: {
		bsFiles: {
			src : [
				'<%= project.local %>/**/*.css',
				'<%= project.local %>/**/*.js',
			]
		},
		options: {
			watchTask: true,
			proxy: '<%= project.proxy %>'
		}
	}
}