const leapYears = function(num1) {
    if (typeof num1 != "number"){
        return "ERROR";
    }
    if (num1%4 ==0){
        if (num1%100==0){
            if (num1 % 400 ==0){
                return true
            }
            else{
                return false
            }
        }
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
