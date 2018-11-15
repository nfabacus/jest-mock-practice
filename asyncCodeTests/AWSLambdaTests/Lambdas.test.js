const HelloLambda = require('./HelloLambda');
const UserLambda = require('./UsersLambda');

test('Hello, Lambda', () => {
  const response = HelloLambda.handler();
  expect(response).toEqual('Hello, world!');
});

test('UsersLambda', () => {
  const response = UsersLambda.hander(callback);
  console.log(response);
});