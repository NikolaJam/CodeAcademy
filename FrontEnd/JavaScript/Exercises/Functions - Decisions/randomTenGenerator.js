// Write a JavaScript program to randomly generate ten values, 
// determine the largest value that you’ve generated, and print it to console or alert.

function randomly() {
    var pomosna = 0;
    var slucaen;
    var najgolem = 0;

    while (pomosna <= 10) {

        slucaen = Math.random();
      
        if (najgolem < slucaen) {

            najgolem = slucaen;
        }
        pomosna++;

    }
alert("Najgolem broj e brojot " + najgolem);
return najgolem;
}

randomly();