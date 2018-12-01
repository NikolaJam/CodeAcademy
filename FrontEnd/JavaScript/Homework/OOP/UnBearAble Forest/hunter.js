
function hunter(bear){

    var indicator;
    if(bear.weight>bear.maxWeight){

        console.log("The hunter has killed  the "+bear.name+" bear because it was too fat to run, this story is over.");
        indicator=true;
    }
    else{
        var bw=bear.weight;
        bear.weight-=bear.weight*10/100;
       console.log("I, the "+bear.name+" bear, have escaped the hunter but also lost",Math.floor(bw-=bear.weight),"kg's");
       indicator=false;
    }
    return indicator;
}


