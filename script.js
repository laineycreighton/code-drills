//********** ARITHMIC **********//

//----- ADD -----//

// VARIABLES //
var num1 = 5;
var num2 = 10;

// FUNCTION //
function add() {
    var sum = num1 + num2;
    console.log("Addition:");
    console.log(sum);
    return sum;
};

// DISPLAY ANSWER //
const arithmetic1 = document.getElementById('arithmetic1');
arithmetic1.textContent = add();



//----- SUBTRACT -----//

// VARIABLES //
var num1 = 50;
var num2 = 10;

// FUNCTION //
function subtract() {
    var difference = num1 - num2;
    console.log("Subtraction:");
    console.log(difference);
    return difference;
};

// DISPLAY ANSWER //
const arithmetic2 = document.getElementById('arithmetic2');
arithmetic2.textContent = subtract();



//----- MULTIPLY -----//

// VARIABLES //
var num1 = 25;
var num2 = 4;

// FUNCTION //
function multiply() {
    var product = num1 * num2;
    console.log("Multiplication:");
    console.log(product);
    return product;
};

// DISPLAY ANSWER //
const arithmetic3 = document.getElementById('arithmetic3');
arithmetic3.textContent = multiply();



//----- DIVIDE -----//

// VARIABLES //
var num1 = 100;
var num2 = 4;

// FUNCTION //
function divide() {
    var quotient = num1 / num2;
    console.log("Division:");
    console.log(quotient);
    return quotient;
};

// DISPLAY ANSWER //
const arithmetic4 = document.getElementById('arithmetic4');
arithmetic4.textContent = divide();





//********** ODD OR EVEN **********//

// VARIABLES //
var num = 10;

// FUNCTION //
function oddOrEven() {
    if (num % 2 === 0) {
        console.log("Odd or Even:");
        return 'Even';
    } else {
        return 'Odd';
    }
};

// DISPLAY ANSWER //
const oddEven = document.getElementById('oddeven');
oddEven.textContent = oddOrEven();





//********** Log Nums **********//

// VARIABLES //
var num = 10;

// FUNCTION //
function logNums() {
    var allNums = [];
    for (i = 1; i <= num; i++){
        allNums.push([i]);
        console.log('Log Nums:');
    } return allNums;
};

// DISPLAY ANSWER //
const logNumsAnswer = document.getElementById('lognums');
logNumsAnswer.textContent = logNums();