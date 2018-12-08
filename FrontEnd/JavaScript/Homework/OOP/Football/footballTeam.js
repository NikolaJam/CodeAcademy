
function Team(name) {
    this.numOfPlayers=22;
    this.name = name;
    this.points=0;
    this.players = [];
    this.generateTeam = function () {

        for (let index = 1; index <= this.numOfPlayers; index++) {
            var player = new Player();                                      //Ova da se sredi po elegantno
            this.players.push(player);
            console.log(index + ".", player.name, " and he has ", player.goals, "goals. He is a", player.isStar, "star")
        }

    }

    this.teamScored = function(){

        for (let index = 1; index <= this.numOfPlayers; index++) {
            
            var i=index;
            var indicator=false;
        if(this.players[i].playerScored){
            indicator = true;
            }
            else{
                indicator=false;
            }
        }
        this.points+=1;
        return indicator;
    }

    this.findWorst = function () {

        var pom=0;
        var bottom=2;
        var worstPlayer;
        var j=0;

        for (let i = 0; i <this.numOfPlayers; i++) {
            j=i;
            if(this.players[j].goals===0||this.players[j].goals===1){           //Rafiniraj malce, nekogas e undefined
                worstPlayer=j;
            }
        
            pom = this.players[j].goals;                 
            if (pom <= bottom) {                         
                worstPlayer = i;
                pom = bottom;
            }

        }

        console.log("The worst player is" ,this.players[worstPlayer]," amongst "+this.numOfPlayers);
        return worstPlayer;
    }

    this.removeWorst = function(){
        var worst = this.findWorst();
        console.log(this.players[worst]," is no longer in our team, he was the worst player with ",this.players[worst].goals);
        this.players.splice(worst,1);
        this.numOfPlayers--;
    }

    this.hireStar = function(){
        var player = new Player();
        if(player.isStar){
            this.players.push(player);
            this.numOfPlayers++;
            console.log("We have hired the star ",player);
        }
        else{
            this.hireStar();                                    
        }
    
    }
}

 
 