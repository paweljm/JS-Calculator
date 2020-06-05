let calculation = [];
let accumulator = '';

const display = document.querySelector('.calculator-display');
const displaySum = document.createElement('p');
display.appendChild(displaySum);

function add () {
    calculation.push(accumulator);
    accumulator = '';
    calculation.push("+");
}
function sub () {
    calculation.push(accumulator);
    accumulator = '';
    calculation.push("-");
}
function divide () {
    calculation.push(accumulator);
    accumulator = '';
    calculation.push("/");
}
function mult () {
    calculation.push(accumulator);
    accumulator = '';
    calculation.push("*");
}
function operate () {
    let finalSum;
    calculation.push(accumulator);
    while (calculation.includes("/")){
        for (let j = 0; j < calculation.length; j++){
            if (calculation[j]=='/') {
                calculation[j] = Number(calculation[j-1]) / Number(calculation[j+1]);
                calculation.splice(j+1,1);
                calculation.splice(j-1,1);
                console.log(calculation)
            }
        }
    }
    while (calculation.includes("*")){
        for (let j = 0; j < calculation.length; j++){
            if (calculation[j]=='*') {
                calculation[j] = Number(calculation[j-1]) * Number(calculation[j+1]);
                calculation.splice(j+1,1);
                calculation.splice(j-1,1);
                console.log(calculation)
            }
        }
    }
    while (calculation.includes("+")){
        for (let j = 0; j < calculation.length; j++){
            if (calculation[j]=='+') {
                calculation[j] = Number(calculation[j-1]) + Number(calculation[j+1]);
                calculation.splice(j+1,1);
                calculation.splice(j-1,1);
                console.log(calculation)
            }
        }
    }
    while (calculation.includes("/")){
        for (let j = 0; j < calculation.length; j++){
            if (calculation[j]=='-') {
                calculation[j] = Number(calculation[j-1]) - Number(calculation[j+1]);
                calculation.splice(j+1,1);
                calculation.splice(j-1,1);
                console.log(calculation)
            }
        }
    }
    return calculation;
    }
const noButtons = document.querySelectorAll('.noButton');
noButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        accumulator += button.textContent;
        let displayString = calculation.join(',') + accumulator.toString();
        displaySum.textContent = displayString.replace(/,/g, "");
    })
})
const opButtons = document.querySelectorAll('.operatorButton');
opButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.textContent == '+'){
            console.log('add')
            add();
            let displayString = calculation.join(',') + accumulator.toString();
            displaySum.textContent = displayString.replace(/,/g, "");
        } else if (button.textContent == '-'){
            console.log('sub')
            sub();
            let displayString = calculation.join(',') + accumulator.toString();
            displaySum.textContent = displayString.replace(/,/g, "");
        } else if (button.textContent == '*'){
            console.log('mult')
            mult();
            let displayString = calculation.join(',') + accumulator.toString();
            displaySum.textContent = displayString.replace(/,/g, "");
        } else if (button.textContent == '/'){
            console.log('div')
            divide();
            let displayString = calculation.join(',') + accumulator.toString();
            displaySum.textContent = displayString.replace(/,/g, "");
        }
    })
})
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', (e) => {
    operate();
    displaySum.textContent = calculation;
})
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (e) => {
    calculation = [];
    accumulator= '';
    displaySum.textContent = calculation;
})
