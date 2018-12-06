
function Hunter() {

    this.toHunt = function (bear) {

        var indicator;

        if (bear.isFat) {

            console.log("The hunter has killed  the " + bear.name + " bear because it was too fat to run, this story is over.");
            indicator = true;
            bear.isAlive=false;
        }
        
        else {

            var bw = bear.weight;
            bear.weight -= bear.weight * 10 / 100;
            console.log("I, the " + bear.name + " bear, have escaped the hunter but also lost", Math.floor(bw -= bear.weight), "kg's");
            indicator = false;
        }
        
        return indicator;
    }
}
