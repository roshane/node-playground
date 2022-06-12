require('dotenv').config();
const process = require('process');


// require("@babel/register");
require('./target/App')

console.log('env',process.env['NODE_ENV']);



// "@types/react": "17.0.20",
// "@types/react-dom": "17.0.9",
// "html-webpack-plugin": "^5.5.0",
// "ts-loader": "^9.3.0",
// "typescript": "^4.7.3",
// "webpack": "5.21.0",
// "webpack-cli": "^4.9.2"