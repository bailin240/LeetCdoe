"use strict"

/***
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 *  输入: [2,2,1]
 *  输出: 1
 * 
 * 示例 2:
 *  输入: [4,1,2,1,2]
 *  输出: 4
 * 
 * 考点 异或运算符的应用(PS:自己不是太清楚)
 */



/**
 * @param {number[]} nums
 * @return {number}
 * 执行用时 : 108 ms, 在Single Number的JavaScript提交中击败了55.12% 的用户
 * 内存消耗 : 37.8 MB, 在Single Number的JavaScript提交中击败了0.98% 的用户
 */
let num = [4, 1, 2, 1, 2]
var singleNumber = function (nums) {
    let obj = {}
    nums.map((v) => !obj[v] ? obj[v] = 1 : obj[v] = ++obj[v])
    return Object.keys(obj).filter((v) => obj[v] === 1).toString()
};


/**
 * @param {number[]} nums
 * @return {number}
 * 执行用时 : 128 ms, 在Single Number的JavaScript提交中击败了41.86% 的用户
 * 内存消耗 : 34.7 MB, 在Single Number的JavaScript提交中击败了0.98% 的用户
 */
var singleNumber = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res = res ^ nums[i]
    }
    return res
};

console.time()

console.log(singleNumber(num))

console.timeEnd()