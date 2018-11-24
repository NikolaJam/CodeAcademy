// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function multiples() {

    var pom = 0;
    var pom2 = 0;

    for (var i = 1; i < 1000; i++) {

        pom2 = i;

        if (!(pom2 % 5) || !(pom2 % 3)) {
           
            pom += pom2;
        }

    }

   console.log("Zbirot na cifrite sto se delivi so 3 i 5 do 1000 e " + pom);
}
multiples();