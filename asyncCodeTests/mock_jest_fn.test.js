const app = require("./app");
const math = require("./math");
const Users = require('./Users');

// Mocking with jest.fn
math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test('mock getUser', () => {
  const myUser = new Users();
  myUser.getUser = jest.fn(() => console.log("This is a mock!")); // this replaces the real getUser method with a mock function.
  const callback = (res) => { // real getUser method will run this callback.
    console.log(res);
  };
  myUser.getUser(callback); // real getUser method will not run as it was overwritten by the mock.  The mock will run instead.
  expect(myUser.getUser).toHaveBeenCalled();
});

test('mock getUser - mock return data', () => {
  const myUser = new Users();
  myUser.getUser = jest.fn(() => { return "This is a mock test."}); // this replaces the real getUser method with a mock function.
  const response = myUser.getUser();
  console.log('response >>>', response);
  expect.assertions(2);
  expect(myUser.getUser).toHaveBeenCalled();
  expect(response).toEqual("This is a mock test.");
});

// More common types of mocking as below.
// jest.mock does this automatically for all functions in a module.  See examples.
// jest.spyOn does the same thing but allows restoring the original function.  See examples.



