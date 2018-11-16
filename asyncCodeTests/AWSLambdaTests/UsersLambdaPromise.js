// // usersLambdaPromise.js
exports.handler = (event, context, callback) => {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
};
