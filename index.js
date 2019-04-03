"use strict"

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
let nums = [
    [1, 2],
    [2, 2]
]
var isToeplitzMatrix = function (matrix) {
    for (let i = 1; i < matrix.length; i++) {
        let item = matrix[i]
        for (let j = 1; j < item.length; j++) {
            let ite = item[j]
            if (matrix[i - 1][j - 1] != ite) {
                return false
            }
        }
    }
    return true
};


console.time()

console.log(isToeplitzMatrix(nums))

console.timeEnd()