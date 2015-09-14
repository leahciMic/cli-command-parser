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

  it('should be able to parse a complex command example 2', function() {
    expect(cliCommandParser('android create avd -t 1 -a -c 500M -d "Nexus 5" -n "Android511"')).toEqual(
      [
        'android', 'create', 'avd',
        '-t', '1',
        '-a',
        '-c', '500M',
        '-d', 'Nexus 5',
        '-n', 'Android511'
      ]
    );
  })
});
