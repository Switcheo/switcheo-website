module.exports = {
  apps: [{
    name: "switcheo-website-" + process.env.PM2_NAME,
    ...process.env.PM2_NAME === "production" && {
      script: 'build/index.js',
    },
    ...process.env.PM2_NAME === "staging" && {
      script: 'yarn',
      args: 'start',
    },
    args: 'start',
    instances: "max",
    exec_mode: "cluster",
    node_args: [
      "--max_old_space_size=4096"
    ],
    env_production: {
      "PORT": 5000,
      "ENV": "production",
      "NODE_ENV": "production"
    },
    env_staging: {
      "PORT": 4000,
      "ENV": "production",
      "NODE_ENV": "production"
    },
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'switcheo-website',
      ref: 'origin/master',
      repo: 'git@github.com:Switcheo/switcheo-website.git',
      path: '/var/www/switcheo-website',
      'pre-deploy-local': '',
      'pre-setup': 'sudo npm install pm2@latest -g; sudo npm install yarn -g; ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts;',
      'post-deploy': 'yarn install && yarn build && cp ~/.contentful.env /var/www/switcheo-website/current/.env && PM2_NAME=production pm2 startOrRestart ecosystem.config.js --env production',
    },
    staging: {
      user: 'ubuntu',
      host: 'switcheo-website',
      ref: 'origin/staging',
      repo: 'git@github.com:Switcheo/switcheo-website.git',
      path: '/var/www/switcheo-website-staging',
      'pre-deploy-local': '',
      'pre-setup': 'sudo npm install pm2@latest -g; sudo npm install yarn -g; ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts;',
      'post-deploy': 'yarn install && yarn build && cp ~/.contentful.env /var/www/switcheo-website-staging/current/.env && PM2_NAME=staging pm2 startOrRestart ecosystem.config.js --env staging',
    }
  }
};
