let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let input = [];
let showVal = 0;
let memVal;
let result;
let operator;

const operations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    'x': (a,b) => a * b,
    '/': (a,b) => (a / b),
};

buttons.forEach((button) => button.addEventListener('click', () => {
    console.log(button.textContent);
    switch(button.textContent){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (operator) memVal = showVal;
            if (input.length < 10) input.push(button.textContent);
            showVal = Number(input.join(''));
            display.textContent = Number(showVal);
            break;
        case '.':
            if(!input.includes('.')) input.push(button.textContent); 
            break;
        case '←':
            input.pop();
            showVal = +input.join('');
            display.textContent = +showVal;
            break;
        case '+':        
        case '-':
        case 'x':
        case '/':
            if (memVal && operator){
                showVal = operations[operator](memVal, showVal);
                display.textContent = showVal;
                memVal = null;
            }     
            input = []
            operator = button.textContent;
            break;
        case '=':
            //incomplete
            if (!memVal) memVal = showVal;
            showVal = operations[operator](memVal, showVal);
            display.textContent = showVal;
            break;
        case 'C':
            input = [];
            display.textContent = 0;
            showVal = 0;
            memVal = null;
            operator = null;
            break;
    }
    console.log(`showVal: ${showVal} | memVal: ${memVal} | operator: ${operator}`);
}));