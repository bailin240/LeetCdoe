"use strict"

/**
 * @param {number} x
 * @return {number}
 * 打败 39.33% 
 */
var str = 1534236469

// 最牛的写法 不是自己写的
var reverse = function (x) {
    let result = 0;
    
    while(x != 0) {
        result = result * 10 + x % 10;
        x = parseInt(x / 10);
    }
    
    
    if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return result;
};

var reverse = function (x) {
    let num = null;
    let min = Math.pow(-2, 31);
    let max = Math.pow(2, 31);
    let s = x.toString().split('').reverse()
    if (s[s.length - 1] == '-') {
        num = -(parseInt(s.toString().replace(/[,\-]/ig, '')))
    } else {
        num = parseInt(s.toString().replace(/[,]/ig, ''))
    }
    return (min < num && num < max) ? num : 0
};

var reverse = function (x) {
    let n = Math.abs(x).toString().split('').reverse().join()
    let res = null
    if (x < 0) {
        res = -(parseInt(n.replace(/,/g, '')))
    } else if (x > 0) {
        res = parseInt(n.replace(/,/g, ''))
    }
    if (res < Math.pow(2, 31) - 1 && res > Math.pow(-2, 31)) {
        return res
    } else {
        return 0
    }
};

var reverse = function(x) {
    let res;
    let n = String(Math.abs(x)).split('').reverse().join('')
    x > 0 ? res = parseInt(n) : res = -(parseInt(n));
   return (res > Math.pow(-2,31) && res < Math.pow(2,31) -1) ? res: 0
}
console.time()

console.log(reverse(str))

console.timeEnd()