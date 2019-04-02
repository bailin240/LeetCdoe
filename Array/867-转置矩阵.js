"use strict"

/**
 * 给定一个矩阵 A， 返回 A 的转置矩阵
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引
 * 
 * 示例 1：
 *  输入：[[1,2,3],[4,5,6],[7,8,9]]
 *  输出：[[1,4,7],[2,5,8],[3,6,9]]
 * 
 * 示例 2：
 *  输入：[[1,2,3],[4,5,6]]
 *  输出：[[1,4],[2,5],[3,6]]
 * 
 * 提示：
 *  1 <= A.length <= 1000
 *  1 <= A[0].length <= 1000
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 * 执行用时 : 120 ms, 在Transpose Matrix的JavaScript提交中击败了27.88% 的用户
 * 内存消耗 : 37 MB, 在Transpose Matrix的JavaScript提交中击败了0.00% 的用户
 */
let A = [[1,2,3],[4,5,6]]
var transpose = function (A) {
    return A[0].map((v,i) =>A.map((a,j) =>a[i]))
};

/**
 * @param {number[][]} A
 * @return {number[][]}
 * 执行用时 : 164 ms, 在Transpose Matrix的JavaScript提交中击败了7.06% 的用户
 * 内存消耗 : 37 MB, 在Transpose Matrix的JavaScript提交中击败了0.00% 的用户
 */
let A =[[1,2,3],[4,5,6],[7,8,9]]
var transpose = function (A) {
    let res = []
    let len = A[0].length
    while (len > 0) {
        let str = []
        for (let i = 0; i < A.length; i++) {
            str.push(A[i][A[i].length - len])
        }
        len--
        res.push(str)
    }
    return res
};

console.time()

console.log(transpose(A))

console.timeEnd()