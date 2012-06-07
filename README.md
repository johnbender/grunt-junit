# grunt-junit

A small alteration to grunt's default phantom.js and qunit.js files to render rudimentary junit compatible xml for use with Jenkins.

## Important

This plugin currently overrides the default phantom.js and qunit.js files that are included with grunt.

## Getting Started
Install the module with: `npm install grunt-junit`

```javascript
grunt.loadNpmTasks( "grunt-junit" );
```

Then from the command line:

    $ JUNIT_OUTPUT=test-output-dir grunt junt

All the xml can be found inside the `test-output-dir`.


## Futher Information

The file names will take the form `TEST-<dasherized-url>.xml` and can be globbed easily for use with a CI like Jenkins.

Please note that the "dasherizing" is most likely exceptionally fragile, so please do report issues with specific test urls and I'll make corrections

The junit task is identical to the running qunit save for the additional xml rendering to the output directory. You can find information on configuring the qunit grunt task [here](https://github.com/cowboy/grunt/blob/master/docs/task_qunit.md).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `grunt lint` from the project root.

## License
Copyright (c) 2012 John Bender
Licensed under the MIT license.
