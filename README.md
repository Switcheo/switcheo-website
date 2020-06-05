# Installation

1. `yarn` install dependencies
2. `yarn build` bundle production version into `./build`
3. `node build/` to execute node on the build folder.

# Configurations

## Server Port
To run server on a different port from default `3000`, you can either update the `.env` environment file or run with environment variables. e.g. to run on port 80:

1. `.env` file:
```
PORT=80
```

2. Run with environment variables, in the shell:
```
$ PORT=80 node build/
```

## Robots TXT
The `robots.txt` ([RFC pending](https://tools.ietf.org/html/draft-koster-rep-00)) is set to allow all. Update the [file](./public/robots.txt) if necessary. 
```
./public/robots.txt
```

## Contentful
1. Update contentful credentials at `.env`.
2. Entire content is cached for 15 seconds before expiring, can be changed at `.env`.
3. Content freshness check occurs **after** every request.

## Handy script for production deployment (linux servers)

*nodemon installation required*: `yarn global add nodemon`

`restart.sh`
```bash
kill -15 `cat app.pid`
nodemon --watch ./build ./build > startup.log 2>&1 &
echo $! > app.pid
```

To use it/restart server:
```bash
./restart.sh
```

Can be tied to system service to run on startup. 