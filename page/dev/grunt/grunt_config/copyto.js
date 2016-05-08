module.exports = {
	jquery: {
		files: [
			{expand: true, cwd: '<%= project.bower%>/jquery/dist/', src: ['jquery.js'], dest: '<%= project.scripts%>/vendor/'}
		]
	},
	bootstrap: {
		files: [
			{expand: true, cwd: '<%= project.bower %>/bootstrap-sass/assets/javascripts/', src: ['bootstrap.js'], dest: '<%= project.scripts %>/vendor/'},
			{expand: true, cwd: '<%= project.bower %>/bootstrap-sass/assets/stylesheets/', src: ['**/*.scss'], dest: '<%= project.styles %>/vendor/bootstrap/'},
			{expand: true, cwd: '<%= project.bower %>/bootstrap-sass/assets/fonts/bootstrap/', src: ['**/*'], dest: '<%= project.fonts %>/bootstrap/'}
		]
	},
	compass: {
		files: [
			{expand: true, cwd: '<%= project.bower%>/compass/core/stylesheets/', src: ['**/*.scss'], dest: '<%= project.styles%>/vendor/compass/'}
		]
	},
	angular: {
		files: [
			{expand: true, cwd: '<%= project.bower%>/angular/', src: ['angular.js'], dest: '<%= project.scripts%>/vendor/'}
		]
	}
};