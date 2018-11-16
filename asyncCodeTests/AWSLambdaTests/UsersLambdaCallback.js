// usersLambdaCallback.js
exports.handler = (event, context, callback) => {
  const fetch = require('node-fetch');
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => callback(json));
};
