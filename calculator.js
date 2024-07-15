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
    document.querySelector("#coma").disabled = false;
}

function updateDisplay(operand) {
    result.textContent = operand.toString().substring(0, 12);
}

let firstOperand = "";
let firstOperandReady = false;
let secondOperand = "";
let operator = "";

const result = document.querySelector("#result");

let btnMenu = document.querySelector(".button-space");
btnMenu.addEventListener("click", (event) => {
    let target = event.target;
    
    if(firstOperandReady === false) {
    switch(target.id){
        case "one":
            firstOperand += "1";
            updateDisplay(firstOperand);
            break;
        case "two":
            firstOperand += "2";
            updateDisplay(firstOperand);
            break;
        case "three":
            firstOperand += "3";
            updateDisplay(firstOperand);
            break;
        case "four":
            firstOperand += "4";
            updateDisplay(firstOperand);
            break;
        case "five":
            firstOperand += "5";
            updateDisplay(firstOperand);
            break;
        case "six":
            firstOperand += "6";
            updateDisplay(firstOperand);
            break;
        case "seven":
            firstOperand += "7";
            updateDisplay(firstOperand);
            break;
        case "eight":
            firstOperand += "8";
            updateDisplay(firstOperand);
            break;
        case "nine":
            firstOperand += "9";
            updateDisplay(firstOperand);
            break;
        case "zero":
            firstOperand += "0";
            updateDisplay(firstOperand);
            break;
        case "coma":
            firstOperand += ".";
            updateDisplay(firstOperand);
            document.querySelector("#coma").disabled = true;
            break;
        case "plus":
            operator = "+";
            firstOperandReady = true;
            document.querySelector("#coma").disabled = false;
            break;
        case "minus":
            if(firstOperand==="") {
                firstOperand += "-"
                updateDisplay(firstOperand);
                break;
            } else {
            operator = "-";
            firstOperandReady = true;
            document.querySelector("#coma").disabled = false;
            break;
            }
        case "times":
            operator = "*";
            firstOperandReady = true;
            document.querySelector("#coma").disabled = false;
            break;
        case "divide":
            operator = "/";
            firstOperandReady = true;
            document.querySelector("#coma").disabled = false;
            break;
        case "clear":
            clearValues();
            break;
        case "backspace":
            let slicedFirstOperand = firstOperand.slice(0, -1); 
            firstOperand = slicedFirstOperand;
            updateDisplay(firstOperand);
            break;
        case "percent":
            result.textContent = `${firstOperand}%`.substring(0, 12);
            firstOperand += "e-2";
            break;
        
    }} else if(firstOperandReady === true) {
    switch(target.id){
        case "one":
            secondOperand += "1";
            updateDisplay(secondOperand);
            break;
        case "two":
            secondOperand += "2";
            updateDisplay(secondOperand);
            break;
        case "three":
            secondOperand += "3";
            updateDisplay(secondOperand);
            break;
        case "four":
            secondOperand += "4";
            updateDisplay(secondOperand);
            break;
        case "five":
            secondOperand += "5";
            updateDisplay(secondOperand);
            break;
        case "six":
            secondOperand += "6";
            updateDisplay(secondOperand);
            break;
        case "seven":
            secondOperand += "7";
            updateDisplay(secondOperand);
            break;
        case "eight":
            secondOperand += "8";
            updateDisplay(secondOperand);
            break;
        case "nine":
            secondOperand += "9";
            updateDisplay(secondOperand);
            break;
        case "zero":
            secondOperand += "0";
            updateDisplay(secondOperand);
            break;
        case "coma":
            secondOperand += ".";
            updateDisplay(secondOperand);
            document.querySelector("#coma").disabled = true;
            break;
        case "clear":
            clearValues();
            break;
        case "backspace":
            let slicedSecondOperand = secondOperand.slice(0, -1); 
            secondOperand = slicedSecondOperand;
            updateDisplay(secondOperand);
            break;
        case "percent":
            result.textContent = `${secondOperand}%`.substring(0, 12);
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
            result.textContent = equalsTo.toString().substring(0, 12);
            firstOperand = equalsTo;
            firstOperandReady = true;
            secondOperand = "";
            operator = "";
            break;
            }
    }} 
})