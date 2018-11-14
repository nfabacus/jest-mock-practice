// Testing Asynchronous Code

// 1. Testing Callbacks
const fetchData = (callback) => {
  //....
  callback('peanut butter');
};

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});


// 2. Testing Promises
const successCall = () => {
  return new Promise((resolve, reject) => {
    console.log("Calling api!");
    setTimeout(()=> resolve("Hello, world!"), 2000);
  })
};

const failureCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject("Error!!!");
    }, 2000);
  });
};

test('the data is Hello, world!', () =>{
  expect.assertions(1); // check if the assertion (expect...) is actually called. Otherwise, it will not fail.
  return successCall().then(data => { // make sure to return the call to make the test work.
    expect(data).toBe('Hello, world!');
  });
});

test('the data will resolve with Hello, world!', () =>{
  expect.assertions(1); // check if the assertion (expect...) is actually called. Otherwise, it will not fail.
  return expect(successCall()).resolves.toBe("Hello, world!");
});

test('call will fail', () => {
  expect.assertions(1);
  return expect(failureCall()).rejects.toMatch('Error!!!')
});


// 3. Async/Await
test('async/await:::success case 1. the data is Hello, world!', async () => {
  expect.assertions(1);
  const data = await successCall();
  expect(data).toBe('Hello, world!');
});

test('async/await:::success case 2. the data is Hello, world!', async () => {
  expect.assertions(1);
  await expect(successCall()).resolves.toBe('Hello, world!');
});


test('async/await:::fail case 1.', async()=> {
  let data;
  try {
    data = await failureCall()
  } catch(err) {
    expect(err).toMatch('Error!!!');
  }
});

test('async/await:::fail case 2.', async () => {
  expect.assertions(1);
  await expect(failureCall()).rejects.toMatch('Error!!!');
});


