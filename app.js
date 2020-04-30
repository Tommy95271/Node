// Read and Write files (fs)
var fs = require('fs');

var readMe = fs.readFile('readMe.txt', 'utf-8');
console.log(readMe);
