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