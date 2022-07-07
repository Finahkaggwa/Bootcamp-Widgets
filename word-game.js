function longestWord(thestring) {
    var longest = thestring.split(' ');
    var maxiLength = 0;
    var theLongest = '';
    for (var i = 0; i < longest.length; i++) {
        if (longest[i].length >= maxiLength) {
            maxiLength = longest[i].length
            theLongest = longest[i]
        }
    }
    return theLongest
}

function shortestWord(thestring) {
    var shortest = thestring.split(' ');
    var theShortest = shortest[0];
    for (var i = 0; i < shortest.length; i++) {
        if (shortest[i].length <= theShortest.length) {
            theShortest = shortest[i]
        }
    }
    return theShortest
}

function wordLengths(thestring) {
    var myString = thestring.split(' ');
    var wordlens = myString.map(word => word.length);
    let sum = 0;
    for (var i = 0; i < wordlens.length; i++) {
        sum += wordlens[i];
    }
    return sum
}


