
function Hunter() {

    this.toHunt = function (bear) {

        var indicator;

        if (bear.isFat) {

            bear.seppuku();
            indicator = true;
            
        }
        
        else {

            bear.escaped();
            indicator = false;
        }
        
        return indicator;
    }
}
