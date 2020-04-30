// Or we can do this way, because anyway we need to export them, don't we?
module.exports.counter = function(arr) {
	return `there are ${arr.length} elements in this array`;
};

module.exports.adder = function(a, b) {
	return a + b;
};
module.exports.pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
