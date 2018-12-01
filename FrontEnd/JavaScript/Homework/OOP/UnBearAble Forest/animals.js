
function animal(name, weight, type) {
    this.name=name;
    this.weight = randomNum(weight, weight * 2)
    this.type = type;
}

var wildcat = new animal("Wildcat", 25, "carnivore");
var badger = new animal("Badger", 30, "carnivore");
var rabbit = new animal("Rabbit", 10, "herbivore");
var boar = new animal("Boar", 100, "herbivore");
var deer = new animal("Deer", 80, "herbivore");
var wolf = new animal("Wolf", 50, "carnivore");
var fox = new animal("Fox", 30, "carnivore");



var animals=[];
animals.push(wildcat);
animals.push(rabbit);
animals.push(deer);
animals.push(boar);
animals.push(wolf);
animals.push(fox);
animals.push(badger);


