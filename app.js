// Read and Write files (fs)
var fs = require('fs');

// Now let's remove file and directory.
// We can't remove directory if it is not empty
fs.rmdir('stuff', (err) => {
	console.log('remove directory successfully');
});
