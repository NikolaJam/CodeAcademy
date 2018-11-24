
function tConverter(stepeni, uslov) {

var result
if(uslov=="F")
 
{
        result = (5/9)*(stepeni-32);
}
        
    else if (uslov=="C")
    {
        result = stepeni*1.8+32;
    
    }

    else{
        result = "Ne e tocna vrednosta";
    }

    return result;
    console.log("Gotovo");

}
    
    var temperatura = tConverter(70,"F");
    
    alert(temperatura + " stepeni");
    
    