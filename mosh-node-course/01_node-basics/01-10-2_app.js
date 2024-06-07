const EventEmitter = require('node:events'); //class

const Logger = require('./01-10-1_logger-v2');
const logger = new Logger();


// Register a listener
logger.addListener('messageLogged', (arg) => { // , arg, e - event, eventArg - 
    console.log('Listener called', arg);
})


logger.log('message222')