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

function clearValues() {
    firstOperand = "";
    secondOperand = "";
    firstOperandReady = false;
    operator = ""
    result.textContent = "";
}

let firstOperand = "";
let firstOperandReady = false;
let secondOperand = "";
let operator = "";

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

const result = document.querySelector("#result");

let btnMenu = document.querySelector(".button-space");
btnMenu.addEventListener("click", (event) => {
    let target = event.target;
    
    if(firstOperandReady === false) {
    switch(target.id){
        case "one":
            firstOperand += "1";
            result.textContent = firstOperand;
            break;
        case "two":
            firstOperand += "2";
            result.textContent = firstOperand;
            break;
        case "three":
            firstOperand += "3";
            result.textContent = firstOperand;
            break;
        case "four":
            firstOperand += "4";
            result.textContent = firstOperand;
            break;
        case "five":
            firstOperand += "5";
            result.textContent = firstOperand;
            break;
        case "six":
            firstOperand += "6";
            result.textContent = firstOperand;
            break;
        case "seven":
            firstOperand += "7";
            result.textContent = firstOperand;
            break;
        case "eight":
            firstOperand += "8";
            result.textContent = firstOperand;
            break;
        case "nine":
            firstOperand += "9";
            result.textContent = firstOperand;
            break;
        case "zero":
            firstOperand += "0";
            result.textContent = firstOperand;
            break;
        case "coma":
            firstOperand += ".";
            result.textContent = firstOperand;
            break;
        case "plus":
            operator = "+";
            firstOperandReady = true;
            break;
        case "minus":
            if(firstOperand==="") {
                firstOperand += "-"
                result.textContent = firstOperand;
                break;
            } else {
            operator = "-";
            firstOperandReady = true;
            break;
            }
        case "times":
            operator = "*";
            firstOperandReady = true;
            break;
        case "divide":
            operator = "/";
            firstOperandReady = true;
            break;
        case "clear":
            firstOperand = "";
            secondOperand = "";
            firstOperandReady = false;
            operator = ""
            result.textContent = "";
            break;
        case "backspace":
            let slicedFirstOperand = firstOperand.slice(0, -1); 
            firstOperand = slicedFirstOperand;
            result.textContent = firstOperand;
            break;
        case "percent":
            result.textContent = `${firstOperand}%`;
            firstOperand += "e-2";
            break;
        
    }} else if(firstOperandReady === true) {
    switch(target.id){
        case "one":
            secondOperand += "1";
            result.textContent = secondOperand;
            break;
        case "two":
            secondOperand += "2";
            result.textContent = secondOperand;
            break;
        case "three":
            secondOperand += "3";
            result.textContent = secondOperand;
            break;
        case "four":
            secondOperand += "4";
            result.textContent = secondOperand;
            break;
        case "five":
            secondOperand += "5";
            result.textContent = secondOperand;
            break;
        case "six":
            secondOperand += "6";
            result.textContent = secondOperand;
            break;
        case "seven":
            secondOperand += "7";
            result.textContent = secondOperand;
            break;
        case "eight":
            secondOperand += "8";
            result.textContent = secondOperand;
            break;
        case "nine":
            secondOperand += "9";
            result.textContent = secondOperand;
            break;
        case "zero":
            secondOperand += "0";
            result.textContent = secondOperand;
            break;
        case "coma":
            secondOperand += ".";
            result.textContent = secondOperand;
            break;
        case "clear":
            clearValues();
            break;
        case "backspace":
            let slicedSecondOperand = secondOperand.slice(0, -1); 
            secondOperand = slicedSecondOperand;
            result.textContent = secondOperand;
            break;
        case "percent":
            result.textContent = `${secondOperand}%`;
            secondOperand += "e-2";
            break;
        case "plus":
            operator = "+";
            firstOperandReady = true;
            break;
        case "minus":
            operator = "-";
            firstOperandReady = true;
            break;
        case "times":
            operator = "*";
            firstOperandReady = true;
            break;
        case "divide":
            operator = "/";
            firstOperandReady = true;
            break;
        case "equals":
            a = parseFloat(firstOperand);
            b = parseFloat(secondOperand); 
            switch(operator) {
                case "+":
                    equalsTo = add(a, b);
                    break;
                case "-":
                    equalsTo = subtract(a, b);
                    break;
                case "*":
                    equalsTo = multiply(a, b);
                    break;
                case "/":
                    equalsTo = divide(a, b);
                    break;
            }
            if(equalsTo === Infinity) {
                alert("You can't divide by 0");
                clearValues();
                break;
            } else {
            result.textContent = equalsTo;
            firstOperand = equalsTo;
            firstOperandReady = true;
            secondOperand = "";
            operator = "";
            break;
            }
    }} 
})