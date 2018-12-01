// You are a bear in the forest. You have to survive the winter for 30 days. 
// You will die if your total mass reaches X amount of kilograms.               
// You will be unable to move for 1 day if your total mass exceeds X kg, 
// during which you lose % of your total mass. 

// Each day you have a 30% chance to catch an animal from the forest and eat it. 
// The forest is populated by a fixed number of animals, each with different nutrition value in kg. 
// Some of those fixed animals are wolves. If the caught animal is a wolf, 
// you lose 10% of your mass killing it, but you gain half of its nutrition value (kg/2). 

// After the 20th day, each day there will be a 5% chance for a hunter to come and start hunting you. 
// You lose % of your mass when you run away from him, but if you’re overweight, he kills you.
// Will you survive the winter? How many kilograms will be your total mass?


function forest(bear) {

    var hunterChance=30;                                           //% of chance for a hunter after day 20
    var luck = 70;                                                 // % of chance to find an animal in a given day, or eat herbs
    var unlucky;                                                  // the random num that will be the animal eaten
    var counter=0;
    console.log("Hello world, I'm a",bear.name,"bear, and I will try to survive for a month in this dark forest!")
    console.log("My starting weight is",bear.weight,"kg's.");
    console.log("If my weight goes bellow",bear.minWeight,"kg's, I will die :(");
    console.log("If my weight goes above",bear.maxWeight,"kg's, I will take a nap for a whole day! Yay.");
    console.log("Wish me luck, here I go!");
    for (let index = 1; index <= 30; index++) {
        counter=index;
        console.log("");
        console.log("Day",index,"for the",bear.name,"bear.");

        if (bear.weight < bear.minWeight) {                         //If the bear is underweight == game over.          

            index = 30;
            bear.checkWeight();

        }
        else if (bear.weight > bear.maxWeight) {
            index++;                                                //if the bear is overweight == pass the day and print the weight
            bear.checkWeight();
        }
        
        else {

            if (percentChance(luck)) {

                bear.checkWeight();
                unlucky = randomNum(0, 6);
                bear.byeBye(animals[unlucky]);
            }

            else {
                console.log("Today, herbs are on the menu.");
                bear.weight -= bear.weight * 10 / 100;
                bear.checkWeight();
            }

            if (index >= 20 && bear.weight > bear.minWeight) {
                
                if (percentChance(hunterChance)) {

                    var lovec = hunter(bear);
                    if (lovec) {
                        index = 30;                                 //If the hunter kills the bear, end;
                    }
                }
            }
        }
    }
     
    if(counter >= 30){
    console.log("");   
    console.log('<-------------------End of the Month---------------------->');
    console.log("The ",bear.name,"bear has survived the month, and has a weight of",Math.floor(bear.weight),"kg's");
    console.log("");
    
    }
    else{
    console.log("");
    console.log('<----------------End of the road for',bear.name,'bear---------------->');
    console.log("The ",bear.name,"bear has not survived the month, and had a weight of",Math.floor(bear.weight),"kg's");
    console.log("");
    console.log("");
    }

}

forest(bears[0]);
forest(bears[1]);
forest(bears[2]);
forest(bears[3]);
forest(bears[4]);
