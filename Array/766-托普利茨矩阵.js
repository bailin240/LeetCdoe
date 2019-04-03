"use strict"


/**
 * 如果一个矩阵的每一方向由左上到右下的对角线上具有相同元素，那么这个矩阵是托普利茨矩阵
 * 给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True
 * 
 * 示例 1:
 *  输入:  matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
 *  输出: True
 * 解释: 在上述矩阵中, 其对角线为:
 *  "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"
 *  各条对角线上的所有元素均相同, 因此答案是True
 * 
 * 示例 2:
 *  输入: matrix = [[1,2],[2,2]]
 *  输出: False
 * 解释: 对角线"[1, 2]"上的元素不同
 * 
 * 说明:
 *  matrix 是一个包含整数的二维数组
 *  matrix 的行数和列数均在 [1, 20]范围内
 *  matrix[i][j] 包含的整数在 [0, 99]范围内
 * 
 */


 
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
let nums = [
    [1,2,3,4],
    [5,1,2,3],
    [9,5,1,2]
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