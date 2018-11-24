//Calculate the price for iPhones, android, regular phones. There are subsides of 5% for iPhones, and 2% for Androids

function Phones(quantity, price, customs, taxRate, type) {
    var total=0;

    var subside1 = price * 5 / 100;
    var subside2 = price * 2 / 100;

    if (type === "iPhone") {
        total = quantity * price + customs + taxRate - subside1;
    }
    else if (type === "Android") {

        total = quantity * price + customs + taxRate - subside2;

    }

    else { //nema subvencii za obicni telefoni

        total = quantity * price + customs + taxRate;

    }
    console.log(total);
    return total;
   
}
 
