"use strict"



/** 
 * 给定一个正整数 N，找到并返回 N 的二进制表示中两个连续的 1 之间的最长距离
 * 如果没有两个连续的 1，返回 0
 * 
 * 示例 1：
 *  输入：22
 *  输出：2
 * 解释：
 *  22 的二进制是 0b10110
 *  在 22 的二进制表示中，有三个 1，组成两对连续的 1
 *  第一对101连续的 1 中，两个 1 之间的距离为 2
 *  第二对11连续的 1 中，两个 1 之间的距离为 1 
 *  答案取两个距离之中最大的，也就是 2 
 * 
 * 示例 2：
 *  输入：5
 *  输出：2
 * 解释：5 的二进制是 0b101 
 * 
 * 示例 3：
 *  输入：6
 *  输出：1
 *  解释：6 的二进制是 0b110
 * 
 * 示例 4：
 *  输入：8
 *  输出：0
 * 解释：
 *  8 的二进制是 0b1000,在 8 的二进制表示中没有连续的 1，所以返回 0
 * 
 * 提示：
 *  1 <= N <= 10^9
 * 
*/





/**
 * @param {number} N
 * @return {number}
 * 执行用时 : 104 ms, 在Binary Gap的JavaScript提交中击败了27.00% 的用户
 * 内存消耗 : 33.5 MB, 在Binary Gap的JavaScript提交中击败了0.00% 的用户
 */
let num = 22
var binaryGap = function (N) {
    let res = 0;
    let str = N.toString(2).split('')
    let l = 0
    let y = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1' && l == 0) {
            l = i + 1
            continue
        }
        if (str[i] == '1') {
            y = i
            res = Math.max(res, y - l + 1)
            l = y + 1
        }
    }
    return res
};





/**
 * @param {number} N
 * @return {number}
 * 执行用时 : 92 ms, 在Binary Gap的JavaScript提交中击败了40.00% 的用户
 * 内存消耗 : 34.1 MB, 在Binary Gap的JavaScript提交中击败了0.00% 的用户
 */
var binaryGap = function(N) {
    let res = 0;
    let str = N.toString(2).split('')
    let l = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1') {
            res = Math.max(res, i - l)
            l = i
        }
    }
    return res
};



console.time()

console.log(binaryGap(num))

console.timeEnd()