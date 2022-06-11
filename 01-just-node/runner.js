require('dotenv').config();
const process = require('process');


// require("@babel/register");
require('./target/App')

console.log('env',process.env['NODE_ENV']);