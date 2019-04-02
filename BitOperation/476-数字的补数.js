"use strict"

/***
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反
 * 注意:
 *  给定的整数保证在32位带符号整数的范围内
 *  你可以假定二进制数不包含前导零位
 * 
 * 示例 1:
 *  输入: 5
 *  输出: 2
 *  解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2
 * 
 * 示例 2:
 *  输入: 1
 *  输出: 0
 *  解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0
 */

 /**
 * @param {number} num
 * @return {number}
 */
let num = 5
var findComplement = function (num) {
    let str = num.toString(2).split('')
    let res = ''
    for (let i = 0; i < str.length; i++) {
        res += str[i] === '0' ? '1' : '0'
    }
    return parseInt(res,2)
};


var findComplement = function (num) {
    return parseInt(num.toString(2).split('').map((v) =>{
        return v === '0' ? '1' : '0'
    }).toString().replace(/\,/g, ''),2)
};

console.time()

console.log(findComplement(num))

console.timeEnd()