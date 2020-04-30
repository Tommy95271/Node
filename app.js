// Read and Write files (fs)
var fs = require('fs');

// Now let's remove file and directory.
fs.rmdir('stuff', () => {
	console.log('remove directory successfully');
});
