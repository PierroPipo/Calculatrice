const display = document.getElementById('result');
const acBtn = document.querySelector('.span-four');
const percentBtn = document.getElementById('percent');
const divideBtn = document.getElementById('divide');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const multiplyBtn = document.getElementById('multiply');
const fourBtn = document.getElementById('for');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const subtractBtn = document.getElementById('subtract');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const addBtn = document.getElementById('add');
const zeroBtn = document.getElementById('zero');
const decimalBtn = document.getElementById('decimal');
const equalsBtn = document.querySelector('.span-four:last-child');

let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

function clear() {
    display.value = '0';
    firstOperand = null;
    operator = null;
}

function appendDigit(digit) {
    if (display.value === '0' || shouldResetDisplay) {
        display.value = digit;
        shouldResetDisplay = false;
    } else {
        display.value += digit;
    }
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    firstOperand = Number(display.value);
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    const secondOperand = Number(display.value);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
    }
    display.value = result;
    firstOperand = result;
}

acBtn.addEventListener('click', clear);

percentBtn.addEventListener('click', () => {
    display.value = Number(display.value) / 100;
});

divideBtn.addEventListener('click', () => setOperator('/'));

sevenBtn.addEventListener('click', () => appendDigit('7'));

eightBtn.addEventListener('click', () => appendDigit('8'));

nineBtn.addEventListener('click', () => appendDigit('9'));

multiplyBtn.addEventListener('click', () => setOperator('*'));

fourBtn.addEventListener('click', () => appendDigit('4'));

fiveBtn.addEventListener('click', () => appendDigit('5'));

sixBtn.addEventListener('click', () => appendDigit('6'));

subtractBtn.addEventListener('click', () => setOperator('-'));

oneBtn.addEventListener('click', () => appendDigit('1'));

twoBtn.addEventListener('click', () => appendDigit('2'));

threeBtn.addEventListener('click', () => appendDigit('3'));

addBtn.addEventListener('click', () => setOperator('+'));

zeroBtn.addEventListener('click', () => appendDigit('0'));

decimalBtn.addEventListener('click', () => {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
});

equalsBtn.addEventListener('click', () => {
    calculate();
    operator = null;
});

