var easy = require( 'libxmljs-easy' ),
  fs = require( 'fs' ),
  glob = require( 'glob-whatev' );

exports['xml-output'] = {
  setUp: function(done) {
    var outputFile = glob.glob( process.env.JUNIT_OUTPUT + "TEST-*.xml" )[0];
    var xml = fs.readFileSync( outputFile ).toString();
    this.xmlObject = easy.parse( xml );
    done();
  },

  'equal test failure': function(test) {
    test.equal('expected: true, but was: false',
               this.xmlObject.testcase[0].failure.$message,
               'should be a failure');
    test.done();
  },

  'equal test success': function(test) {
    test.equal('', this.xmlObject.testcase[1].failure.$message,
               'should not be a failure');
    test.done();
  }
};
