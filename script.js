let display = document.getElementById('display');

function appendNumber(number) 
{
  display.value += number;
}


function appendOperator(operator)
{
  display.value += operator;
}


function clearDisplay() 
{
  display.value = '';
}


function calculate() 
{
  var result = eval(display.value);
  display.value = result;
}
