// Write a script to check whether a number is a palindrome or not. 
// Input the number as a parameter.

// Za vezbanje drugite nacini

// function compareDigits(num1, num2) {

//     var digit1 = 0;
//     var digit2 = 0;
//     var indicator;

//     while (num1 && num2) {                             //ako edniot e pogolem ke prekine kaj krajot na pomaliot, zatoa se dvata

//         digit1 = num1 % 10;
//         num1 = Math.floor(num1 / 10);

//         digit2 = num2 % 10;
//         num2 = Math.floor(num2 / 10);

//         if (digit1 === digit2) {

//             indicator = true;
//             break;
//         }

//         else { indicator = false; }

//     }
//     // console.log("The comparison is " + indicator);   //pokazuva kolku true ima pred false, moze da se vidi kolku broevi prosle
//     return indicator;
// }


function isPalindrome(number) {

    var num2 = number;
    var num1 = number;                                      //ako nema dve dodeluvanja, dole nema da go sporedi dobro
    var pom1 = 0;
    var palindrom = 0;

    while (num1) {

        pom1 = num1 % 10;
        palindrom *= 10;
        palindrom += pom1;
        num1 = Math.floor(num1 / 10);

    }

    if (num2 === palindrom) {

        console.log("Brojot " + number + " e palindrom");
    }
    else {

        console.log("Brojot " + number + " ne e palindrom");

    }
}

isPalindrome(4554);
isPalindrome(1234);

