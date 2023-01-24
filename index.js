const { appendFile, existsSync } = require('node:fs');
const { mkdir } = require('node:fs/promises')
var readlineSync = require('readline-sync');
var debug, logs1;

let time = getTime()
const name = `${time.year}.${time.month}.${time.day}.${time.hours}.${time.minutes}.${time.seconds}.log`;

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

function log (string) {
    if (!existsSync('./logs')) mkdir('./logs', { recursive: true });
    appendFile(`./logs/${name}`, string+'\n', err => {
        if (err) {
            throw err
        }
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

class createCout {
    constructor (debugLevel, logs) {
        if (!debugLevel) debugLevel = 0;
        if (!logs) logs = false;
        debug = debugLevel;
        logs1 = logs;
    }

    cout (string, debugLevel) {
        if (!debugLevel) debugLevel = 0;
        var time = getTime();

        if (debug >= debugLevel) {
            console.log(`[${time.year}.${time.month}.${time.day}-${time.hours}:${time.minutes}:${time.seconds}] | ${String(string)}`);
            if (logs1) {
                log(`[${time.year}.${time.month}.${time.day}-${time.hours}:${time.minutes}:${time.seconds}] | ${String(string)}`);
            }
        }
        return;
    };
}

module.exports = { cin, createCout, log };
