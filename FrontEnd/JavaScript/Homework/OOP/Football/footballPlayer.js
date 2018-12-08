function Player(){

    this.name=generateName();                          
    this.goals=randomNum(0, 15);                        //generates a random number of goals between 0-15;
    this.isStar=percentChance(30);                      //has a 30% chance to declare the player as a star;
    this.playerScored=false;

    this.scoredGoal = function(){

    this.goals+=1;
    this.playerScored=true;
    }

    this.showPlayer = function(){
        console.log("Player name ",this.name," number of goals: ",this.goals);

    }
}

