// Timed out to avoid the tests running too quickly
// for the injected qunit extension from grunt
setTimeout(function() {

  module( "generating xml" );

  test( "first test", function() {
    equal( false, true );
  });

  test( "second test", function() {
    equal( true, true );
  });

  start();
}, 1000);
stop();
