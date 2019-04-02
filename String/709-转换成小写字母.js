"use strict"
/**
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * 示例 1：
 * 输入: "Hello"
 * 输出: "hello"
 * 示例 2：
 * 输入: "here"
 * 输出: "here"
 * 示例 3：
 * 输入: "LOVELY"
 * 输出: "lovely"
 */

 /**
 * @param {string} str
 * @return {string}
 */


var toLowerCase = function(str) {
    let obj = {
        'A': 'a',
        'B': 'b',
        'C': 'c',
        'D': 'd',
        'E': 'e',
        'F': 'f',
        'G': 'g',
        'H': 'h',
        'I': 'i',
        'J': 'j',
        'K': 'k',
        'L': 'l',
        'M': 'm',
        'N': 'n',
        'O': 'o',
        'P': 'p',
        'Q': 'q',
        'R': 'r',
        'S': 's',
        'T': 't',
        'U': 'u',
        'V': 'v',
        'W': 'w',
        'X': 'x',
        'Y': 'y',
        'Z': 'z'
    }
    let s = str.split('')
    let n = ''
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] != undefined ? n += obj[s[i]] : n += s[i]
    }
    return n
};

/**
 * 利用 code 值 
 * 小写字母与大字之间相关正好32
 * charCodeAt() 获取 code 值
 * String.fromCharCode(code) 将 code 值转为字符串
 **/
let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var toLowerCase1 = function (str) {
    let n = '';
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        let code = str[i].charCodeAt()
        if (code >= 65 && code <= 90) {
           code += 32
        }
        n += String.fromCharCode(code)
    }
    return n
    
};
console.time()

console.log(toLowerCase(str))
console.log(toLowerCase1(str1))

console.timeEnd()