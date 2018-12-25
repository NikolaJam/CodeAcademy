function main(){
var renderer = new RenderArtist();
 
if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    renderer.renderAll(hash);
} 
else {
    renderer.renderAll("Cher");
}
}
main();