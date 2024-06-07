var url = 'http://mylogger.io/log'

function log(message) {
    // Send an HTTP request
    console.log(message)
}

// module.exports.log = log; // this way we can export many things 
module.exports = log; // if we want to export just one thing from a module.
// module.exports.endPoint = url; // private to module

// console.log(module)