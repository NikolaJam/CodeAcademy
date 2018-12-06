function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function percentChance (percent) {

    var randomN = randomNum(0, 100);
    var indicator;

    if ((100 - percent) <= randomN) {                     

        indicator = true;
    }
    else { indicator = false; }

    return indicator;
}


function capFirst(string) {                                                 
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function nameGenerator() {                                                  //™
   
    var name1 = ["Yogi","Kodiak","Grizzly","Polar","Brown","Asian","Black","Panda","European","Macedonian"];
     
    var name = capFirst(name1[getRandomInt(0, name1.length)]);
    
    return name;

}

 
