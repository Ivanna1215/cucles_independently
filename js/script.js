'use strict'
function amountNumber() {
    let i = +prompt('Input your OneNum');
    let j = +prompt('Input your twoNUm');
    let result = 0;
    i++;
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
function numberOfnumbers () {
    let num = prompt ('Input your number'); 
    if (num<0) {
        alert (`amount number  ${num.length-1}`)
    } else {
        alert (`amount number  ${num.length}`);
    }
}


function nSD () {
    let a = +prompt ('Input your first num');
    let b = +prompt ('Input your  second num');
  while (b>0){
        if (a>b) {
           console.log (a = a-b);
        } else  {
            console.log (b = b-a);
        }
    }
    alert (`NSD ${a}`);
    console.log ('NSD',a);
    
}


function statistics () {
    let num;
    let positive = 0 ;
    let negative = 0;
    let nUll = 0;
    let result = '';
for (let i = 1; i<=10; i++) {
     num = +prompt ('Input your number');
     if (num === 0) {
nUll+=1;
     } else if (num>0){
         positive+=1;
     } else if (num<0) {
         negative+=1;
     }
}
alert (`Your result positive - ${positive}
negative - ${negative}
null - ${nUll}`)
}

function multiplicationTable() {
    let result = '';
    for (let i = 2; i<=9; i++) {
        for (let j=1; j<=9; j++){
            result = i +"x"+ j + '='+ i*j;
            console.log (result);
        }
        console.log ('');
    }

}
 function calculator () {
     let yes;
     let result;
     let a;
     let b;
     let operator;
     do {
        a = +prompt ('Input your first num');
        b = +prompt ('Input your  second num');
        operator = prompt('Input your operator: + ; - ; * ; /;');
        switch (operator) {
            case '+':
                result = a + b;
                console.log (result);
                break;
                default:
                    console.log ('Error');
        }
        yes = confirm ("Continue?")
    }
while (yes) 

     }

   
   