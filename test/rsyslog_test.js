var test = require('tap').test;
var rsyslog = require('../rsyslog');

test('rsyslog template generation', function(t) {
  rsyslog({app: 'foobar', logstash: 'barfoo'});
  t.end();
});
