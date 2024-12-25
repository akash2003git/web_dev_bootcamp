const PI = 3.14;
const square = (x) => x * x;
const cube = (x) => x * x * x;

// module.exports is an object
// use "exports" keyword to refer to module.exports
// exports.PI = PI

// Method 1
module.exports.PI = PI;
module.exports.square = square;
module.exports.cube = cube;

// Method 2
// const math = {
//   PI: PI,
//   square: square,
//   cube: cube,
// };
// module.exports = math;

// Method 3
// module.exports.square = (x) => x * x;
