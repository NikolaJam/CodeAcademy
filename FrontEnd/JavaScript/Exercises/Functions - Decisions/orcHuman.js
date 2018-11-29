// An orc warrior is fighting a human footman. 
// The battle ends when one of them dies. 

// The orc has 720 hitpoints, does 23-35 damage and has 5 armor. 
//The human footman has 550 hitpoints, does 18-27 damage, 
//but has a shield that gives him 9 armor. 

// Shields and armor deduct the damage that the fighter takes. 
// Who will win the fight?

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fight() {

    var orcWarrior = 720;
    var humanFootman = 580;
    var pom1, pom2;

    while (orcWarrior > 0 && humanFootman > 0) {

        pom1 = getRandomInt(18, 27) - 15;
        orcWarrior -= pom1;
        pom2 = getRandomInt(23, 35) - 9;
        humanFootman -= pom2;

    }

    if (orcWarrior <= 0) {

        console.log("The human is victorious");

    }

    else {

        console.log("The orc is victorious");

    }
}

fight();