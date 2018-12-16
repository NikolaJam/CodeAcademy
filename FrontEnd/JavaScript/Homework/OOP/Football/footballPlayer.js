this.playMatch = function() {
        
    for (var i = 0; i < this.players.length; i++) {
        var pomosna = false;
        if(this.players[i].checkIfScore()){
            pomosna = true;
            console.log("On this match we scored goal and the scorer was ", this.players[i].name);

        }else {
            pomosna = false;
            console.log("No one from the players scored today maybe are not fit for our club");
            
        }
        return pomosna;
    }
}