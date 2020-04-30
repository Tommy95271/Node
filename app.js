// event emit
var events = require('events');

// create new event
var myEmitter = new events.EventEmitter();

// similar to jQuery, but you can define your own event instead of using click or keyup etc.
myEmitter.on('event', function(msg) {
	console.log(msg);
});

// emit the emitter with your event and the msg
myEmitter.emit('event', 'this is a new file');
