// An orc warrior is fighting a human footman. 
// The battle ends when one of them dies. 

// The orc has 720 hitpoints, does 23-35 damage and has 5 armor. 
//The human footman has 550 hitpoints, does 18-27 damage, 
//but has a shield that gives him 9 armor. 

// Shields and armor deduct the damage that the fighter takes. 
// Who will win the fight?

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Warrior(hitpoints, minDamage, maxDamage, armor, criticalChance) {

    this.hitpoints = hitpoints;
    this.maxDamage = maxDamage;
    this.minDamage = minDamage;
    this.armor = armor;
    this.criticalChance=criticalChance;
    
    this.attack = function () {

        return randomNum(this.minDamage, this.maxDamage);
    }

    this.crit = function(){

        var randomN=randomNum(0,100);
        var indicator;

        if((100-this.criticalChance)<=randomN){                     //For example: from 90 to 100, there is 10% chance for a critical.

            indicator=true;
        }
        else { indicator=false;}

        return indicator;                                
    }

}

var orcWarrior = new Warrior(720, 23, 35, 5, 10);                   //hitpoints, minDamage, maxDamage, armor, crit
var humanWarrior = new Warrior(580, 18, 27, 15, 15);                //with an armor value of 15 and HP 580, they are balanced

function battle(orc, human) {

    var hHp1, hHp2;                                             
    var oHp1, oHp2;
    var counter = 1;
    var critChance;
    
    while (orc.hitpoints > 0 && human.hitpoints > 0) {

        counter++
        console.log("Round " + counter + " start!")

        hHp1 = human.hitpoints;
        console.log("The Human's HP is: " + human.hitpoints);

        critChance=orc.crit();
        
        if(critChance){                                                              //10% crit chance;
        human.hitpoints -= orc.attack()*2 - human.armor;
        hHp2 = hHp1 - human.hitpoints;

        console.log("The Orc deals " + hHp2 + " CRITICAL points of damage");
        }

        else {

            human.hitpoints -= orc.attack() - human.armor;
            hHp2 = hHp1 - human.hitpoints;
            console.log("The Orc deals " + hHp2 + " points of damage");
        }

        oHp1 = orc.hitpoints;
        console.log("The Orc's HP is: " + orc.hitpoints);

        critChance=human.crit();
        
        if(critChance){                                                              //15% crit chance
        orc.hitpoints -= human.attack()*2 - orc.armor;
        oHp2 = oHp1 - orcWarrior.hitpoints;

        console.log("The human hits the Orc for " + oHp2 + " CRITICAL points of damage");
        console.log("");
        }

    else {

        orc.hitpoints -= human.attack() - orc.armor;
        oHp2 = oHp1 - orcWarrior.hitpoints;

        console.log("The human hits the Orc for " + oHp2 + " points of damage");
        console.log("");
    }

        if (orc.hitpoints <= 0) {

            console.log("The human somehow managed to win...");
        }

        else if (human.hitpoints <= 0) {

            console.log("The orc is victorius!");
        }
    }
}



battle(orcWarrior, humanWarrior);