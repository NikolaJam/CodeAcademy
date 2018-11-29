

var pet = {

    name: "Summer",
    race: "Direwolf",
    color: "Gray",
    weight: 75,
    loyalty: true,

    barking: function () {
        console.log(this.name, " doesnt bark, but he howls");
    },

    biting: function () {

        //   console.log(this.name, " has a very nasty bite");

    },

    isLoyal: function () {

        return true;

    }
}

var milenice = new Object();

milenice.name = "Vucko";
milenice.race = "Vucjak";
milenice.color = "Brown";
milenice.weight = 55;

milenice.isLoyal = function () {
    return true
}

function Dog(name, race, color, weight) {

    this.name = name;
    this.race = race;
    this.color = color;
    this.weight = weight;
    this.bark = function () {
        console.log(this.name, " is barking loudly")
    }
    this.isLoyal = function () {
        return true;

    }

}

var sharko = new Dog('Sharko', 'Sharplaninec', 'Sharen', 65);
var djiggy = new Dog('Djiggy', 'Doberman', 'Kafena', 55);
var fifi = new Dog('Fifi', 'Spitz', 'Crvena', 10);
var dzuko = new Dog('Dzuko', 'Dzukela', 'Razna', 35);




// pet.isLoyal();
pet.barking();
pet.biting();

function checkLoyalty(pet) {
    if (pet.isLoyal())
        console.log(pet.name + " is a very loyal " + pet.race);
}

checkLoyalty(pet);

checkLoyalty(milenice);
