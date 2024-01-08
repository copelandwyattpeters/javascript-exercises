const repeatString = function(word, times) {
    var word2 = ""
    if (times < 0){
        return "ERROR"
    }
    for (let i = 0; i < times; i++) {
        word2 += word;
    }
    return word2
};

// Do not edit below this line
module.exports = repeatString;
