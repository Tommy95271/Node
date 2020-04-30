// There are multiple stuff, how can we export everything?
var counter = function(arr) {
	return `there are ${arr.length} elements in this array`;
};

var adder = function(a, b) {
	return a + b;
};
var pi = 3.14;

// Doing this way is ok, but troublesome
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
