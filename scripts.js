let num1 = 0;
let operator = '';
let num2 = 0;

function add(num1,num2)
{
  return num1+num2;
}
function subtract(num1,num2)
{
  return num1-num2;
}
function multiply(num1,num2)
{
  return num1*num2;
}
function divide(num1,num2)
{
  return num1/num2;
}

function operate(num1,num2,operator){
  let result = 0;
  if(operator === '+'){
    result = add(num1,num2);
  }
  else if(operator === '-'){
    result = subtract(num1,num2);
  }
  else if(operator === '*'){
   result = multiply(num1,num2);
  }
  else if(operator === '/'){
    result = divide(num1,num2);
  }
  else{
    return 'ERROR';
  }
   return result;
}
// for the output of calculator.
const display = document.querySelector('.display');
display.textContent = "the results will be displayed here";
// for operators of calculator.
const operators = document.querySelector('.operators');
const addition = document.createElement('button');
addition.textContent = "+";
addition.classList = "operators";
const subtraction = document.createElement('button');
subtraction.textContent = "-";
addition.classList = "operators";
const multiplication = document.createElement('button');
multiplication.textContent = "*";
addition.classList = "operators";
const division = document.createElement('button');
division.textContent = "/";
addition.classList = "operators";
const clear = document.createElement('button');
clear.textContent = "clear";
addition.classList = "operators";
const equalsTo = document.createElement('button');
equalsTo.textContent = "=";
addition.classList = "operators";

operators.appendChild(addition);
operators.appendChild(subtraction);
operators.appendChild(multiplication);
operators.appendChild(division);
operators.appendChild(clear);
operators.appendChild(equalsTo);

