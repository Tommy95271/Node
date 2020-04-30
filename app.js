// Then reuqire everything from the file
var stuff = require('./stuff');

// Now you can use the functions inside other files
console.log(stuff.counter([ 'go', 'og', 'gdo' ]));
console.log(stuff.adder(3, 6));
console.log(stuff.adder(stuff.pi, 3));
