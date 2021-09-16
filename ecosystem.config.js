module.exports = {
  apps : [{
    name: "switcheo-website",
    script: 'build/index.js',
    instances : "max",
    exec_mode : "cluster",
    env_production : {
      "PORT": 5000,
      "ENV": "production",
      "NODE_ENV": "production"
    },
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'switcheo-website',
      ref  : 'origin/master',
      repo : 'git@github.com:Switcheo/switcheo-website.git',
      path : '/var/www/switcheo-website',
      'pre-deploy-local': '',
      'pre-setup' : 'sudo npm install pm2@latest -g; sudo npm install yarn -g; ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts;',
      'post-deploy' : 'yarn install && yarn build && cp ~/.contentful.env /var/www/switcheo-website/current/.env && pm2 startOrRestart ecosystem.config.js --env production',
    },
    staging : {
      user : 'ubuntu',
      host : 'switcheo-website',
      ref  : 'origin/staging',
      repo : 'git@github.com:Switcheo/switcheo-website.git',
      path : '/var/www/switcheo-website-staging',
      'pre-deploy-local': '',
      'pre-setup' : 'sudo npm install pm2@latest -g; sudo npm install yarn -g; ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts;',
      'post-deploy' : 'yarn install && yarn build && cp ~/.contentful.env /var/www/switcheo-website-staging/current/.env && pm2 startOrRestart ecosystem.config.js --env staging',
    }
  }
};
