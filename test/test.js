// Generated by ToffeeScript 1.4.0
(function() {
  var Getopt, assert, eq, getopt, throws;

  try {
    Getopt = require('./..');
    assert = require('assert');
    eq = assert.deepEqual;
    throws = assert.throws;
    getopt = new Getopt([['a', 'has-argument', ':']]);
    eq(getopt.parse(['-a', 'a-value']), {
      argv: [],
      options: {
        'has-argument': 'a-value'
      }
    }, 'has-argument');
    eq(getopt.parse(['--has-argument', 'a-value']), {
      argv: [],
      options: {
        'has-argument': 'a-value'
      }
    }, 'has-argument');
    getopt = new Getopt([['A', 'A'], ['B', 'B'], ['C', 'C']]);
    eq(getopt.parse(['-ABC']), {
      argv: [],
      options: {
        'A': true,
        'B': true,
        'C': true
      }
    }, 'no-argument');
    getopt = new Getopt([['a', 'a', ':'], ['A', 'A'], ['B', 'B'], ['C', 'C']]);
    eq(getopt.parse(['-ABCa', 'foo']), {
      argv: [],
      options: {
        'A': true,
        'B': true,
        'C': true,
        'a': 'foo'
      }
    }, 'no-argument');
    getopt = new Getopt([]);
    throws(function() {
      return getopt.parse(['-A']);
    }, function(err) {
      return err.message === 'invalid option A';
    });
    getopt = new Getopt([['h', 'help']]);
    eq(getopt.parse(['--help']), {
      argv: [],
      options: {
        'help': true
      }
    }, 'long option');
    getopt = new Getopt([]);
    eq(getopt.parse('-- hello world'.split(' ')), {
      argv: ['hello', 'world'],
      options: {}
    });
    getopt = new Getopt([['h', 'help'], ['m', 'multi', ':+'], ['s', 'short']]);
    eq(getopt.parse('foo --help --multi a -m b -sm c -- --help'.split(' ')), {
      argv: ['foo', '--help'],
      options: {
        'help': true,
        'multi': ['a', 'b', 'c'],
        'short': true
      }
    });
    console.info("\x1b[32mTest passed.\x1b[0m");
  } catch (e) {
    console.info(e);
    console.info('\n--- STACK TRACE ---\n');
    console.info(e.stack);
  }

}).call(this);
