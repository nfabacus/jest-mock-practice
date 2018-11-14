const app = require("./app");
const math = require("./math");
const Users = require('./Users');
// Mocking with jest.mock
// jest.mock('...') sets all module functions of the specified file to jest.fn automatically
jest.mock("./math.js");
jest.mock("./Users.js");
// automatically does the below.
// export const add      = jest.fn();
// export const subtract = jest.fn();
// export const multiply = jest.fn();
// export const divide   = jest.fn();

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
  // myUser.getUser = jest.fn(() => console.log("This is a mock!")); // this replaces the real getUser method with a mock function.
  const callback = (res) => {
    console.log(res);
  };
  myUser.getUser(callback); // real getUser method will not run as it was overwritten by the mock.  The mock will run instead.
  expect(myUser.getUser).toHaveBeenCalled();
});