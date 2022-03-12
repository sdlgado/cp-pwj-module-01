console.log("hello");

//alert('BINGO!')

/*
const a = 'smoothie';
console.log(a);

const someNumber = 45;
console.log(someNumber);

const age = prompt('What is your age?');

document.getElementById('title').innerHTML = age;
*/

// Numbers

var num1 = 25;

// Increment by 1
num1 += 1;
num1++;

console.log(num1);

// Decrement by 1
num1 -= 1;
num1--;
console.log(num1);

// Divide, multiply, remainder %
console.log(num1 * 6);
console.log(num1 / 6);
console.log(num1 % 6);

// Increment/decrement by 11
num1 += 10;
console.log(num1);

// Functions
// 1. Create a function

function fun() {
    console.log('this is a function');
}

// Call function
fun();

// Create a function that takes in a name and says hello followed by your name
var name = prompt('What is your name?');

function greeting (yourName) {
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}

greeting(name);

function someNumbers(num1,num2) {
    var result = num1 + num2;
    console.log(result);
}

someNumbers(12, 15);
someNumbers('12', 15);
someNumbers('12', '15');