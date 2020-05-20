// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

var twoSum = function(nums, target) {    
    for(let i = 0, len = nums.length; i < len; ++i){
        for(let j = i+1; j < len; ++j){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};
