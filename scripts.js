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

/*console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5));
console.log(divide(5,5)); */
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

console.log(operate(5,5,'%'));