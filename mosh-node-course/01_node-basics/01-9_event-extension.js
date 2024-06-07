const EventEmitter = require('node:events');
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log'

function log(message) {
    console.log(message)
    emiter.emit('messageLogged', {id: 1, url: 'http://...'});
}

module.exports = log; // if we want to export just one thing from a module.
