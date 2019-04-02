"use strict"

/**
 * 给定一个正整数，检查他是否为交替位二进制数：换句话说，就是他的二进制数相邻的两个位数永不相等
 * 示例 1:
 *  输入: 5
 *  输出: True
 *  解释: 5的二进制数是: 101
 * 
 * 示例 2:
 *  输入: 7
 *  输出: False
 *  解释: 7的二进制数是: 111
 * 
 * 示例 3:
 *  输入: 11
 *  输出: False
 *  解释: 11的二进制数是: 1011
 * 
 * 示例 4:
 *  输入: 10
 *  输出: True
 *  解释: 10的二进制数是: 1010
 */


/**
 * @param {number} n
 * @return {boolean}
 * 执行用时 : 128 ms, 在Binary Number with Alternating Bits的JavaScript提交中击败了7.56% 的用户
 * 内存消耗 : 33.5 MB, 在Binary Number with Alternating Bits的JavaScript提交中击败了0.00% 的用户
 */
let A = 10
var hasAlternatingBits = function(n) {
    let arr = n.toString(2).split('')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) return false
    }
    return true
};


/**
 * @param {number} n
 * @return {boolean}
 * 执行用时 : 108 ms, 在Binary Number with Alternating Bits的JavaScript提交中击败了18.49% 的用户
 * 内存消耗 : 33.6 MB, 在Binary Number with Alternating Bits的JavaScript提交中击败了0.00% 的用户
 */
let A = 10
var hasAlternatingBits = function (n) {
    let f = n >> 1;
    return !((n ^ f) & ((n ^ f) + 1));
};


console.time()

console.log(hasAlternatingBits(A))

console.timeEnd()