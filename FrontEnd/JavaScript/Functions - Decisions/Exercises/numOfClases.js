//print the number of clases a student would have in a given year
function studentPrint(clases, months, sessions, incomplete, duration)
{
    var total = sessions*clases*months-(incomplete*duration);
    return total;
}
var casovi=studentPrint(3,6,12,1,6);
console.log("Studentot ima " + casovi + " casovi" )
