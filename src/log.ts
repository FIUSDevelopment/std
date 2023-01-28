import { appendFile, existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import getTime from './getTime.js';

let time;
const startTime = getTime();
time = startTime;
const name = `${time.year}.${time.month}.${time.day}.${time.hours}.${time.minutes}.${time.seconds}.log`;

/**
 * 
 * @param string to log
 */
function log (string?: string) {
    if (!existsSync('./logs')) mkdir('./logs', { recursive: true });

    appendFile(`./logs/${name}`, string+'\n', (err: any) => {
        if (err) {
            throw err
        }
    })
};

export default log;