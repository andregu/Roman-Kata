module.exports = {
  	options: {
		livereload: true
	},
	sass: {
		files: ['<%= project.styles %>/**/*.scss'],
		tasks: ['sass:dev', 'postcss:dev', 'notify:scss']
	},
	js: {
		files: ['<%= project.scripts %>/**/*.js'],
		tasks: ['concat:dev', 'notify:js']
	},
	images: {
		files: ['<%= project.images %>/**/*.{png,jpg,gif,svg}'],
		tasks: ['newer:copy:images', 'notify:images']
	},
	fonts: {
		files: ['<%= project.fonts %>/**/*.*'],
		tasks: ['newer:copy:fonts', 'notify:fonts']
	},
	files: {
		files: ['../**/*.php', '../**/*.html', '!../grunt/**'],
		tasks: ['newer:copy:html', 'notify:files']
	}
};