"use strict"

/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行
 * 在杨辉三角中，每个数是它左上方和右上方的数的和
 * 
 * 示例:
 *  输入: 5
 *  输出:
 *  [
 *       [1],
 *      [1,1],
 *     [1,2,1], 
 *    [1,3,3,1],
 *   [1,4,6,4,1]
 *  ]
 */



 /**
 * @param {number} numRows
 * @return {number[][]}
 * 执行用时 : 144 ms, 在Pascal's Triangle的JavaScript提交中击败了5.78% 的用户
 * 内存消耗 : 33.5 MB, 在Pascal's Triangle的JavaScript提交中击败了0.00% 的用户
 */
let num = 5
var generate = function (numRows) {
    let arr = []
    for (let i = 1; i <= numRows; i++) {
        if (i == 1) {
            arr.push([1])
            continue;
        } else {
            arr.push(new Array(i))
            arr[i - 1][0] = arr[i - 1][arr[i - 1].length - 1] = 1
            continue
        }
    }
   arr.map((v,index) => {
        for(let i = 0; i <v.length;i++) {
            if(v[i] === undefined) {
                v[i] = arr[index-1][i] + arr[index-1][i-1]
            }
        }
    })
    return arr
};


/**
 * @param {number} numRows
 * @return {number[][]}
 * 执行用时 : 92 ms, 在Pascal's Triangle的JavaScript提交中击败了26.70% 的用户
 * 内存消耗 : 33.5 MB, 在Pascal's Triangle的JavaScript提交中击败了0.00% 的用户
 */
var generate = function (numRows) {
    let arr = []
    for (let i = 1; i <= numRows; i++) {
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
    return arr
};

console.time()

console.log(generate(num))

console.timeEnd()