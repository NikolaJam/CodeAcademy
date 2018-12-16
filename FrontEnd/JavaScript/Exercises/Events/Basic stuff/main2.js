
// Create a HTML form , with 4 inputs for FirstName,LastName,Email and Password
// Create a button, on click call a function to get all input values
// Create an object in the callback function.
// Pass the values of the form as parameters when you construct the object.
// Finally print the object
// BONUS: validate the email if it’s really an email, and the password to be at least 8 characters.

function mainWrap() {
    var mainWrap = document.createElement("div");
    mainWrap.style.width = "1000px";
    mainWrap.style.height = "1000px";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(mainWrap);

    var firstName = document.createElement("input");
    firstName.id = "firstName";
    var lastName = document.createElement("input");
    lastName.id = "lastName";
    var email = document.createElement("input");
    email.id = "email";
    var password = document.createElement("input");
    password.id = "password";
    password.type = "password";
    password.placeholder = "password";
    var button = document.createElement("button");
    button.id = "button";
    button.innerHTML = "Button";
    firstName = document.getElementsByTagName("div")[0].appendChild(firstName);
    lastName = document.getElementsByTagName("div")[0].appendChild(lastName);
    email = document.getElementsByTagName("div")[0].appendChild(email);
    password = document.getElementsByTagName("div")[0].appendChild(password);
    button = document.getElementsByTagName("div")[0].appendChild(button);

    button.addEventListener("click", function () {

        var Person = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
        }
        console.log(Person);

        if (Person.password.length < 8) {
            console.log("password too small");
        }
    });


    return mainWrap;
}
mainWrap();


// function PageRenderer() {
//     this.renderAll = function() {
//         var bodyWrap= document.getElementById("body-wrap");
//         bodyWrap.appendChild(this.renderLeft());
//         bodyWrap.appendChild(this.renderRight());
//     }

//     this.renderLeft = function() {
//         var leftContainer = document.createElement("div");
//         leftContainer.style.width = "35%";
//         leftContainer.style.display = "flex";
//         leftContainer.style.flexDirection = "column";

//         var profileContainer = document.createElement("div");
//         var profileImage = document.createElement("img");
//         profileImage.style.width = "200px";
//         profileImage.style.height = "200px";




function createParagraph() {
    var par = document.createElement("p");                                      //kreirame element div
    par.innerHTML = "Some text Lorem Ipsum dolor sit amet";                     //go polnime so text negoviot vnatresen html
    document.getElementsByTagName("body")[0].appendChild(par);                  //go zimame prviot element prikacen na body

    par.addEventListener("mouseenter", function (event) {                       //mu zakacuvame event listener so funkcija na mouseenter
        event.target.style.color = "red";                                       //da napravi crvena boja na tekstot
    })
    par.addEventListener("mouseout", function (event) {                         // na izlaganje da ja vrati crnata boja na tekstot
        event.target.style.color = "black";
    })
}

createParagraph();

function getWindowDimensions() {

    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log(w, h);
}

window.addEventListener("resize", function (event) {
    event.target.getWindowDimensions();
})

