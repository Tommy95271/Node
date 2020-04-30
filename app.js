// Read and Write files (fs)
var fs = require('fs');

// Now let's remove file and directory.
// We can't remove directory if it is not empty
// So let's delete the file inside stuff first
fs.unlink('writeMe.txt', () => {
	console.log('Remove the file successfully!');
	fs.rmdir('stuff', () => {
		console.log('Remove the directory successfully!');
	});
});
