const reverseString = function(word) {
    var word2 = ""
    if (word.length >0){
        for (let i = 0; i <= word.length-1; i++) {
            word2 = word[i] + word2
            
        }
    }
    return word2
};

// Do not edit below this line
module.exports = reverseString;
