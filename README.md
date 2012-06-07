# grunt-junit

A small alteration to grunt's default phantom.js and qunit.js files to render rudimentary junit compatible xml for use with Jenkins.

## Important

This plugin currently overrides the default phantom.js and qunit.js files that are included with grunt.

## Getting Started
Install the module with `npm install grunt-junit` and then add the following to your `grunt.js` file.

```javascript
grunt.loadNpmTasks( "grunt-junit" );
```

Then from the command line:

    JUNIT_OUTPUT=test-output-dir grunt junit

All the xml can be found inside the `test-output-dir`.

## Further Information

The file names will take the form `TEST-<dasherized-url>.xml` and can be globed easily for use with a CI like Jenkins.

Please note that the "dasherizing" is most likely exceptionally fragile, so please do report issues with specific test urls and I'll make corrections

The junit task is identical to the running qunit save for the additional xml rendering to the output directory. You can find information on configuring the qunit grunt task [here](https://github.com/cowboy/grunt/blob/master/docs/task_qunit.md).

## Tests/Dev

For any and all commands that have `grunt` you can replace them with `node node_modules/.bin/grunt` after an `npm install`.

The test suite runs a dummy qunit test that will generate the junit xml and then the test suite will check the xml for some basic properties. You can run the test suite with:

    npm install
    JUNIT_OUTPUT=test/output/ grunt junit --force

The initial test suite contains failures to test for the failure xml, and as a result the `--force` option is necessary. Obviously this also means you need to ignore the initial qunit failures and focus on the test out put from the `test:files` task.

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `grunt lint` from the project root.

## License
Copyright (c) 2012 John Bender
Licensed under the MIT license.
