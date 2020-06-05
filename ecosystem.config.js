module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.',
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
      'post-deploy' : 'yarn install && yarn buld && pm2 startOrRestart ecosystem.json --env production',
    }
  }
};
