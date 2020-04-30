// event emit
var events = require('events');

// get util module so we can inherit
var util = require('util');

// Create a Person object
var Person = function(name) {
	this.name = name;
};

// Let Person inherit from events.EventEmitter
util.inherits(Person, events.EventEmitter);

// Create three Person instance
var tommy = new Person('tommy');
var mary = new Person('mary');
var laker = new Person('laker');
var people = [ tommy, mary, laker ];

people.forEach((person) => {
	person.on('speak', (msg) => {
		console.log(`${person.name} said: ${msg}`);
	});
});

tommy.emit('speak', 'hello');
