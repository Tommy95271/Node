// Read and Write files (fs)
var fs = require('fs');

// Asynchronous way needs the third argument, which is a callback function, the callback takes two arguments: error and data.
var readMe = fs.readFile('readMe.txt', 'utf-8', function(err, data) {
	console.log(data);
});
fs.writeFile('writeMe.txt', readMe, (err) => {
	if (err) {
		throw err;
	}
	console.log('write file successfully');
});
