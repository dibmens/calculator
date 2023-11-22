let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let input = [];
let result;
let a;
let b;
let op;

const calculate = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '÷': (a, b) => a / b,
};

document.addEventListener('keydown', (key) => {
    buttons.forEach((button) =>  {
        if (button.textContent == key.key) button.click();
    });
    if (key.key == 'Delete') buttons[4].click();
    if (key.key == `/`) buttons[8].click();
    if (key.key == 'Enter') buttons[9].click();
    if (key.key == 'Backspace') buttons[16].click();
    if (key.key == '*') buttons[13].click();
});

buttons.forEach((button) => button.addEventListener('click', () => {
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
            result = null;
            if (input.length < 8) input.push(button.textContent);
            b = +input.join('');
            display.textContent = b;
            break;
        case '.':
            if(!input.includes('.')) input.push(button.textContent); 
            break;
        case '⇦':
            input.pop();
            b = +input.join('');
            display.textContent = b;
            break;
        case '%':
            if (op == '+' || op == '-'){
                b = (a*b)/100;
            } else {
                b = b/100;
            };
            display.textContent = b;
            break;    
        case '+':        
        case '-':
        case 'x':
        case '÷':
            if ((a != null) && (op != null) && (b != null) && (result == null)){
                result = calculate[op](a, b);
                display.textContent = result;
                a = result;
                
            } else if ( a == null && result == null){
                a = +display.textContent;
            } 
            b = +display.textContent;
            op = button.textContent;
            input = [];
            break;
        case '=':
            if (a == null) a = b;
            result = calculate[op](a, b);
            a = Math.round(result*10000000)/10000000;
            isNaN(a) ? display.textContent = 'ERROR' : display.textContent = a;
            input = [];
            break;
        case 'C':
            input = [];
            display.textContent = 0;
            a = null;
            b = null;
            op = null;
            result = null;
            break;
    }
    
    console.log(`result: ${result} | a: ${a} | b: ${b} | op: ${op}`);
}));