// Write a function that accepts two numbers N and X. 
// Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. 
// A number is TOTALLY DIFFERENT from another if every digit 
// in the first number is different than every digit of the second number. 
// You are not permitted to use arrays or matrices (we haven’t learned them yet). 
// It’s ok to write subprocedures (helper functions that get called in your main function).

//Treba da napiseme dve proceduri, ednata sto ke gi rasclenuva na cifri i sporeduva dvata broja, 
//drugata sto ke prima broevi N i X i ke ja povikuva prvata za da sporedi toa sto treba.


function compareDigits(num1, num2) {

    var digit1 = 0;
    var digit2 = 0;
    var indicator;

    while (num1 && num2) {                             //ako edniot e pogolem ke prekine kaj krajot na pomaliot, zatoa se dvata

        digit1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
      
        digit2 = num2 % 10;
        num2 = Math.floor(num2 / 10);
       
        if (digit1 == digit2) {

            indicator = true;                           //imav izgleda problem zatoa sto tuka imav return true / false, a vaka so indicator popregledno e i nema return
            break;
        }

        else { indicator = false; }

    }
    // console.log("The comparison is " + indicator);   //pokazuva kolku true ima pred false, moze da se vidi kolku broevi prosle
    return indicator;
}


function differentNext(n, x) {

    var pom1 = n + 1;                                   // so n++ go zgolemuva "n" opsto, a go koristam i vo konsole log dole, vaka so +1 ne go zgolemuva.
    var pom2 = x;
    
    while (true) {

        if(compareDigits(pom1,pom2)){

        pom1++;
         
        }

        else { break; }
    }

    console.log("Najbliskiot pogolem broj od " + n + " koj e celosno razlicen od brojot " + x + " e brojot " + pom1);

}

differentNext(350,390);
