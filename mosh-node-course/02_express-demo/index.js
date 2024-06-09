const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const logger = require('./middleware/logger');
const auth = require('./middleware/authenticator');
const courses = require('./routes/courses');
const posts = require('./routes/posts');
const main = require('./routes/main');
const express = require('express');
const helmet = require('helmet'); // https://github.com/helmetjs/helmet
const morgan = require('morgan'); // log http requests https://expressjs.com/en/resources/middleware/morgan.html 
const app = express() // there is a convention to call APP what the express module returns
// for configuration enviroment we could use npm packages: "rs" and "config". 
// "rs" is more popular, but "config" is preferrable for Mosh

// app.get();
// app.post();
// app.put();
// app.delete();

// "pug" npm package is used for return html to client instead of json
app.set('view engine', 'pug'); // we don't need to require it, we just use this line. 
app.set('views', './views'); // default

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // if NODE_ENV is unset then process.env.NODE_ENV returns undefined
// console.log(`app: ${app.get('env')}`); // if NODE_ENV is unset then app.get('env') returns "development" by default

app.use(express.json()); // adding a piece of middleware 
// if req is a json object it parse it as a json and returns it in req.body

app.use(express.urlencoded({extended: true})); // key=value&key=value in requests
app.use(express.static('public')); // provide access to static content from root of the website.
app.use(helmet());
app.use('/api/courses', courses);
app.use('/api/posts', posts);
app.use('/', main);

// custom middlware function
app.use(logger);
app.use(auth);

// Configuration
console.log(`Application name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail Password: ${config.get('mail.password')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
    }

// DB work... 
dbDebugger('Connected to the database...'); // console.log()



// enviroment variables
// PORT
const port = process.env.PORT || 5000; // 
app.listen(port, () => console.log(`Listening on port ${port}...`));