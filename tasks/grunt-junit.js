/*
 * grunt-junit
 * https://github.com/johnbender/grunt-junit
 *
 * Copyright (c) 2012 John Bender
 * Licensed under the MIT license.
 */

module.exports = function( grunt ) {
	grunt.registerTask( 'junit:env', function() {
		if( !process.env.JUNIT_OUTPUT ){
			grunt.fail.fatal( "The junit grunt plugin requires a directory be set " +
												"for junit output in the env variable JUNIT_OUTPUT" );
		}
	});

	grunt.registerTask( 'junit', 'junit:env qunit' );
};
