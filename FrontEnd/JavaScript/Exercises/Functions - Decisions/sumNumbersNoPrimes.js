// Write a JavaScript program that will iterate through  
// a given range of numbers (as function parameters) and sum the numbers. 
// However, if the iteration reaches a prime number, 
// you should skip summing that number, but continue with the loop. 
// A prime number is a number that is divisive only with itself or 1. 
// Print out the sum to console and the number of times you skipped summing a prime number. 
// BONUS: Print out the prime numbers you’ve found into a string or array.

function isAPrime(num) {

    for (var i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

function sumRange(x, y) {
    
    var pom = 0;
    var brojac = 0;
    var sum = 0;
    var prosti=[];
    for (var i = x; i <= y; i++) {
        pom = i;
        if (isAPrime(pom)) {
           prosti.push(pom);
            // sum+=0;           
            brojac++;
        }
        else {

           sum += pom;

        }
    }
    console.log("Vkupnata suma e "+sum+" a vkupno prosti broevi imame "+brojac);
    console.log(prosti);

}

sumRange(5,25);

//efikasen kod za prime number
// function isPrime(num) {
//     var sqrtnum=Math.floor(Math.sqrt(num));
//       var prime = num != 1;
//       for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
//           if(num % i == 0) {
//               prime = false;
//               break;
//           }
//       }
//       return prime;
//   }