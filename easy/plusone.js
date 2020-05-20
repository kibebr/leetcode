//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    const last = digits.length-1;

    if(digits[last]+1 >= 10){
        digits[last] = 0;
        for(let i = last-1; true; --i){
            if(digits[i] === undefined){
                digits.unshift(1);
                return digits;
            }
            else if(digits[i] + 1 >= 10){
                digits[i] = 0;
            }
            else{
                digits[i]++;
                break;
            }
        }
    }   
    else{
        digits[last]++;
    }

    return digits;
};
