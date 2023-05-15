const display = document.querySelector('.answer');
const buttons = document.querySelectorAll('button');

let currentNumber = '0';
let previousNumber = '';
let operator = '';
let flag = false;

// Function to update the display with the current number
function updateDisplay() {
    display.textContent = currentNumber;
}

// Function to handle number button clicks
function handleNumberClick(value) {
    if (currentNumber === '0' || flag === true) {
        currentNumber = value.toString();
        flag = false;
    } else {
        currentNumber += value.toString();
    }
    updateDisplay(currentNumber);
}
  
// Function to handle operator button clicks
function handleOperatorClick(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '0';
}

// Function to perform the calculation
function calculate() {
    console.log(operator);
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result = 0;

    if (operator === '+') {
        result = prev + current;
    } else if (operator === '-') {
        result = prev - current;
    } else if (operator === 'x') {
        result = prev * current;
    } else if (operator === '/') {
        result = prev / current;
    }

    currentNumber = result.toString();
    operator = '';
    previousNumber = '';
    updateDisplay();
}

// Function to handle the equal button click
function handleEqualClick() {
    flag = true;
    calculate();
}

// Function to handle the clear button click
function handleClearClick() {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function handlePercentClick() {
    currentNumber = currentNumber / 100;
    updateDisplay(); 
}

function handleStatusClick() {
    if (currentNumber > 0) {
        currentNumber -= currentNumber * 2;
    } else if (currentNumber < 0) {
        currentNumber += currentNumber * 2;
    }
    
    updateDisplay();
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        if (id === '1' || id === '2' || id === '3' || id === '4' || id === '5' || id === '6' || id === '7' || id === '8' || id === '9' || id === '0') {
            const value = parseInt(id);
            console.log(value);
            handleNumberClick(value);
        } else if (id === '+' || id === '-' || id === 'x' || id === '/') {
            handleOperatorClick(id);
        } else if (id === 'equal') {
            handleEqualClick();
        } else if (id === 'C') {
            handleClearClick();
        } else if(id === '%') {
            handlePercentClick();
        } else if(id === 'status') {
            handleStatusClick();
        }
    });
});
  

// Initial display update
updateDisplay();
