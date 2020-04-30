// Read and Write files (fs)
var fs = require('fs');

// Remember, whatever you want to make or delete directory, read or write file, you need to get the right path, relative path usually.
// We didn't write path but only file name before is because the files are in same directory, so we didn't need relative path.
// But we are making file inside another directory now, relative paht is needed.
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
