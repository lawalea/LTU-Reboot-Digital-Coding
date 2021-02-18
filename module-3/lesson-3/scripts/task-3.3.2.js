function drinkOrder (size, drink){
    strMessage = 'You have ordered a ' + size;
        switch(drink){
        case 'cola':
            strMessage += 'Cola';
        break;
        case 'lemon':
            strMessage += 'Lemonade';
        break;
        case 'orange':
            strMessage += 'Fanta';
        break;
     }
    return strMessage;
}

order = drinkOrder ('Medium ','orange');
console.log(order);