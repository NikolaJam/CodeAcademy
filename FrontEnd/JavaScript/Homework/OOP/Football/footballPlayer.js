function Player(number){

    this.name=generateName();                          
    this.goals=randomNum(0, 15);                        //generates a random number of goals between 0-15;
    this.isStar=percentChance(30);                      //has a 30% chance to declare the player as a star;
    this.number=number;

    this.playerScored=false;

    this.scoredGoal = function(){
        console.log(this.name,"has scored a GOOOAAAL");
        this.goals+=1;
        this.playerScored=true;
    }

    this.showPlayer = function(){

        console.log(this.number+"."+this.name+" and he has "+this.goals+"goals. He is a"+this.isStar+"star")

    }

    
}

