function percentageCalculator(number,percent){
    var blnValidated = true;
    if(isNaN(number)){
        blnValidated = false;
    }
    if(isNaN(percent)) {
        blnValidated = false;
    }
    if(blnValidated){
        var onePercent = number /100;
        var percentValue = onePercent * percent;
        return percentValue;
    } else {
        console.log ('both arguments need to be numbers');
        return;
    }
}

var sum = percentageCalculator(100,50);
console.log(sum);

var sum = percentageCalculator(1000,50);
console.log(sum);

let otherSum = percentageCalculator('fish', 'oven');