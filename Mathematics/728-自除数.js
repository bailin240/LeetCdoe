"use strict"

/**
 * 自除数 是指可以被它包含的每一位数除尽的数
 * 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0
 * 还有，自除数不允许包含 0 
 * 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数
 * 
 * 示例 1：
 * 输入： 上边界left = 1, 下边界right = 22
 * 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 * 
 * 注意：
 * 每个输入参数的边界满足 1 <= left <= right <= 10000
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let left = 1
let right = 99
var selfDividingNumbers = function(left, right) {
    let res = []
    for (let i = left; i < right + 1; i++) {
        if (i < 10) {
            res.push(i)
            continue;
        }
        let num = String(i)
        let str = num.substring(num.length, num.length - 1)
        let n = num.length
        if (str == 0) continue;
        while (n > 0) {
            str = num.substring(n, n - 1)
            if (i % str == 0) {
                n--
                if (n == 0) {
                    res.push(i)
                }
            } else {
                n = 0
            }
        }
    }
    return res
};

console.time()

console.log(selfDividingNumbers(left, right))

console.timeEnd()