// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. 
// The whole process lasts one minute. Every second he has to massage the patient's heart 
// (console.log(“performing insertAction”);). 
// Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.


function CPR() {


    for (var i = 1; i < 60; i++) {

        var seconds = i;

        console.log("Masaging the patients heart on the " + seconds + " second");

        if (!(seconds % 15)) {

            console.log("Checking the patients pulse on the " + seconds + " second <3 <3 <3");

        }

        if (!(seconds % 59)) {

            console.log("The patient is alive and kicking");
        }
    }

}
CPR();