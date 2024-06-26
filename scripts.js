let num1 = '';
let op = '';
let num2 = '';
let result;

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

function operate(){
  let number1 = parseFloat(num1);
  let number2 = parseFloat(num2);
  switch(op){
    case '+':
      result = add(number1,number2);
      break;
    case '-':
      result = subtract(number1,number2);
      break;
    case '*' :
      result = multiply(number1, number2);
      break;
    case '/':
      result = divide(number1, number2);
      break;
    default:
      result = 'ERROR';
      }
  num2 = '';
  num1 = result;
}
// for operators of calculator.
const operators = document.querySelector('.operators');
const addition = document.createElement('button');
addition.textContent = '+';
addition.classList = "operation";
addition.addEventListener('click',showOperator);
const subtraction = document.createElement('button');
subtraction.textContent = '-';
subtraction.classList = "operation";
subtraction.addEventListener('click',showOperator);
const multiplication = document.createElement('button');
multiplication.textContent = '*';
multiplication.classList = "operation";
multiplication.addEventListener('click',showOperator);
const division = document.createElement('button');
division.textContent = '/';
division.classList = "operation";
division.addEventListener('click',showOperator);
const clear = document.createElement('button');
clear.textContent = 'CLEAR';
clear.classList = "operation";
const equalsTo = document.createElement('button');
equalsTo.textContent = "=";
equalsTo.classList = "equalsTo";
operators.appendChild(addition);
operators.appendChild(subtraction);
operators.appendChild(multiplication);
operators.appendChild(division);
operators.appendChild(clear);
operators.appendChild(equalsTo);

// for the numbers in the calculator.
const numbers = document.querySelector(".numbers");
for(let i = 0; i<=9; i++){
  const keys = document.createElement('button');
  keys.textContent = i;
  keys.classList = "keys";
  numbers.appendChild(keys);
  keys.addEventListener('click',showDigits);
}


//function for displaying the storing the numbers.
function showDigits(){
  const display = document.querySelector('.display');
  const keys = this.textContent;
  display.textContent += keys;
  if(num1 === '')
  {
     if (op === '') 
      num1 += keys;
  } 
  else {
    num2 += keys;
  }
}


  // Function for displaying and storing the operator
function showOperator() {
  const operators = document.querySelector(".operators");
  const display = document.querySelector('.display');
    if (num1 !== '' && num2 !== '') { // If both num1 and num2 are set
    operate(); // Perform the operation
    display.textContent = result; // Display the result
    num1 = result; // Set the result as num1 for the next operation
    num2 = ''; // Reset num2
    }
  op = this.textContent; // Set the operator
  display.textContent += op; // Display the operator
}

// to display the output
equalsTo.addEventListener('click',displayOutput);
function displayOutput(){
  operate();
  const display = document.querySelector('.display');
  display.textContent = result;
}

// function to clear display
clear.addEventListener('click',toClear);

function toClear(){
  const display = document.querySelector('.display');
  display.textContent = '';
  op = '';
  num1 = '';
  num2 = '';
}