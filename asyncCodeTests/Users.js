// users.js
const fetch = require('node-fetch');

class Users {
  getUser(callback) {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => callback(json));
  }
}

module.exports = Users;