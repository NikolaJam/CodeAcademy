function Stadium(name,seats,team){

    this.name=name;
    this.seats=seats;
    this.numOfShirts=0;
    this.team = new Team(team);
    this.team.generateTeam();

    this.visitors=function(){
        var howMany;
        howMany=randomNum(this.seats*60/100,seats*80/100);
        return howMany;
    }

    this.hooligans=Math.floor(this.visitors()*10/100);                //10% of the visitors are hooligans.

    
    this.fanShop=function(){                                        //if there is a goal that day, 25% of visitors will buy a shirt
        var tShirts=0;
        this.team.teamScored() ?tShirts=this.visitors()*25/100 :tShirts=this.visitors()*10/100;
        
        this.numOfShirts+=tShirts;
        return tShirts*25;
    }

    this.profit = function(){
      var ticketSale = this.visitors()*10;
        return this.fanShop()+ticketSale-this.hooligans*10;
    }
}

