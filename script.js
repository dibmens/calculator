let numpad = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.op')
let display = document.querySelector('#display')
let val = [];
let lastVal;
let currentVal;
let operator;

const operations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    'x': (a,b) => a * b,
    '/': (a,b) => a / b,
};

numpad.forEach((button) => 
    button.addEventListener('click', () => {
        val.length != 8 ? val.push(button.textContent) : console.log('full');
        currentVal = +val.join('');
        display.textContent = currentVal;
}));

operators.forEach((button) => 
    button.addEventListener('click', () => {
        val = [];
        switch(button.textContent){
            case '+' : 
            case '-' : 
            case 'x' :
            case '/' : 
                operator = button.textContent;
                lastVal = currentVal;
                display.textContent = lastVal;
            break;
            case '=' : 
                display.textContent = operations[`${operator}`](lastVal, currentVal);
            break;
            case 'C' : 
                lastVal = 0; 
                currentVal = 0;
                operator = 0;
                display.textContent = 0;
            break;
        }
    if(display.textContent == 'NaN') display.textContent =`FORBIDDEN KNOWLEDGE!`;
}));