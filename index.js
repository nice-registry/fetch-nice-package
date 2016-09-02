require('use-strict');

const registryUrl = require('registry-url')();
const fetch = require('isomorphic-fetch');
const Package = require('nice-package');

module.exports = moduleName => {
  return fetch(`${registryUrl}${moduleName}`)
    .then(resp => resp.json())
    .then(pkgInfo => new Package(pkgInfo));
}
