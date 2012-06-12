/*
 * grunt-junit
 * https://github.com/johnbender/grunt-junit
 *
 * Copyright (c) 2012 John Bender
 * Licensed under the MIT license.
 */

var child_process = require( 'child_process' ),
    semver = require( 'semver' );

module.exports = function( grunt ) {
	grunt.registerTask( 'junit:env', function() {
		var done = this.async();

		if( !process.env.JUNIT_OUTPUT ){
			grunt.fail.fatal( "The junit grunt plugin requires a directory be set " +
												"for junit output in the env variable JUNIT_OUTPUT" );
		}

		child_process.exec( "phantomjs --version", function(err, stdout, stderr) {
			if( semver.lt( stdout, '1.5.0' ) ){
				grunt.fail.fatal( "The junit grunt plugin requires a version of phantomjs " +
													"greater than or equal to 1.5.0" );

			}

			done();
		});
	});

	grunt.registerTask( 'junit', 'junit:env qunit' );
};
