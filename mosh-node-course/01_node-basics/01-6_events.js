// https://nodejs.org/docs/latest/api/events.html
// class eventEmiter

const EventEmitter = require('node:events'); //class
const emiter = new EventEmitter(); // instance, object

// Register a listener
emiter.addListener('messageLogged', function(){
    console.log('Listener called');
})

// Raise an event
emiter.emit('messageLogged');
// emit - Making a noise, signaling

// order IS important!