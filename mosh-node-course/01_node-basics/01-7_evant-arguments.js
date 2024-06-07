const EventEmitter = require('node:events'); //class
const emiter = new EventEmitter(); // instance, object

// Register a listener
emiter.addListener('messageLogged', (arg) => { // , arg, e - event, eventArg - 
    console.log('Listener called', arg);
})

// Raise an event
emiter.emit('messageLogged', {id: 1, url: 'http://...'}); // second - is an event argument - the data passed to event.


