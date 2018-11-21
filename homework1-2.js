//Domasna 1-2
// Calculate the tax that people need to pay for their salary. 
// Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, 
// they pay 18% for the sum above the threshold. 
// (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). 
// Modify the function to check if the worker is a craftsman, if he is, drop the taxes to 5% and 10% respectively


function tax(plata, zanaetcija) {

    var danok1;
    var danok2;

    if (plata <= 1000 && zanaetcija) {
        danok1 = plata * 5 / 100;
        alert("За Вашата плата од " + plata + " евра, Вие како занаетчија, ќе платите данок во вредност од " + danok1 + " евра.")
    }

    else if (plata > 1000 && zanaetcija) {
        danok1 = 1000 * 5 / 100;
        danok2 = (plata - 1000) * 10 / 100;
        danok1 += danok2;
        alert("За Вашата плата од " + plata + " евра, Вие како занаетчија, ќе платите данок во вредност од " + danok1 + " евра.")
    }

    else if (plata <= 1000) {
        danok1 = plata * 11 / 100;
        alert("За Вашата плата од " + plata + " евра, ќе платите данок во вредност од " + danok1 + " евра.")
    }

    else {
        danok1 = 1000 * 11 / 100;
        danok2 = (plata - 1000) * 18 / 100;
        danok1 += danok2;
        alert("За Вашата плата од " + plata + " евра, ќе платите данок во вредност од " + danok1 + " евра.")
    }

    return danok1;
}

tax(2000, 1);

//Poedinecnite funkcii

// function tax(plata) {

//     var danok1;
//     var danok2;

//     if (plata <= 1000) {
//     danok1 = plata * 11 / 100;
//      
// else {
//     danok1 = 1000 * 11 / 100;
//     danok2 = (plata - 1000) * 18 / 100;
//     danok1 += danok2;
//     
// }
//     alert("За Вашата плата од " + plata + " евра, ќе платите данок во вредност од " + danok1 + " евра.")
//     return danok1;
// 
// }

// tax(2000);


// function craft(plata, zanaetcija) {

//     var danok1;
//     var danok2;
//     if (plata <= 1000&&zanaetcija) {
//         danok1 = plata * 5 / 100;
//     }
//     else if(plata>1000&&zanaetcija){
//         danok1 = 1000 * 5 / 100;
//         danok2 = (plata - 1000) * 10 / 100;
//         danok1 += danok2;

//     }
//     alert("За Вашата плата од " + plata + " евра, Вие како занаетчија, ќе платите данок во вредност од " + danok1 + " евра.")
//     return danok1;
// }

// craft(2000, 1);