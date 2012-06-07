# grunt-junit

A small alteration to grunt's default phantom.js and qunit.js files.

## Important

This plugin currently overrides the default phantom.js and qunit.js files that are included with grunt.

## Getting Started
Install the module with: `npm install grunt-junit`

```javascript
grunt.loadNpmTasks( "grunt-junit" );
```

Then from the command line:

    $ JUNIT_OUTPUT=test-output-dir grunt junt

The junit task is identical to the running qunit save for the additional xml rendering to the output directory. You can find information on configuring the qunit grunt task [here](https://github.com/cowboy/grunt/blob/master/docs/task_qunit.md).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `grunt lint` from the project root.

## License
Copyright (c) 2012 John Bender
Licensed under the MIT license.
