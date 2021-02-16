function wear_a_coat(temperature){
    blnNotNumber = false;
    if(isNaN(temperature)){
            blnNotNumber = true;
        }
        if(!blnNotNumber){
        if(temperature < 0){
            console.log ('Wear a coat');
        } else if(temperature < 10){
            console.log ('wear a coat and hat');
        } else if(temperature < 15){
            console.log ('Stay inside');
        } else {
            console.log('you don\'t need a coat');
        }
        
        } else {
            console.log('temperature needs to be a number');
    }
}

wear_a_coat(20);
wear_a_coat(14);
wear_a_coat(5);
wear_a_coat(-3);
wear_a_coat('Laura');
wear_a_coat({});
wear_a_coat([]);