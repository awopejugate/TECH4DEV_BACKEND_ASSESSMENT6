function calc () {
// stdprice - studio price
// apartprice - apartment price
// disc_totalstd - discount for studio price
// finalstdprice - final Studio price for the whole stay
// finalapartprice - final Apartment price for the whole stay 
    let month = document.getElementById("month").value;
    let nodays = document.getElementById("nodays").value;
if (month === 'May' || month === 'October') {
    let stdprice = 50;
    let apartprice = 65;
    // tenary statement
    // finalstdprice = (nodays > 7 && nodays < 14) ? ((nodays * stdprice) - (nodays * stdprice) * 0.05)) : nodays * stdprice
    if (nodays > 7 && nodays < 14) {
        let disc_totalstd = (nodays * stdprice) * (5/100);
        let finalstdprice = (nodays * stdprice) - disc_totalstd;
        document.getElementById("studioresult").innerHTML = ("FINAL STUDIO PRICE :" + finalstdprice);
    } 
    else if (nodays > 14 ) {
        let disc_totalstd = (nodays * stdprice) * (30/100);
        let finalstdprice = (nodays * stdprice) - disc_totalstd;
        let finalapartprice = ((nodays * apartprice)-(nodays *apartprice)*(10/100));
        document.getElementById("apartresult").innerHTML = ("FINAL APARTMENT PRICE :", finalapartprice);
        document.getElementById("studioresult").innerHTML = ("FINAL STUDIO PRICE :", finalstdprice);
    } else {
        let finalstdprice = nodays * stdprice;
        let finalapartprice = nodays * apartprice;
        document.getElementById("apartresult").innerHTML = ("FINAL APARTMENT PRICE :", finalapartprice);
        document.getElementById("studioresult").innerHTML = ("FINAL STUDIO PRICE :", finalstdprice);
    } 
    }
    else if (month === 'June' || month === 'September') {
    let stdprice = 75.20;
    let apartprice = 68.70;
        if (nodays > 14 ) {
        let disc_totalstd = (nodays * stdprice) * (20/100);
        let finalstdprice = (nodays * stdprice) - disc_totalstd;
        let finalapartprice = ((nodays * apartprice)-(nodays *apartprice)*(10/100));
        document.getElementById("apartresult").innerHTML = ("FINAL APARTMENT PRICE :", finalapartprice);
        document.getElementById("studioresult").innerHTML = ("FINAL STUDIO PRICE :", finalstdprice);
    } else {
        let finalstdprice = nodays * stdprice;
        let finalapartprice = nodays * apartprice;
        document.getElementById("apartresult").innerHTML = (finalapartprice);
        document.getElementById("studioresult").innerHTML = (finalstdprice);
    } 
    }
    else if (month === 'July' || month === 'August') {
        let stdprice = 76;
       let apartprice = 77;
        // tenary statement
        // finalstdprice = (nodays > 14) ? ((nodays * stdprice) - (nodays * stdprice) * 0.20)) : nodays * stdprice
        if (nodays > 14 ) {
        let finalapartprice = ((nodays * apartprice)-(nodays *apartprice)*(10/100));
        document.getElementById("apartresult").innerHTML = finalapartprice;

        } else {
             let finalapartprice = nodays * apartprice;
             document.getElementById("apartresult").innerHTML = finalapartprice;
       }
    }
    else {

    }
}