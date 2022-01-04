'use strict'
function amountNumber() {
    let i = +prompt('Input your OneNum');
    let j = +prompt('Input your twoNUm');
    let result = 0;
for (i;i<j;i++) {
    result = result + i;
}
alert (`Your result is ${result}`);

}

function num () {
    let num =+prompt ('Input your number');
    let result = 'Your result is';
    if (num<1) {
        alert ('Error')
    } else {
        for (let i = 1; i<=num; i++) {
            if (num % i === 0) {
                result = `${result} ${i}; `
            }
             }
             alert (result);
            
    }


}

