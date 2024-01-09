const sumAll = function(num1, num2) {
    var sum = 0;
    var min = num1;
    var max = num2;
    if (num1 >= num2){
        min = num2;
        max = num1;
    }
    if (typeof num1 != "number"||typeof num2 != "number"){
        return "ERROR";
    }
    if (num1>=0 && num2>=0){
        for (let x = min; x<=max; x++){
            sum += x;
        }
    }
    else{
        return "ERROR";
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
