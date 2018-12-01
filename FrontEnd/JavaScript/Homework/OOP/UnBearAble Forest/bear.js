 
function bear(weight, name) {

    this.name = name;
    this.weight = weight;
    this.minWeight = randomNum(weight/2, weight);
    this.maxWeight = randomNum(weight, weight*1.5);

    this.checkWeight = function () {

        if (this.weight < this.minWeight) {

            console.log("I weigh only", Math.floor(this.weight), "kg's, goodbye cruel world!");        
        }
        else if (this.weight > this.maxWeight) {

            console.log("It appears that I'm", Math.floor(this.weight), "kg fat, I will take a nap for a day, and use 10% of my reserves!");
            this.weight -= this.weight * 20 / 100;

        }
        else {

            console.log("I weigh", Math.floor(this.weight), " kg's.");
        }

        return this.weight;
    }

    this.byeBye = function (animal) {

        if (animal.type === "carnivore") {

            this.weight -= this.weight * 10 / 100;
            this.weight += animal.weight / 2;
            console.log("I ran into a " + animal.name + ", it was a bit feisty, but delicious anyway, my current weight is:", Math.floor(this.weight), " kg's.");
        }

        else {

            this.weight += animal.weight;
            console.log("I found a " + animal.name + " and it was de-licious, my current weight is:", Math.floor(this.weight), " kg's.");
        }
    }
}

var polarBear = new bear(500, "Polar");
var grizlyBear = new bear(450, "Grizzly");
var kodiakBear = new bear(400, "Kodiak");
var brownBear = new bear(350, "Brown");
var yogiBear = new bear(300, "Yogi");

var bears=[];
bears.push(polarBear);
bears.push(grizlyBear);
bears.push(kodiakBear);
bears.push(brownBear);
bears.push(yogiBear);


















// kodiakBear.byeBye(animals[0]);
// kodiakBear.byeBye(animals[1]);
// kodiakBear.byeBye(animals[2]);
// kodiakBear.byeBye(animals[3]);
// kodiakBear.byeBye(animals[4]);
// kodiakBear.byeBye(animals[5]);
// kodiakBear.byeBye(animals[6]);
// // kodiakBear.byeBye(wolf);
// // kodiakBear.byeBye(boar);
// kodiakBear.checkWeight();
