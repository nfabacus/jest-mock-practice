const HelloLambda = require('./HelloLambda');
const UsersLambdaCallback = require('./UsersLambdaCallback');
const UsersLambdaPromise = require('./UsersLambdaPromise');

test('Hello, Lambda', () => {
  const response = HelloLambda.handler();
  expect(response).toEqual('Hello, world!');
});

test('UsersLambda with Callback', (done) => {
  expect.assertions(1);
  const callback = (res => {
    expect(res.username).toEqual('Bret');
    done();
  });
  const response = UsersLambdaCallback.handler(null, null, callback);
});

test('UsersLambda with Promise::Async Await', async () => {
  expect.assertions(1);
  const res = await UsersLambdaPromise.handler(null, null, null);
  expect(res.username).toEqual('Bret');
});

test('UsersLambda with Promise::then', () => {
  expect.assertions(1);
  const res = UsersLambdaPromise.handler(null, null, null);
  return res.then(response => { // VERY VERY IMPORTANT TO 'return' here. Otherwise, it does not work.
    expect(response.username).toEqual('Bret');
  })
});