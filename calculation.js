// https://youtu.be/BZNtxpO9DoA

function convertBase(value, iBase, oBase) {
    const dictionary = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~";
    const maxBase = dictionary.length;
    
    if (oBase >= maxBase || iBase >= maxBase) {
        throw new Error("Invalid base, max base " + maxBase + "\n");
        return '0';
    }
    var r = dictionary.split('');
    var iRange = r.slice(0, iBase);
    var oRange = r.slice(0, oBase);

    var foo = value.split('').reverse().reduce((carry, digit, index) => {
        if (iRange.indexOf(digit) === -1) throw new Error("Invalid digit " + digit + "\n");
        return carry += iRange.indexOf(digit) * Math.pow(iBase, index);
    }, 0);

    var newValue = '';
    while(foo > 0) {
        newValue = oRange[foo % oBase] + newValue;
        foo = (foo - (foo % oBase)) / oBase;
    }
    
    return newValue || '0';
}

function buttonCalculate() {
    var inputBase = parseInt(document.getElementById("inputBase").value, 10);
    var outputBase = parseInt(document.getElementById("outputBase").value, 10);
    var inputNumber = document.getElementById("inputNumber").value;
    var outputNumber = convertBase(inputNumber, inputBase, outputBase);
    document.getElementById("outputNumber").value = outputNumber;
}