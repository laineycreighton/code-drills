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
add(num1, num2);

// DISPLAY ANSWER //
const arithmetic2 = document.getElementById('arithmetic2');
arithmetic2.textContent = subtract();