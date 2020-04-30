// The function is inside counter.js.
var counter = function(arr) {
	return `there are ${arr.length} elements in this array`;
};

// The way to export the counter is doing like below, you need to let module.exports the function
module.exports = counter;
