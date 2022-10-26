# Switcheo Labs Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running

Install dependencies and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

Build the production application in the `.next` folder, then start the application in production mode:

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To change ports, use `yarn start -p <PORT>`.

## Deploying

### From instance

SSH into the prod instance and deploy using PM2:

```bash
ssh switcheo-website
cd /var/www/switcheo-website/current
git pull
yarn build
PM2_NAME=production pm2 startOrRestart ecosystem.config.js --env production
```
