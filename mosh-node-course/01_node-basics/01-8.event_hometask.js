const EventEmitter = require('node:events');
const emitter = new EventEmitter();


emitter.on('logging', (arg) => {
    const now = new Date();
    console.log(`${now.toDateString()} ${now.toTimeString()}: ${arg.data}`)
})
emitter.emit('logging', {data: 'This is THE message'});
