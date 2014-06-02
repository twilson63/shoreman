# shoreman

Shoreman is a nodejs application that registers with `seaport` to get a dynamic port assignment for a given process, then it spawns the process as a child process, passing the port assignment in as an environment variable.  The shoreman process continues to run whild the child process is running and it will shut down when the child process exits.  This enables monitoring tools like `forever` and registry tools like `seaport` to track the existence of the child process.

## usage

```
export SEAPORT=localhost:9090
export SHOREMAN_CMD=node
export SHOREMAN_APP=foo
export LOGSTASH=localhost:514
shoreman [server.js]
```

## install

```
npm install shoreman -g
```

## dependencies

* This module is only useful if you are using `seaport` to assign your ports

[https://github.com/substack/seaport](https://github.com/substack/seaport)

## rsyslog

shoreman also creates a rsyslog file in the `rsyslog.d` directory.  if given the logstash server information:


## LICENSE

MIT

## Support

see/post Github Issues

## Thanks

* Thank you to @substack for creating `seaport` and all the other wonderful nodejs modules.
* Thank you to `Ryan Dahl` and NodeJS Community

