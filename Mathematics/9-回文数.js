"use strict"

/**
 * @param {number} x
 * @return {boolean}
 */
var str = -121;
// 利用 数组反转
// var isPalindrome = function(x) {
//     if(x < 0) return false
//     let n = String(Math.abs(x)).split('').reverse().join('')
//     return x == n;
// };

// 不将整数转换为字符串来解决
var isPalindrome = function (x) {
    if (x < 0 || x % 10 === 0 && x != 0) return false
    let n = 0
    while (x > n) {
        n = n * 10 + x % 10
        x = parseInt(x / 10)
    }
    return x == n || x == parseInt(n / 10)
};

console.time()

console.log(isPalindrome(str))

console.timeEnd()