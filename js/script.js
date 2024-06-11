
/*

let num1=prompt("Enter the first numer");
let num2=prompt("Enter the second number");

if (num1 > num2)
 {
    alert ("The largest of the two number is " + num1);
}
else (num2 > num1)
 {
    alert ("The largest of the two number is " + num2);
}


let number1 = prompt("Introduce a number");
alert( isEvenOddNumer (number1));

function isEvenOddNumber(x) {
    let res = x % 2;
    let msg = "";
if (res == 0){
    msg = "It's an even number";
} else {
    msg + "It's an odd number";
}
return msg;
    
}

 alert (Math.abs(-10));


const MAX = 10;

let counter = 1;

while ( counter <= MAX){
    console.log("Hello World!" + counter);
    counter++;
}
*/

const RIGHT_NUMBER = 8;

let number1 = 0;
do {
    number1 = prompt("Give me a number from 1 to 10");
    number1 = parseInt(number1);

} while (number1 != RIGHT_NUMBER)
console.log("you are right")

