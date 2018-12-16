 
function Bear() {

    this.name = nameGenerator();
    this.weight = randomNum(300,500);
    this.minWeight = randomNum(this.weight/2, this.weight/1.5);
    this.maxWeight = randomNum(this.weight*1.25, this.weight*1.5);
    this.isAlive=true;
    this.isFat=false;

    var container = document.getElementsByClassName("container")[0];
    var screen = document.getElementsByClassName("screen")[0];
    screen.className="screen";
    container.appendChild(screen);
    

    var d1 = document.createElement("div");
            d1.className="d1";
            d1.innerHTML="Hello world, I'm a "+this.name+" bear, and I will try to survive for a month in this dark forest! <br /><br />\
            My starting weight is "+this.weight+" kg's. <br />\
            If my weight goes bellow "+this.minWeight+" kg's, I will die :( <br /><br />\
            If my weight goes above "+this.maxWeight+" kg's, I will take a nap for a whole day! Yay. <br /><br />\
            Wish me luck, here I go!";                   
            screen.appendChild(d1);
    
    this.checkWeight = function () {

        if (this.weight < this.minWeight) {

            var p1 = document.createElement("p");
            p1.style.color="red";
            p1.innerHTML="I weigh only "+Math.floor(this.weight)+ " kg's, goodbye cruel world!";                   
            screen.appendChild(p1);
             
            this.isAlive=false;
            this.isFat=false;                       

        }
        else if (this.weight > this.maxWeight) {

            var p1 = document.createElement("p");
            p1.style.color="red";
            p1.innerHTML="It appears that I'm "+ Math.floor(this.weight)+ " kg fat, I will take a nap for a day, and use some of my reserves!";                   
            screen.appendChild(p1);
             
            this.isFat=false;
            this.weight -= this.weight * 15 / 100;
            this.isFat=true;

        }
        else {

            var p1 = document.createElement("p");
            p1.style.color="red";
            p1.innerHTML="I weigh "+Math.floor(this.weight)+" kg's.";                   
            screen.appendChild(p1);
            this.isFat=false;
            console.log();
        }

        return this.weight;                                                         //not used anywhere, just in case.
    }

    this.byeBye = function (animal) {

        if (animal.type === "carnivore") {

            this.weight -= this.weight * 10 / 100;
            this.weight += animal.weight / 2;
            var p1 = document.createElement("p");
            p1.style.color="blue";
            p1.innerHTML="I ran into a " + animal.name + ", it was a bit feisty, but delicious anyway, my current weight is: "+Math.floor(this.weight)+" kg's.";                   
            screen.appendChild(p1);
            animal.isEaten();                                                       //TODO check if there aren't enough animals.
        }

        else {

            this.weight += animal.weight;
            var p1 = document.createElement("p");
            p1.style.color="green";
            p1.innerHTML="I found a "+animal.name+" and it was de-licious, my current weight is: "+Math.floor(this.weight)+" kg's.";                   
            screen.appendChild(p1);
            animal.isEaten();
        }
    }

    this.seppuku = function(){

        var p1 = document.createElement("p");
            p1.style.color="yellow";
            p1.innerHTML="The hunter has killed me, the " + this.name + " bear, because I was too fat to run, these are my last words.";                   
            screen.appendChild(p1);
        this.isAlive=false;

    }
    this.escaped=function(){

        var bw = this.weight;
        this.weight -= this.weight * 10 / 100;
        var p1 = document.createElement("p");
            p1.style.color="yellow";
            p1.innerHTML="I, the " + this.name + " bear, have escaped the hunter but also lost "+Math.floor(bw -= this.weight)+" kg's"
        
    }
}
