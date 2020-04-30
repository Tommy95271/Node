// Read and Write files (fs)
var fs = require('fs');

// This function is synchronous, which will hold the program before finishing executing
var readMe = fs.readFileSync('readMe.txt', 'utf-8');
console.log(readMe);

// This function will write file synchronously, the second argument is for data.
fs.writeFileSync('writeMe.txt', readMe);
