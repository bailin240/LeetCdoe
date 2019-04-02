"use strict"
/**
* Example:
* 
* 两数之和
* 
* Given nums = [2, 7, 11, 15], target = 9,
* 
* Because nums[0] + nums[1] = 2 + 7 = 9,
* return [0, 1].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [11, 15, 16,2, 7]

let twoSum = function (nums, target) {
   for(let i = 0; i < nums.length; i ++) {
       for(let j = 0; j < nums.length; j++) {
           
        if(target == nums[i] + nums[j] && i != j) {
            return [i,j]
        }
       }
   }
   return 'undefined'
};

console.log(twoSum(nums, 9))