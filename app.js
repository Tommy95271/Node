// Read and Write files (fs)
var fs = require('fs');

// Or use synchronous is ok
// Now you deleted writeMe.txt, if you execute app.js again, there'll be error
fs.unlinkSync('writeMe.txt');
