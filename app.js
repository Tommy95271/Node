// Read and Write files (fs)
var fs = require('fs');

// Let's add a directory and a file
// First, make a directoy, remember async way needs callback.
fs.mkdir('stuff', () => {
	// Then read the file readMe.txt and get the data by callback
	fs.readFile('readMe.txt', 'utf8', (err, data) => {
		// Third, write the data into writeMe.txt, but we want it inside stuff directory, then call callback.
		fs.writeFile('./stuff/writeMe.txt', data, (err) => {
			if (err) throw err;
		});
	});
});
