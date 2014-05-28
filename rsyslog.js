// create rsyslog for app
var ejs = require('ejs');
var fs = require('fs');
var template = fs.readFileSync(__dirname + '/templates/rsyslog.ejs', 'utf-8');

module.exports = function (opts) {

  fs.writeFileSync(
    '/etc/rsyslog.d/' +
    opts.app + '.conf',
    ejs.render(template, opts)
  );
}
