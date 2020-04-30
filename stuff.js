// The function is inside counter.js.
var counter = function(arr) {
	return `there are ${arr.length} elements in this array`;
};

var adder = function(a, b) {
	return a + b;
};
var pi = 3.142;
// The way to export the counter is doing like below, you need to let module.exports the function
module.exports = counter;
