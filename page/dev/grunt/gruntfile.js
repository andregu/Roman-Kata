var path = require('path');

module.exports = function(grunt) {
	// measures the time each task takes
	require('time-grunt')(grunt);
	//bA1pyzLWh4L35B52
	// load grunt config
	require('load-grunt-config')(grunt,{
		configPath: path.join(process.cwd(), 'grunt_config')
	});
};
