"use strict"

/**
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数
 * 你可以返回任何满足上述条件的数组作为答案
 * 
 * 示例：
 *  输入：[4,2,5,7]
 *  输出：[4,5,2,7]
 *  解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受
 * 
 * 提示：
 *  2 <= A.length <= 20000
 *  A.length % 2 == 0
 *  0 <= A[i] <= 1000
 */

 /**
 * @param {number[]} A
 * @return {number[]}
 */
let arr = [4, 2, 5, 7]
var sortArrayByParityII = function (A) {
    let res = []
    let l = A.filter((v) => {
        return v % 2 == 0
    })
    let y = A.filter((v) => {
        return v % 2 != 0
    })
    for (let i = 0; i < l.length; i++) {
        res.push(l[i])
        res.push(y[i])
    }
    return res
};

var sortArrayByParityII = function (A) {
    let res = []
    let l = []
    let y = []
    for (let j = 0; j < A.length; j++) {
        A[j] % 2 == 0 ? l.push(A[j]) : y.push(A[j])
    }
    for (let i = 0; i < l.length; i++) {
        res.push(l[i])
        res.push(y[i])
    }
    return res
};

console.time()

console.log(sortArrayByParityII(arr))

console.timeEnd()