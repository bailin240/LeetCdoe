"use strict"

/***
 * 写一个程序，输出从 1 到 n 数字的字符串表示
 * 如果 n 是3的倍数，输出“Fizz”
 * 如果 n 是5的倍数，输出“Buzz”
 * 如果 n 同时是3和5的倍数，输出 “FizzBuzz”
 * 
 * 示例：
 * 输入：n = 15
 * 输出：["1", "2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * 
 */




 

 /**
 * @param {number} n
 * @return {string[]}
 * 执行用时 : 140 ms, 在Fizz Buzz的JavaScript提交中击败了10.05% 的用户
 * 内存消耗 : 37.4 MB, 在Fizz Buzz的JavaScript提交中击败了0.00% 的用户
 */
let n = 15
var fizzBuzz = function (n) {
    let res = []
    while (n > 0) {
        if(n%3===0 && n%5===0) res.unshift('FizzBuzz')
        else if(n%3===0) res.unshift('Fizz')
        else if(n%5===0) res.unshift('Buzz')
        else res.unshift(n.toString())
        --n
    }
    return res
};

/**
 * @param {number} n
 * @return {string[]}
 * 执行用时 : 116 ms, 在Fizz Buzz的JavaScript提交中击败了25.00% 的用户
 * 内存消耗 : 37.5 MB, 在Fizz Buzz的JavaScript提交中击败了0.00% 的用户
 */
let n = 15
var fizzBuzz = function (n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz')
            continue
        } else if (i % 3 === 0) {
            res.push('Fizz')
            continue
        } else if (i % 5 === 0) {
            res.push('Buzz')
            continue
        } else {
            res.push(i + '')
        }
    }
    return res
};

console.time()

console.log(fizzBuzz(n))

console.timeEnd()