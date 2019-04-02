"use strict"

/**
 * 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果
 * 你需要把这些糖果平均分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数
 * 
 * 示例 1:
 *  输入: candies = [1,1,2,2,3,3]
 *  输出: 3
 * 
 * 解析:
 *  一共有三种种类的糖果，每一种都有两个。
 *  最优分配方案：妹妹获得[1,2,3],弟弟也获得[1,2,3]。这样使妹妹获得糖果的种类数最多。
 * 
 * 示例 2 :
 *  输入: candies = [1,1,2,3]
 *  输出: 2
 * 
 * 解析: 妹妹获得糖果[2,3],弟弟获得糖果[1,1]，妹妹有两种不同的糖果，弟弟只有一种。这样使得妹妹可以获得的糖果种类数最多
 * 
 * 注意:
 *  数组的长度为[2, 10,000]，并且确定为偶数
 *  数组中数字的大小在范围[-100,000, 100,000]内 
 * 
 */


/**
 * @param {number[]} candies
 * @return {number}
 * 执行用时 : 256 ms, 在Distribute Candies的JavaScript提交中击败了67.57% 的用户
 * 内存消耗 : 45.1 MB, 在Distribute Candies的JavaScript提交中击败了0.00% 的用户
 */
let A = [1,1,1,1,1,6]
var distributeCandies = function(candies) {
    let arr = [...new Set(candies)]
    return arr.length >= candies.length / 2 ? candies.length / 2 : arr.length
};


/**
 * @param {number[]} candies
 * @return {number}
 * 执行用时 : 252 ms, 在Distribute Candies的JavaScript提交中击败了68.24% 的用户
 * 内存消耗 : 43.3 MB, 在Distribute Candies的JavaScript提交中击败了4.35% 的用户
 */
let A = [1, 1, 1, 1, 1, 6]
var distributeCandies = function (candies) {
    return Math.min(candies.length / 2, new Set(candies).size)
};

 /**
 * @param {number[]} candies
 * @return {number}
 * 执行用时 : 224 ms, 在Distribute Candies的JavaScript提交中击败了81.08% 的用户
 * 内存消耗 : 44.9 MB, 在Distribute Candies的JavaScript提交中击败了4.35% 的用户
 */
let A = [1,1,1,1,1,6]
var distributeCandies = function(candies) {
    return [...new Set(candies)].length >= candies.length / 2 ? candies.length / 2 :  [...new Set(candies)].length
};


console.time()

console.log(distributeCandies(A))

console.timeEnd()