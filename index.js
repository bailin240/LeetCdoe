"use strict"





/**
 * @param {number} N
 * @return {number}
 */
let num = 6
var binaryGap = function (N) {
    let res = 0;
    let str = N.toString(2).split('')
    let l = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1') {
            res = Math.max(res, i - l)
            l = i
        }
    }
    return res
};




console.time()

console.log(binaryGap(num))

console.timeEnd()