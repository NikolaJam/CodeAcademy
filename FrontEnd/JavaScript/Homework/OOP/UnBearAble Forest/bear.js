 
function Bear() {

    this.name = nameGenerator();
    this.weight = randomNum(300,500);
    this.minWeight = randomNum(this.weight/2, this.weight/1.5);
    this.maxWeight = randomNum(this.weight*1.25, this.weight*1.5);
    this.isAlive=true;
    this.isFat=false;

    console.log("Hello world, I'm a",this.name,"bear, and I will try to survive for a month in this dark forest!")
    console.log("My starting weight is",this.weight,"kg's.");
    console.log("If my weight goes bellow",this.minWeight,"kg's, I will die :(");
    console.log("If my weight goes above",this.maxWeight,"kg's, I will take a nap for a whole day! Yay.");
    console.log("Wish me luck, here I go!");
    
    this.checkWeight = function () {

        if (this.weight < this.minWeight) {

            console.log("I weigh only", Math.floor(this.weight), "kg's, goodbye cruel world!");
            this.isAlive=false;
            this.isFat=false;                       //unnecessary I know, but for logic's sake, the bear died of hunger, it can't be fat.

        }
        else if (this.weight > this.maxWeight) {

            console.log("It appears that I'm", Math.floor(this.weight), "kg fat, I will take a nap for a day, and use some of my reserves!");
            this.weight -= this.weight * 15 / 100;
            this.isFat=true;

        }
        else {

            this.isFat=false;
            console.log("I weigh", Math.floor(this.weight), " kg's.");
        }

        return this.weight;                                                         //not used anywhere, just in case.
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
