import readlineSync from '@thundernetworkrad/readline-sync';

export default (question: string, hide: boolean) => {
    return new Promise((resolve) => {
        try {
            let answer: string = readlineSync.question(`${question} `, {
                hideEchoBack: hide || false
            })
            return resolve(answer);
        } catch (e) {
            console.log(e)
            return resolve('error');
        }
    })
};