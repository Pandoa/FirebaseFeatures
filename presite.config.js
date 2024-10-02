const promisify = require('util').promisify;
const fs = require('fs');
const readdir = promisify(fs.readdir);

module.exports = {
  async routes() {
    return (await readdir('./docsgen/')).filter(f => f.endsWith('.md')).map(r => '/#/' + r.split('.')[0]);
  },
}