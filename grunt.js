module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    test: {
      files: ['test/**/*.js']
    },

    qunit: {
      all: ['http://localhost:8000/test/dummy.html', 'http://localhost:8000/test/bar.html']
    },
    server: {
      port: 8000,
      base: '.'
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
	grunt.registerTask('test:xml', 'qunit test');
};