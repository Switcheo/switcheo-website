# Switcheo Website

The Switcheo website, built using server-side rendered react.

## Installation

1. `yarn` install dependencies
2. `yarn build` bundle production version into `./build`
3. `node build/` to execute node on the build folder.

## Configuration

### Server Port

To run server on a different port from default `3000`, you can either update the `.env` environment file or run with environment variables. e.g. to run on port 80:

1. `.env` file:

    ```bash
    PORT=80
    ```

2. Run with environment variables, in the shell:

    ```bash
    PORT=80 node build/
    ```

### Robots TXT

The `robots.txt` ([RFC pending](https://tools.ietf.org/html/draft-koster-rep-00)) is set to allow all. Update the [file](./public/robots.txt) if necessary.

```bash
./public/robots.txt
```

### Contentful

1. Update contentful credentials at `.env`.
2. Entire content is cached for 15 seconds before expiring, can be changed at `.env`.
3. Content freshness check occurs **after** every request.

## Deployment

1. Install pm2 locally on your deployment machine:

    ```bash
    # On local / CI machine:
    npm install pm2@latest -g
    ```

2. If you are deploying to a new environment / host, first run:

    ```bash
    # On local / CI machine:
    pm2 deploy ecosystem.config.js <environment> setup # setup pm2 on remote server
    ```

3. Deploy the code:

    ```bash
    # On local / CI machine:
    pm2 deploy ecosystem.config.js production # or <environment>
    ```
