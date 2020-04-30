// event emit
var events = require('events');

// get util module so we can inherit
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, events.EventEmitter);
