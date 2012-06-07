module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    test: {
      files: ['test/**/*_test.js']
    },

    qunit: {
      all: ['test/*-tests.html']
    },

    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },

    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

	// Load the new qunite dependent files
	grunt.loadTasks( 'tasks');

	// setup the testing task which will first generate xml
	// then test the xml to make sure it's valid
	grunt.registerTask('xml-test', 'junit test');
};