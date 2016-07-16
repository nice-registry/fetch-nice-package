require('use-strict');

const registryUrl = require('registry-url')();
const fetch = require('isomorphic-fetch');
const Package = require('nice-package');

module.exports = moduleName => {
  return new Promise((resolve, reject) => {
    return fetch(`${registryUrl}${moduleName}`)
    .then(resp => resp.json())
    .then(pkgInfo => resolve(new Package(pkgInfo)))
    .catch(err => reject(err))
  })
}