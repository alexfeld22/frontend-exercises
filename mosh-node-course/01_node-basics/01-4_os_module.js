/**
 * os.freemem() - free memory
 * os.totalmem() - total memory
 * 
 */

const os = require('node:os'); 

var totalMemory = os.totalmem()/(1000000*1024);
var freeMemory = os.freemem()/(1000000*1024);

console.log(`Total memory: ${totalMemory}Gb` );
console.log(`Free memory: ${freeMemory}Gb` );