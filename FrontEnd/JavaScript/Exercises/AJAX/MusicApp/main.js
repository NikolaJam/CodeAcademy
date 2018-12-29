// Display all the albums of the artist on tha artist page. 
// You will need to use a different entity to do that. 
// Consider pulling that new entity from a new repository. 
// Your current business logic should use that new repository.

// Make the similar artists clickable. 
// On click, it should open an artist page for that artist without refreshing the webpage. 
// Modify the presentation layer accordingly.

// Display the list of tracks under each album along with their information. 
// You will need to use a different entity to do that. 
// Consider pulling that new entity from a new repository. 
// Your current business logic should use that new repository.



import {RenderArtist} from "/presentation-layer/artistPageRender.js";
import * as jquery from "/jquery-3.3.1.js";

function main(){

var renderer = new RenderArtist();

if(window.location.hash) {
    var renderer = new RenderArtist();
    var hash = window.location.hash.substring(1);
    // window.location.replace(url);
    // window.location.reload();
    renderer.renderAll(hash);
} 
else {
    renderer.renderAll("Fatboy Slim");
}
}
main();

//da se smeni lokalitetot na mk
//da se napravi estetski vremeto 

// var datе = data.artist.bio.published;               //zemi go datumot na objavuvanje na albumot
// moment.locale("mk");                                //pretvori go vo MK format
// moment(datе).format("DD - MMMM - YYYY");            //prikazi go na ekran vo toj izgled

 //i18n L10n - internacionalizacija i vremenski zoni moment.js

 
//  <!-- <script src="jquery-3.3.1.js"></script> -->
//  <!-- <script src="entities/artist.js"></script> -->
//  <!-- <script src="repositories/artistRepository.js"></script> -->
//  <!-- <script src="business-layer/artistLogic.js"></script> -->
//  <!-- <script src="presentation-layer/artistPageRender.js"></script> -->
//  <!-- -->