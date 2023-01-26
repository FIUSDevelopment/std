let debug: number, logs1: boolean|undefined|null;
import getTime from './getTime.js';
import log from './log.js';
export default class createCout {
    constructor (debugLevel: number, logs?: boolean) {
        if (!debugLevel) debugLevel = 0;
        if (!logs) logs = false;
        debug = debugLevel;
        logs1 = logs;
    }

    cout (string: string, debugLevel?: number) {
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