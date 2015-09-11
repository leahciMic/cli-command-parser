var cliCommandParser = require('../index.js');

describe('cli-command-parser', function() {
  it('should be able to parse a simple command', function() {
    expect(cliCommandParser('ls -lh')).toEqual(['ls', '-lh']);
  });

  it('should be able to parse a complex command', function() {
    expect(cliCommandParser('foo --bar --baz')).toEqual(['foo', '--bar', '--baz']);
  });

  it('should be able to parse a command with quotes', function() {
    expect(cliCommandParser('foo --bar "this is a quoted string"')).toEqual(['foo', '--bar', 'this is a quoted string']);
  });

  it('should be able to parse a command with quotes and escape sequences', function() {
    expect(cliCommandParser('foo --bar "this \\"is a quoted string"')).toEqual(['foo', '--bar', 'this \\"is a quoted string']);
  });
});
