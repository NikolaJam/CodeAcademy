// You are a bear in the forest. You have to survive the winter for 30 days. 
// You will die if your total mass reaches X amount of kilograms.               
// You will be unable to move for 1 day if your total mass exceeds X kg, 
// during which you lose % of your total mass. 

// Each day you have a % chance to catch an animal from the forest and eat it. 
// The forest is populated by a fixed number of animals, each with different nutrition value in kg. 
// Some of those fixed animals are wolves. If the caught animal is a wolf, 
// you lose 10% of your mass killing it, but you gain half of its nutrition value (kg/2). 

// After the 20th day, each day there will be a % chance for a hunter to come and start hunting you. 
// You lose % of your mass when you run away from him, but if you’re overweight, he kills you.
// Will you survive the winter? How many kilograms will be your total mass?


function main() {

    var unBearAbleForest=new Forest();

    for (let index = 1; index <= 30; index++) {
        var num1=index;
        console.log("");
        var num2=unBearAbleForest.oneDay(num1);
        index=num2;
    }
}
main();