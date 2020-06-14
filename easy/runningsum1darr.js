/*
  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
  Return the running sum of nums.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function (nums) {
  return nums.map((curr, i) => nums[i] += (nums[i-1]) ? nums[i-1] : 0)
}