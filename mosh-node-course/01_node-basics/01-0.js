// function sayHello(){
//     console.log('Hello');
// }

// // sayHello();


// console.log(window)

// in a browser (Chrome for example), console.log, setTimeout, clearTimeout, setInterval, clearInterval - are part of window

// vars are ALSO part of window. 
// var message = ''; console.log(window.message) // output ''
// window.console.log('') // correct

// in node we don't have window. We have "global"
// onsole.log, setTimeout etc are part of global
// vars are not!
// var message = '';
// console.log(global.message); // undefined

// ------- ========== ---------

// MODULE
// console.log(module);

// Load module 
// require('') - function in NODE to load a module! we don't have this in browsers

const logger = require('./01-1.logger'); // use const when import modele instead of var. To prevent overriding the value.

console.log(logger);

logger('message1')

// jshint - a tool to scan code of a file for errors.
