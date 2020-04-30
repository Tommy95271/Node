// Read and Write files (fs)
var fs = require('fs');

// This function is Synchronous, which will hold the program before finishing executing
var readMe = fs.readFileSync('readMe.txt', 'utf-8');
console.log(readMe);
