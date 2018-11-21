            //DOMASNA 1-1
// Write a function that will receive 3 parameters. 
// Two strings and a boolean. If the boolean value is “true”, concatenate the strings. 
// If the value is false, concatenate them in the inverse order. 
// Think about what would happen if we enter only 1 or 2 parameters.

//Ako vneseme samo dva parametri, funkcijata Boolean() go tretira nedefiniraniot parametar kako false, i ke dobieme invertirano.



function konkatenate(str1, str2, _bool) {
    var concatenated;
    if (Boolean(_bool)) {                               //if(_bool==true)
        concatenated = (str1 + str2);
    }
    else {                                              //if(_bool==false)
        concatenated = (str2 + str1);
    }

    alert(concatenated);
    return concatenated;

}

konkatenate("Levo", "Desno", 1);                        //za bilo koja vrednost, pa duri i za "false" stringot ke ni dade Boolean() true
                                                        //0, "", -0, false, null, davaat false.

