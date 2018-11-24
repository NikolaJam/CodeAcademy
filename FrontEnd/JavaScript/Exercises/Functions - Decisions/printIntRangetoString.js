// Write a JavaScript program to get the integers in range (x, y). 
// Input the range as parameters. Print the result as a string.

function printRange(x, y) {

    var pom = 0;
    
        for (var i = x; i <= y; i++) {
            
            pom = i.toString();
            
            console.log(pom);
        }   
}

printRange(10, 30);