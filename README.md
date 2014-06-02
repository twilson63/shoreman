# shoreman

Shoreman is a nodejs application that registers with `seaport` to get a dynamic port assignment for a given process, then it spawns the process as a child process, passing the port assignment in as an environment variable.  The shoreman process continues to run whild the child process is running and it will shut down when the child process exits.  This enables monitoring tools like `forever` and registry tools like `seaport` to track the existence of the child process.


```
export SEAPORT=localhost:9090
export SHOREMAN_CMD=node
export SHOREMAN_APP=foo
shoreman [server.js]
```

