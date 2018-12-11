// You are the owner of a football club. Your club plays one game each day for 30 days. 
// At the start of the season you draft 22 players. 
// Every 8 days a major football star comes to play for your club, 
// but you must kick the lowest scoring player in order to make space. 

// Each game you have a 30% chance to score a goal. 
// You have a stadium that has X number of seats. 
// Every day customers come to see the game and fill up the stadium randomly, 
// from 60% to 80% capacity. You have a fanshop that sells player jerseys to 10% 
// of the daily visitors each day, but if your team has scored a goal that day, its 25%. 

// Your hooligan fans fight the opposing fans and cause X amount of monetary damage to your club.
// Calculate the total earnings of the club after 30 days, 
// number of goals scored, number of t-shirts sold, number 
// of seat tickets bought and the total sum of damage from hooligans.

function main() {


    var stadium = new Stadium("Gradski", 20000, "Vardar");
    var luck = 30;                                                      //% chance to score a goal in a given day
    var earnings = 0;
    for (var i = 1; i <= 30; i++) {
        var pom = i;
        console.log("");
        console.log("Day ",pom);
        if (percentChance(luck)) {
            stadium.team.players[randomNum(0, stadium.team.players.length - 1)].scoredGoal();
        }
        else{
            console.log("Today there are no goals");
        }
        if (pom % 8 == 0) {
            stadium.team.removeWorst();
            stadium.team.hireStar();
        }
        Math.floor(earnings += stadium.profit());
        stadium.team.resetFlags();                                      //resets the scoredGoal flag, so we don't get unreal goal nums;
    }
    console.log("");
    console.log("After 30 days of matches, our club has earned", earnings, "dineros, and sold " + Math.floor(stadium.numOfShirts) + " shirts");
    console.log("We have scored",stadium.team.points,"goals");
}
main();

