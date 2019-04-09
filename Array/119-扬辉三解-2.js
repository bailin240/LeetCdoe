"use strict"


/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行
 *      [1]
 *     [1,1]
 *    [1,2,1]
 *   [1,3,3,1]
 *  [1,4,6,4,1]
 * 在杨辉三角中，每个数是它左上方和右上方的数的和
 * 
 * 示例:
 *  输入: 3
 *  输出: [1,3,3,1]
 * 
 * 进阶：
 *  你可以优化你的算法到 O(k) 空间复杂度吗? 
 */




 
/**
 * @param {number} rowIndex
 * @return {number[]}
 * 执行用时 : 140 ms, 在Pascal's Triangle II的JavaScript提交中击败了5.63% 的用户
 * 内存消耗 : 34.7 MB, 在Pascal's Triangle II的JavaScript提交中击败了0.00% 的用户
 */
let num = 3
var getRow = function (rowIndex) {
    let arr = []
    for (let i = 1; i <= rowIndex + 1; i++) {
        let s = []
        for (let j = 0; j < i; j++) {
            if (j == 0 || j - i == -1) {
                s[j] = 1
            } else {
                s[j] = arr[i-2][j - 1] + arr[i-2][j]
            }
        }
        arr.push(s)
    }
    return arr[rowIndex]
};




/**
 * @param {number} rowIndex
 * @return {number[]}
 * 执行用时 : 124 ms, 在Pascal's Triangle II的JavaScript提交中击败了6.62% 的用户
 * 内存消耗 : 33.6 MB, 在Pascal's Triangle II的JavaScript提交中击败了0.00% 的用户
 */
var getRow = function (rowIndex) {
    let res = new Array(rowIndex + 1).fill(1);
    for (let i = 2; i <= rowIndex; ++i) {
        for (let j = i - 1; j > 0; --j) {
            res[j] = res[j] + res[j - 1];
        }
    }
    return res;
};


console.time()

console.log(getRow(num))

console.timeEnd()