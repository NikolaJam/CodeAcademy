// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz". (Print with console.log)

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (!(i % 3) && !(i % 5)) {
            console.log("FizzBuzz");
        }
        else if (!(i % 5)) {
            console.log("Buzz");
        }
        else if (!(i % 3)) {
            console.log("Fizz");
        }
        else
            console.log(i);
    }
}

fizzBuzz();