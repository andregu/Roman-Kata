module.exports = {
  	dev: {
  		options: {
			includePaths: [
				'<%= project.styles %>/vendor/compass/',
				'<%= project.styles %>/vendor/compass/compass',
				'<%= project.styles %>/vendor/compass/compass/css3',
				'<%= project.styles %>/vendor/compass/compass/layout',
				'<%= project.styles %>/vendor/compass/compass/reset',
				'<%= project.styles %>/vendor/compass/compass/typography',
				'<%= project.styles %>/vendor/compass/compass/utilities',
				'<%= project.styles %>/vendor/compass/compass/utilities/color',
				'<%= project.styles %>/vendor/compass/compass/utilities/general',
				'<%= project.styles %>/vendor/compass/compass/utilities/links',
				'<%= project.styles %>/vendor/compass/compass/utilities/lists',
				'<%= project.styles %>/vendor/compass/compass/utilities/sass',
				'<%= project.styles %>/vendor/compass/compass/utilities/sprites',
				'<%= project.styles %>/vendor/compass/compass/utilities/tables',
				'<%= project.styles %>/vendor/compass/compass/utilities/text',
			],
			sourceMap: true
		},
		files: {
			'<%= project.local %>/style.css': '<%= project.styles %>/style.scss'
		}
	}
};