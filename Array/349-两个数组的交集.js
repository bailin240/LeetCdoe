"use strict"

/**
 * 给定两个数组，编写一个函数来计算它们的交集
 * 
 * 示例 1:
 *  输入: nums1 = [1,2,2,1], nums2 = [2,2]
 *  输出: [2]
 * 
 * 示例 2:
 *  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *  输出: [9,4]
 * 
 * 说明:
 *  输出结果中的每个元素一定是唯一的
 *  我们可以不考虑输出结果的顺序
 */




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 执行用时 : 152 ms, 在Intersection of Two Arrays的JavaScript提交中击败了9.07% 的用户
 * 内存消耗 : 34.1 MB, 在Intersection of Two Arrays的JavaScript提交中击败了0.00% 的用户
 */
let nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
var intersection = function (nums1, nums2) {
    let n1 = new Set(nums1)
    let n2 = new Set(nums2)
    let res = []
    n1.forEach((v) => {
        n2.has(v) ? res.push(v) : ''
    })
    return res
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 执行用时 : 124 ms, 在Intersection of Two Arrays的JavaScript提交中击败了15.98% 的用户
 * 内存消耗 : 33.7 MB, 在Intersection of Two Arrays的JavaScript提交中击败了0.00% 的用户
 */
let nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
var intersection = function (nums1, nums2) {
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        let item = nums1[i]
        if(nums2.includes(item)) res.push(item)
    }
    return [...new Set(res)]
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 执行用时 : 108 ms, 在Intersection of Two Arrays的JavaScript提交中击败了29.98% 的用户
 * 内存消耗 : 34.4 MB, 在Intersection of Two Arrays的JavaScript提交中击败了0.00% 的用户
 */
let nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
var intersection = function (nums1, nums2) {
    return nums1.reduce((a, b) => {
         if(nums2.includes(b) && !a.includes(b)) a.push(b);
         return a
    }, [])
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 执行用时 : 92 ms, 在Intersection of Two Arrays的JavaScript提交中击败了52.86% 的用户
 * 内存消耗 : 33.5 MB, 在Intersection of Two Arrays的JavaScript提交中击败了0.00% 的用户
 */
let nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
var intersection = function (nums1, nums2) {
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        let item = nums1[i]
        if(nums2.includes(item) && !res.includes(item)) res.push(item)
    }
    return res
};

console.time()

console.log(intersection(nums1, nums2))

console.timeEnd()