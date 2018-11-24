//Write a JavaScript program that will 
//read in an integer and sum its digits.


function zbirNaCifri(){
var zbir = prompt("Vnesete broj");
var sum = 0;

while (zbir) {
sum += zbir % 10;
zbir = Math.floor(zbir / 10);

}
alert("Zbirot na cifrite na brojot e " +sum);
}

zbirNaCifri();