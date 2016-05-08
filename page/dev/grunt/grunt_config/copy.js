module.exports = {
  	html: {
		files: [
			{expand: true, cwd: '<%= project.dev %>', src: ['*.html'], dest: '<%= project.local %>'},				
		]
	},
	images : {
		files : [
			{expand: true, cwd: '<%= project.fonts %>', src: ['**/*.*'], dest: '<%= project.local %>/fonts'},
		]
	},
	fonts: {
		files : [
			{expand: true, cwd: '<%= project.images %>', src: ['**/*.*'], dest: '<%= project.local %>/images'}
		]
	},
	wordpress: {
		files : [
			{expand: true, cwd: '<%= project.root %>/wordpress', src: ['**/*.*'], dest: '<%= project.local %>'}
		]
	},
};