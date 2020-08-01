function generateCracklePop() {
    var i;
    var text = "";

    for(i=1; i<=100; i++){
        var crackle = isDivisible(i, 3);
        var pop = isDivisible(i, 5);
        
        if (crackle) text += "Crackle";
        if (pop) text += "Pop";
        if (!crackle & !pop) text += i;
        text += ', ';
    }//close loop   

    text = text.slice(0,-2); //trim off trailing comma and space

    return text;
}

function isDivisible(num, divisor) {
    if (num % divisor === 0) return 1;
}

function printCracklePop(output) {
    document.getElementById("cracklePopContainer").innerHTML = output;
}

function cracklePop(){
    var output =  generateCracklePop();

    printCracklePop(output);
}