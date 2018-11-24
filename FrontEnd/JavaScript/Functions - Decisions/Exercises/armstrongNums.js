// Write a JavaScript program to find the armstrong numbers of 3 digits. 
// Note : An Armstrong number of three digits is an integer such that 
// the sum of the cubes of its digits is equal to the number itself. 
// For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 

//Math.pow(7,3)+Math.pow(3,3)+Math.pow(1,3)
 //odi od 100 do 999  
//razdeli go na poedinecni cifri
//soberi ja sekoja poedinecna cifra na brojot, na tret kvadrat
//sporedi dali toj zbir e ednakov so brojot

function armstrong() {
    for (var i = 100; i < 1000; i++) {
        
        var zbir = i;
        var arms = 0;

        while (zbir) {

            arms += Math.pow((zbir % 10), 3);
            zbir = Math.floor(zbir / 10);

        }
        if (arms == i)
            console.log("Brojot " +arms+" e Armstrong broj ");
    }
}

armstrong();