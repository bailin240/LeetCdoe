"use strict"

/**
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次
 * 返回重复了 N 次的那个元素
 * 
 * 示例 1：
 * 输入：[1,2,3,3]
 * 输出：3
 * 
 * 示例 2：
 * 输入：[2,1,2,5,3,2]
 * 输出：2
 * 
 * 示例 3：
 * 输入：[5,1,5,2,5,3,5,4]
 * 输出：5
 * 
 * 提示：
 * 4 <= A.length <= 10000
 * 0 <= A[i] < 10000
 * A.length 为偶数
 */

 /**
 * @param {number[]} A
 * @return {number}
 */
let arr = [2, 1, 2, 5, 3, 2]
var repeatedNTimes = function(A) {
    let obj = {}
    A.map((v)=> {
        obj[v] == undefined ? obj[v] = 0 : obj[v] = v
    })
    return Object.values(obj).filter((v) => {
        return v!= 0
    }).toString()
};


var repeatedNTimes1 = function (A) {
    let res = null
    let obj = {}
    for (let i = 0; i < A.length; i++) {
        let item = A[i]
        if(obj[item] == undefined) {
            obj[item] = 0
        } else {
            res = item
            break;
        }
    }
    return res
};

console.time()

console.log(repeatedNTimes(arr))

console.timeEnd()