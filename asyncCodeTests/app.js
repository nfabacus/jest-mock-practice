const math = require('./math');

module.exports.doAdd      = (a, b) => math.add(a, b);
module.exports.doSubtract = (a, b) => math.subtract(a, b);
module.exports.doMultiply = (a, b) => math.multiply(a, b);
module.exports.doDivide   = (a, b) => math.divide(a, b);