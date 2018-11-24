
function predlog() {
    var pari = prompt("Kazi kolku pari imas");
    var sovet;

    if(pari>=1000000) {
sovet="Pravi bukvalno sto sakas"
    }
    else if(pari<1000000&&pari>=100000)
    {
        sovet="Vlezi vo politika"
    }

    else if(pari<100000&&pari>=10000)
    {
        sovet="Odi vo kazino, zgolemi gi"
    }

    else{
        sovet="Git gud"
    }
    alert(sovet);
    return sovet;
}
predlog()