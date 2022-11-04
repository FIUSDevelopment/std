const { writeFile, readFile, mkdir } = require('node:fs/promises');
const { stdin, stdout } = require('node:process');
var readlineSync = require('@fiusdevelopment/readline');
var name;

function getTime () {
    const date_time = new Date();
    const year = date_time.getFullYear();
    const month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    const day = ("0" + date_time.getDate()).slice(-2);
    const hours = date_time.getHours();
    const minutes = date_time.getMinutes();
    const seconds = date_time.getSeconds();
    return({year, month, day, hours, minutes, seconds})
};

function createLog () {
    mkdir('./logs', { recursive: true });
    var time = getTime();
    name = `${time.year}.${time.month}.${time.day}.${time.hours}.${time.minutes}.${time.seconds}.log`;
    writeFile(`./logs/${name}`, '');
    return(name)
};

function log (string) {
    readFile(`./logs/${name}`, 'utf8')
    .then(async (err, data) => {
        if (!data) data = '';
        data += string + '\n';
        writeFile(`./logs/${name}`, data);
    })
};

function cin (question, hide) {
    return new Promise((resolve, reject) => {
        try {
            var answer = readlineSync.question(`${question} `, {
                hideEchoBack: hide || false
            })
            return resolve(answer);
        } catch (e) {
            console.log(e)
            return resolve('error');
        }
    })
};

async function cout (string) {
    var time = getTime();
    string = `[${time.year}.${time.month}.${time.day}-${time.hours}:${time.minutes}:${time.seconds}] | ${String(string)}`
    console.log(string);
    log(string);
};

module.exports = { cin, cout, createLog, log };
