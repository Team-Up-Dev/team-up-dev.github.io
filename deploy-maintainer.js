const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'gh-pages',
  repo : 'https://github.com/Team-Up-Dev/team-up-dev.github.io.git'
}, (err) => (err) && console.log(err));
