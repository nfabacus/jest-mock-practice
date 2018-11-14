const sum = require('./sum');

test('1 +2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2+2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// if(null) { console.log("truthy") } else { console.log("falsy") }

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Numbers
// Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Strings
// You can check strings against regular expressions with toMatch:
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// Arrays
// You can check if an array contains a particular item using toContain:
const shoppingList = [
  'apple',
  'banana',
  'strawberry',
  'carrot'
];

test('the shopping list has carrot on it', () => {
  expect(shoppingList).toContain('carrot');
});
// Exceptions
// If you want to test that a particular function throws an error when it's called, use toThrow.
const doSomething = () => {
  throw new Error('YOu are using the wrong JDK.');
};

test('doSomething function throws an error', () => {
  expect(doSomething).toThrow();
  expect(doSomething).toThrow(Error);
  expect(doSomething).toThrow('YOu are using the wrong JDK.');

});

