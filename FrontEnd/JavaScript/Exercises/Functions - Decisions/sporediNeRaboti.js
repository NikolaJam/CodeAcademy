function sporedi(n1, n2) {

    var pom1 = 0;
    var pom2 = 0;
    var indicator;

    while (n1 && n2) {

        pom1 = n1 % 10;
        console.log(pom1) 

        n1 = Math.floor(n1 / 10);
        console.log(n1) 

        pom2 = n2 % 10;
        console.log(pom2) 

        n2 = Math.floor(n2 / 10);
        console.log(n2) 

        if (pom1 == pom2) {

            indicator = false;
            break;

        }
        else {

            indicator = true;
        }

        return indicator;
    }
}

// function sporedi(n1, n2) { RABOTI ODLICNO!!!

//     var pom1 = 0;
//     var pom2 = 0;
//     var indicator;

//     while (n1 && n2) {

//         pom1 = n1 % 10;
//         console.log(pom1)

//         n1 = Math.floor(n1 / 10);
//         console.log(n1)

//         pom2 = n2 % 10;
//         console.log(pom2)

//         n2 = Math.floor(n2 / 10);
//         console.log(n2)

//         if (pom1 == pom2) {

//             indicator = true;
//             break;
//         }

//         else { indicator = false; }

//     }

//     console.log("The comparison is " + indicator);
//     return indicator;
// }