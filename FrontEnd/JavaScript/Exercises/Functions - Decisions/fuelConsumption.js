// A car uses 7 litres of fuel on 100km. 
// How much fuel will the car spend driving 43 kilometers? 
// Use a loop instead of a mathematical formula.

function fuelConsumption(kilometers){

var kms=kilometers;
var fuel=0;

for(var i=0;i<=kms;i++){

      fuel+=0.07;

}

console.log("Za pominati " +kms+" kilometri, kolata ke potrosi " +fuel+" litri gorivo");

}

fuelConsumption(43);