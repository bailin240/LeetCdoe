"use strict"


/**
 * 给出一个整数数组 A 和一个查询数组 queries
 * 对于第 i 次查询，有 val = queries[i][0], index = queries[i][1]，我们会把 val 加到 A[index] 上。然后，第 i 次查询的答案是 A 中偶数值的和
 * （此处给定的 index = queries[i][1] 是从 0 开始的索引，每次查询都会永久修改数组 A。）
 * 返回所有查询的答案。你的答案应当以数组 answer 给出，answer[i] 为第 i 次查询的答案
 * 
 * 示例：
 *  输入：A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
 *  输出：[8,6,2,4]
 *  解释：
 *  开始时，数组为 [1,2,3,4]
 *  将 1 加到 A[0] 上之后，数组为 [2,2,3,4]，偶数值之和为 2 + 2 + 4 = 8
 *  将 -3 加到 A[1] 上之后，数组为 [2,-1,3,4]，偶数值之和为 2 + 4 = 6
 *  将 -4 加到 A[0] 上之后，数组为 [-2,-1,3,4]，偶数值之和为 -2 + 4 = 2
 *  将 2 加到 A[3] 上之后，数组为 [-2,-1,3,6]，偶数值之和为 -2 + 6 = 4
 * 
 */


/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 * 
 * 超时 时间太长了
 */
let A = [1, 2, 3, 4]
let qeries = [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
]
var sumEvenAfterQueries = function (A, queries) {
    return queries.map((v) => {
        A[v[1]] = A[v[1]] + v[0]
        return A.filter((v) => {
            return v % 2 === 0
        }).reduce((a, b) => {
            return Number(a) + Number(b)
        }, [])
    })
};


/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 * 优化后
 */
var sumEvenAfterQueries = function (A, queries) {
    let sum = 0
    let res = []
    for (let i = 0; i < A.length; i++) {
        A[i] % 2 === 0 ? sum += A[i] : ''
    }
    for (let j = 0; j < queries.length; j++) {
        let v = queries[j]
        // 判断 A 数组下标为 v[1] 的值 原始数 是否来偶数
        if (A[v[1]] % 2 == 0) {
            // 新增数为偶数 总合 加上新增数; 新增数为奇数 总合减去原始数
            v[0] % 2 === 0 ? sum += v[0] : sum = sum - A[v[1]]
        // 原始数据为奇数
        } else {
            // 新增数为偶数 总合值不变 ； 新增数为奇数 总合 加上原始数加上新增数
            v[0] % 2 === 0 ? '' : sum = sum + A[v[1]] + v[0]
        }
        // 改变原始数组上下标值
        A[v[1]] = A[v[1]] + v[0]
        res.push(sum)
    }
    return res
};



console.time()

console.log(sumEvenAfterQueries(A, qeries))

console.timeEnd()