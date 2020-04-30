// Read and Write files (fs)
var fs = require('fs');

// delete file by unlink, but it is asynchronous, so it needs callback function
fs.unlink('writeMe.txt');
