// A girl tries to impress a boy by flirting with him. 
// Every flirt she makes is worth 1 point, every third flirt is 
// worth 5 points and every 5th flirt is worth 10 points.

// Every 10th flirt the boy gets tired and deducts the girl’s points by 12. 
// Write a function that will calculate if the girl impressed the boy or not, 
// by accepting the number of tries the girl should use and the number of 
// hitpoints the boy has, as function parameters.

function flirt(hitpoints, tries) {
    var counter = hitpoints;
    var girl = tries;
    for (var i = 1; i < girl; i++) {
        var pom1 = i;
        var flirt = 1;
        var girlpoints = flirt;
        counter -= flirt;
        if (counter < girlpoints) {
            console.log("The girl has won the guy with her charm.");
            break;
        } else if (!(pom1 % 10)){
            counter += 13;
        }else if (!(pom1 % 5)){
            counter -= (girlpoints += 10);
        }else if (!(pom1 % 3)){
            counter -= (girlpoints +=3);
        } 
        console.log("I have  " + counter + " HP, this is your " + pom1 + " try, give up already girl!");
    }

}

flirt(100, 60);