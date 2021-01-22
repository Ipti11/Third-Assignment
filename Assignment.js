//github site :https://github.com/Ipti11/Third-Assignment
//Kilometer to meter coverter by using function
function kilometerToMeter(kiloMeter){
    var meter = kiloMeter*1000;
    return meter;
}

//BudgetCalCulation by using function
function budgetCalculator(watch,phone,laptop){
    var watch = watch*50;
    var phone = phone*100;
    var laptop = laptop*500;

    total = watch+phone+laptop;

    return total;
}

//HotelCost by using function
function hotelCost(day){
    if(day<=10){
        var finalRent = day*100;
    }
    else if(day<=20){
        var firstPeriod = 10*100;
        var remaining = day-10;
        var secondPeriod = remaining*80;
        finalRent = firstPeriod + secondPeriod;
    }
    else{
        var firstPeriod = 10*100;
        var secondPeriod = 10*80;
        var remaining = day-20;
        var thirdPeriod = remaining*50;
        finalRent = firstPeriod+secondPeriod+thirdPeriod;
    }
    return finalRent;
}

//Largest Name by using function
function megaFriend(name){
    var max = name[0];
    for(var i=0; i<name.length; i++){
        var element = name[i];
        if(element.length>max.length){
            max = element;
        }
    }
    return max;
}

