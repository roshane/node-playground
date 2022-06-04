import * as fs from "fs";
import * as util from "util";

const chalk = require('chalk');

const readFile = util.promisify(fs.readFile);

class Customer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    doSomething(){
        console.log('hello I am');
    }
}

console.log(new Customer('roshane',23))

readFile('conf/application.conf')
    .then((data) => {
        console.log(chalk.cyan('file data', String(data)));
    })
    .catch((err) => {
        console.error('Error reading file ', err);
    })
