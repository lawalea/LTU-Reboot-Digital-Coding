function wear_a_coat(temperature){
    if(temperature <0){
        console.log ('Wear a coat');
    } else if(temperature <10){
        console.log ('wear a coat and hat');
    } else if(temperature <15){
        console.log ('Stay inside');
    } else {
        console.log('you don\'t need a coat');
    }
    
}

wear_a_coat(20);
wear_a_coat(14);
wear_a_coat(5);
wear_a_coat(-3);