"use strict"

/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数
 * 
 * 示例:
 *  输入: 38
 *  输出: 2
 *  解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2
 * 
 * 进阶:
 *  你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
 */

 /**
 * @param {number} num
 * @return {number}
 * 执行用时 : 132 ms, 在Add Digits的JavaScript提交中击败了26.46% 的用户
 * 内存消耗 : 36.1 MB, 在Add Digits的JavaScript提交中击败了0.00% 的用户
 */
let num = 38
var addDigits = function(num) {
    if (num <= 9 ) return num
    return addDigits(String(num).split('').reduce((a, b) => Number(a) + Number(b), 0))
};


/**
 * @param {number} num
 * @return {number}
 * 执行用时 : 184 ms, 在Add Digits的JavaScript提交中击败了8.01% 的用户
 * 内存消耗 : 35.8 MB, 在Add Digits的JavaScript提交中击败了0.00% 的用户
 */
let num = 38
var addDigits = function (num) {
    if (num <= 9) return num
    return addDigits(String(num).split('').reduce((a, b) => Number(a) + Number(b), 0))
};

/**
 * @param {number} num
 * @return {number}
 * 数学解法 数字根公式
 * 执行用时 : 132 ms, 在Add Digits的JavaScript提交中击败了26.46% 的用户
 * 内存消耗 : 35.2 MB, 在Add Digits的JavaScript提交中击败了0.00% 的用户
 */
let num = 38
var addDigits = function (num) {
    return (num -1) % 9 + 1
};

console.time()

console.log(addDigits(num))

console.timeEnd()