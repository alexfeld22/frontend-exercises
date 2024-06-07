const EventEmitter = require('node:events'); //class

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log(message) { // function inside a class don't need to use "function" keyword. log here called a "method".
        // Send an HTTP request
        console.log(message)

        // Raise an event
        this.emit('messageLogged', { id: 1, url: url})
    }
}

module.exports = Logger; // export a class instead of a function.
