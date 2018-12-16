
function Forest() {

    this.hunterChance = 50;                                             //% of chance for a hunter after day 20
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

    var container = document.getElementsByClassName("container")[0];
    var screen = document.getElementsByClassName("screen")[0]
    screen.className="screen";
    container.appendChild(screen);
    this.oneDay = function (number) {

        var pom = number;
        var pom2;
        var p1 = document.createElement("p");
        p1.style.color="white";
        p1.innerHTML="Day "+pom+" for the "+this.bear.name+" bear.";
        screen.appendChild(p1);

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
                               
                var p2 = document.createElement("p");
                p2.style.color="red";
                p2.innerHTML="Today, herbs are on the menu.";                   //if the bear eats herbs, it loses 10% of it's weight
                screen.appendChild(p2);
                this.bear.weight -= this.bear.weight * 10 / 100;
                this.bear.checkWeight();
                pom2 = pom;

            }
        }

        if (pom >= 20) {

            if (percentChance(this.hunterChance)) {

                if (this.hunter.toHunt(this.bear)) {                        //The hunter attacks the bear, and returns a bool for the attack
                    pom2 = 30;                                              //If the hunter kills the bear, end;
                }
            }
        }

        if (pom === 30 && this.bear.isAlive) {
            var p3 = document.createElement("p");
                p3.style.color="white";
                p3.innerHTML="";                   
                screen.appendChild(p3);
            var p4 = document.createElement("p");
                p4.style.color="white";
                p4.innerHTML='<-------------------End of the Month---------------------->';                   
                screen.appendChild(p4);
            var p5 = document.createElement("p");
                p5.style.color="white";
                p5.innerHTML="The "+ this.bear.name+" bear has survived the month, and has a weight of "+Math.floor(this.bear.weight)+" kg's";                   
                screen.appendChild(p5);
                screen.appendChild(p3);                                     //empty row for visibility;
           
        }
        else if (!this.bear.isAlive) {
            
            var p3 = document.createElement("p");
            p3.style.color="white";
            p3.innerHTML="";                   
            screen.appendChild(p3);

            var p6 = document.createElement("p");
                p6.style.color="white";
                p6.innerHTML='<--End of the road for the '+this.bear.name+' bear-->';                   
                screen.appendChild(p6);

            var p5 = document.createElement("p");
                p5.style.color="white";
                p5.innerHTML="The "+this.bear.name+" bear has not survived the month, and had a weight of "+ Math.floor(this.bear.weight)+" kg's";                   
                screen.appendChild(p5);
           
            return;
        }
        return pom2;
    }


}

