function isValideNumber(number){
    return !isNaN(number);
}

function calculator (number1,number2,operator){
    strMessage ='';
    if(!isValideNumber(number1)){
        return 'argument 1 must be a number';
    }
    if(!isValideNumber(number2)){
        return 'argument 2 must be a valid number';
    }
    if(operator != '+' && operator != '-' && operator != '*' && operator != '/' && operator != '%'){
        return 'Argument 3 must be an arithmatic operator';
    }
    var sum;
    switch(operator){
        case '+':
            sum = number1 + number2;
        break;
        case '-':
            sum = number1 - number2;
        break;
        case '*':
            sum = number1 * number2;
        break;
        case '/':
            sum = number1 / number2;
        break;
        case '%':
            sum = number1 % number2;
        break;
    }
    return sum;
}

sum = calculator(10,10,'%');
console.log(sum);
   