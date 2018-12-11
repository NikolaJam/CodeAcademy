
function Team(name) {
    this.numOfPlayers = 22;
    this.name = name;
    this.points = 0;
    this.players = [];

    this.generateTeam = function () {
        
        console.log("Our team " + this.name + " has 22 players, and they are:");

        for (let index = 1; index <= this.numOfPlayers; index++) {
            this.players.push(player = new Player());
            console.log(index + ".", player.name, " and he has ", player.goals, "goals. He is a", player.isStar, "star")
        }
    }

    this.teamScored = function () {                                               //check all the players for a scoredGoal flag
        
        for (let index = 0; index < this.numOfPlayers; index++) {
            var indicator=false;
            if (this.players[index].playerScored === true) {
                indicator = true;
                this.points += 1;
            }
            else indicator = false;
        }
        return indicator;                                                      //so we can raise the price on t-shirts;
    }

    this.findWorst = function () {
        var pom = 0;
        var worstPlayer;
        var goals = [];

        for (let i = 0; i < this.numOfPlayers; i++) {
            goals.push(this.players[i].goals);                                  //put all the goals in an array;
        }

        pom = Math.min.apply(0, goals);                                         //find the lowest number of goals;    
        worstPlayer = goals.indexOf(pom);                                      //get the index of the player with least goals;

        console.log("The worst player is", this.players[worstPlayer].name);
        return worstPlayer;
    }

    this.removeWorst = function () {
        var worst = this.findWorst();
        console.log(this.players[worst].name, "is no longer in our team, he was the worst player with", this.players[worst].goals, "goals");
        this.players.splice(worst, 1);
        this.numOfPlayers--;
    }

    this.hireStar = function () {
        var player = new Player();
        if (player.isStar) {
            this.players.push(player);
            this.numOfPlayers++;
            console.log("We have hired the star ", player);
        }
        else {
            return this.hireStar();
        }
    }

    this.resetFlags = function () {

        for (let i = 0; i < this.numOfPlayers; i++) {
            this.players[i].playerScored = false;
        }

    }
}
