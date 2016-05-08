module.exports = {
  	vendor: {
		options: {
			stripBanners: true
		},
		src: [
			'<%= project.scripts %>/vendor/jquery.js',
			'<%= project.scripts %>/vendor/bootstrap.js',
			'<%= project.scripts %>/vendor/angular.js',
		],
		dest: '<%= project.local %>/js/vendor/<%= project.name%>_vendor.js'
	},
	dev: {
		options: {
			stripBanners: false
		},
		src: [
			'<%= project.scripts %>/main.js',
		],
		dest: '<%= project.local %>/js/<%= project.name%>.js'
	},		
};