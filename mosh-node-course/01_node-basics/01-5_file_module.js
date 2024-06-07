const fs = require('node:fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('$',function(error, files){
    if (error) console.log('Error', error);
    else console.log('Result', files);
});