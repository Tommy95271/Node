var counter = function(arr) {
	return `there are ${arr.length} elements in this array`;
};

var adder = function(a, b) {
	return a + b;
};
var pi = 3.14;

// This way is a lot easier, the reason we can do this is because module.exports is an Object, so we can treat it like Object.
module.exports = {
	counter,
	adder,
	pi
};
