function Stadium(name,seats,team){

    this.name=name;
    this.seats=seats;
    this.team = new Team(team);
    this.team.generateTeam();
    this.customers=function(){

        var howMany;
        howMany=randomNum(this.seats*60/100,seats*80/100);
        return howMany;
    }
    this.hooligans=Math.floor(this.customers()*10/100);                //10% of the customers are hooligans.

    this.fanShop=function(){
        var tShirts;
        if(this.team.teamScored()){
            tShirts+=this.customers()*25/100;
        }
        else{
            tShirts+=this.customers()*10/100;
        }
        return tShirts*10;
    }

    this.profit = function(){
        
        return this.fanShop()-this.hooligans*10;
    }
}

