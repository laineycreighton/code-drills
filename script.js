//---------- ADD ----------//

// VARIABLES //
var num1 = 5;
var num2 = 10;

// FUNCTION //
function add() {
    var sum = num1 + num2;
    console.log(sum);
    return sum;
};

// CALLING THE FUNCITON //
add(num1, num2);

// DISPLAY ANSWER //
const arithmetic1 = document.getElementById('arithmetic1');
arithmetic1.textContent = add();



//---------- SUBTRACT ----------//

// VARIABLES //
var num1 = 50;
var num2 = 10;

// FUNCTION //
function subtract() {
    var difference = num1 - num2;
    console.log(difference);
    return difference;
};

// CALLING THE FUNCITON //
subtract(num1, num2);

// DISPLAY ANSWER //
const arithmetic2 = document.getElementById('arithmetic2');
arithmetic2.textContent = subtract();



//---------- MULTIPLY ----------//

// VARIABLES //
var num1 = 25;
var num2 = 4;

// FUNCTION //
function multiply() {
    var product = num1 * num2;
    console.log(product);
    return product;
};

// CALLING THE FUNCITON //
multiply(num1, num2);

// DISPLAY ANSWER //
const arithmetic3 = document.getElementById('arithmetic3');
arithmetic3.textContent = multiply();