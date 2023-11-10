//---------- ARITHMETIC ----------//

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