// Create a hotel that will work for 14 days. 
// The hotel has rooms that can be taken/vacant, 
// clean/dirty and have a minibar with items to buy that needs to be restocked. 
// There are employees working in the hotel, that get added through a recruitment drive every 3 days. 
// There is a restaurant in the hotel that serves clients. 
// Each day, clients come to the hotel and stay a few days, 
// paying money for the rooms, the minibar and the restaurant. 
// Choose the price of each by yourself. Every day vacant rooms get cleaned and restocked.

// Calculate the total profit of the hotel after the 14 day work period 
// as well as the number of employees it currently has and the number of 
// guests the hotel served during that period.



function luxuryHotel() {
    this.workDay = function (day) {
        //todo 
        console.log("Today is ", day);
        this.buildRooms = function () {
            for (var index = 1; index <= 120; index++) {
                var room = new Object(index); //TO Implement
                this.rooms.push(room);
            }
            console.log(this.rooms)
        }
    }
    this.hireEmployee = function (employee) {           //dodava
        this.employees.push(employee)
    }

    this.rooms = this.buildRooms();
    this.employees = [];
    this.restaurant = new Object(); //TODO not implemented;
    this.employeesHired = 0;
    this.income = 0;
    this.guestServed = 0;
    this.generateHotel = function () {
        this.buildRooms();
    }
    this.generateHotel();
}