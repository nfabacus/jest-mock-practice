const helloStr = process.env.NODE_ENV === 'test' ? require('./HelloStrMock') : require('./HellStr');
exports.handler = (event, context, callback) => {
  return helloStr;
};