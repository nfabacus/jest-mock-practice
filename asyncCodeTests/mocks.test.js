const Users = require('./Users');

// test API wuthout mock
test('test a get call', () => {
  const myUser = new Users();
  const callback = (json) => {
    expect.assertions(1);
    expect(json).toEqual({"address": {"city": "Gwenborough", "geo": {"lat": "-37.3159", "lng": "81.1496"}, "street": "Kulas Light", "suite": "Apt. 556", "zipcode": "92998-3874"}, "company": {"bs": "harness real-time e-markets", "catchPhrase": "Multi-layered client-server neural-net", "name": "Romaguera-Crona"}, "email": "Sincere@april.biz", "id": 1, "name": "Leanne Graham", "phone": "1-770-736-8031 x56442", "username": "Bret", "website": "hildegard.org"});
  };
  myUser.getUser(callback)
});

// toHaveBeenCalled ...
test("returns undefined by default", () => {
  const mock = jest.fn();

  let result = mock("foo");

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
});

// and we can change the return value, implementation, or promise resolution:
test("mock implementation", () => {
  const mock = jest.fn(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation one time", () => {
  const mock = jest.fn().mockImplementationOnce(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");

  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock promise resolution", () => {
  const mock = jest.fn();
  mock.mockResolvedValue("bar");

  expect(mock("foo")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

// Dependency injection - use callback to get response
const doAdd = (a, b, callback) => {
  callback(a + b);
};

test("calls callback with arguments added", () => {
  const mockCallback = jest.fn();
  doAdd(1, 2, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(3);
});

