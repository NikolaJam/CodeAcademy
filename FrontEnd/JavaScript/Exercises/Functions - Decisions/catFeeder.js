// An old woman has 3 cats. She has to feed them every day for one week. 
// The cats’ names are Tabby, Lizzie and Mary. Tabby likes fish and Lizzy likes chicken. 
// Mary eats anything you give her. Help the woman feed her cats by writing a 
// script that will feed them for a week. 
// The actual feeding procedure is: console.log(nameofcat + “ started eating fish/chicken/whatever”);

function foodDispenser(cat, food) {

    console.log(cat + " started eating " + food + "\n");


}

function catFeeder() {

    var nameofcat = ["Tabby", "Lizzie", "Mary"];
    var food = ["fish", "chicken", "whatever"];

    for (var i = 1; i <= 7; i++) {

        for (index = 0; index < nameofcat.length; index++) {

            foodDispenser(nameofcat[index], food[index]);

        }

    }
}
catFeeder();