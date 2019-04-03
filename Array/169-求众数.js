"use strict"

/***
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素
 * 你可以假设数组是非空的，并且给定的数组总是存在众数
 * 
 * 示例 1:
 *  输入: [3,2,3]
 *  输出: 3
 * 
 * 示例 2:
 *  输入: [2,2,1,1,1,2,2]
 *  输出: 2
 * 
 */





 /**
 * @param {number[]} nums
 * @return {number}
 * 执行用时 : 160 ms, 在Majority Element的JavaScript提交中击败了14.24% 的用户
 * 内存消耗 : 37.5 MB, 在Majority Element的JavaScript提交中击败了0.00% 的用户
 */
let nums = [2,2,1,1,1,2,2]
var majorityElement = function (nums) {
    let obj = {}
    if(nums.length === 1) return nums[0]
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i]
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item] += 1
            if(obj[item] >= nums.length / 2 ) return item
        }
    }
};



/**
 * @param {number[]} nums
 * @return {number}
 * 摩尔投票法
 * 执行用时 : 100 ms, 在Majority Element的JavaScript提交中击败了59.82% 的用户
 * 内存消耗 : 37.2 MB, 在Majority Element的JavaScript提交中击败了2.17% 的用户
 */
let nums = [2, 2, 1, 1, 1, 2,2]
var majorityElement = function (nums) {
    let res = 0
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        if(num == 0) {
            res = nums[i]
            num++
        }else if(res == nums[i]){
            num++
        }else {
            num--
        }
    }
    return res
};


console.time()

console.log(majorityElement(nums))

console.timeEnd()