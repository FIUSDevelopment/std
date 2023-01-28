import readlineSync from '@thundernetworkrad/readline-sync';
/**
 * 
 * @param question what question you need to make?
 * @param hide is the question private?
 * @returns 
 */
function cin (question: string, hide: boolean) {
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

export default cin;