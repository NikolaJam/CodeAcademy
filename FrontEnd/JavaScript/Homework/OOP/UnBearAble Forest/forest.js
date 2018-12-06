
function Forest() {

    this.hunterChance = 30;                                             //% of chance for a hunter after day 20
    this.luck = 70;                                                     // % of chance to find an animal in a given day, or eat herbs
    this.unlucky;                                                       // the random num that will be the animal eaten

    this.bear = new Bear();
    this.hunter = new Hunter();
   
    this.animals = [];
    this.animals.push(new Animal("Wildcat", 25, "carnivore"));
    this.animals.push(new Animal("Rabbit", 10, "herbivore"));
    this.animals.push(new Animal("Deer", 80, "herbivore"));
    this.animals.push(new Animal("Boar", 100, "herbivore"));
    this.animals.push(new Animal("Wolf", 50, "carnivore"));
    this.animals.push(new Animal("Fox", 30, "carnivore"));
    this.animals.push(new Animal("Badger", 30, "carnivore"));

    this.oneDay = function (number) {

        var pom = number;
        var pom2;
        console.log("Day", pom, "for the", this.bear.name, "bear.");
        if (this.bear.weight < this.bear.minWeight) {                           //If the bear is underweight...          

            this.bear.checkWeight();
            pom2 = 30;                                                          //set the index of days to the last day
        }

        else if (this.bear.weight > this.bear.maxWeight) {                      //if the bear is overweight
                                                               
            this.bear.checkWeight();                                            //loose some weight(in checkWeight())
            pom2 = pom + 1;                                                     //and skip a day 
        }

        else {
            if (percentChance(this.luck)) {
                this.bear.checkWeight();
                this.unlucky = randomNum(0, 6);
                this.bear.byeBye(this.animals[this.unlucky]);                    //the eating order is random
                pom2 = pom;
            }

            else {
                console.log("Today, herbs are on the menu.");                   //if the bear eats herbs, it loses 10% of it's weight
                this.bear.weight -= this.bear.weight * 10 / 100;
                this.bear.checkWeight();
                pom2 = pom;

            }
        }

        if (pom >= 20 && this.bear.weight > this.bear.minWeight) {

            if (percentChance(this.hunterChance)) {

                if (this.hunter.toHunt(this.bear)) {                        //The hunter attacks the bear, and returns a bool for the attack
                    pom2 = 30;                                              //If the hunter kills the bear, end;
                }
            }
        }

        if (pom === 30 && this.bear.isAlive) {
            console.log("");
            console.log('<-------------------End of the Month---------------------->');
            console.log("The ", this.bear.name, "bear has survived the month, and has a weight of", Math.floor(this.bear.weight), "kg's");
            console.log("");

        }
        else if (!this.bear.isAlive) {
            console.log("");
            console.log('<----------------End of the road for the', this.bear.name, 'bear---------------->');
            console.log("The ", this.bear.name, "bear has not survived the month, and had a weight of", Math.floor(this.bear.weight), "kg's");
            return;
        }
        return pom2;
    }


}

