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