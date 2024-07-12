function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstOperand;
let secondOperand;
let operator;

function operate(num1, num2, operation) {
    switch(operation) {
        case adding:
            return add(num1, num2);
            break;
        case subtraction:
            return subtract(num1, num2);
            break;
        case multiplication:
            return multiply(num1, num2);
            break;
        case division:
            return divide(num1, num2);
            break;
    }
}