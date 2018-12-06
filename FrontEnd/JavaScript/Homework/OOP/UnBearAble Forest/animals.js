
function Animal(name, weight, type) {                      //I'm not using random generated animals so we don't get a 100kg rabbit
    this.name=name;
    this.weight = randomNum(weight, weight * 2)            //The animal's weight will always be a random version of the inputed one.
    this.type = type;                                      //Two types - carnivores and herbivores.
    this.isTasty=false;
    this.isEaten = function(){

        this.isTasty=true;
        this.weight=null;
    }
}


