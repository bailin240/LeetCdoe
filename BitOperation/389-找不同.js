"use strict"

/**
 * 给定两个字符串 s 和 t，它们只包含小写字母
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母
 * 请找出在 t 中被添加的字母
 * 
 * 示例:
 *  输入：s = "abcd",t = "abcde"
 *  输出：e
 *  解释：'e' 是那个被添加的字母
 */





/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 执行用时 : 128 ms, 在Find the Difference的JavaScript提交中击败了20.61% 的用户
 * 内存消耗 : 36.1 MB, 在Find the Difference的JavaScript提交中击败了0.00% 的用户
 */
let s = "acdb",
    t = "abcde"
var findTheDifference = function (s, t) {
    let l = s.split('')
    let y = t.split('')
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < y.length; j++) {
            if (l[i] === y[j]) {
                y.splice(j, 1)
                break;
            }
        }
    }
    return y.pop()
};



/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 执行用时 : 116 ms, 在Find the Difference的JavaScript提交中击败了27.63% 的用户
 * 内存消耗 : 37.4 MB, 在Find the Difference的JavaScript提交中击败了0.00% 的用户
 */
var findTheDifference = function (s, t) {
    if (s.length == 0) return t.toString()
    let res = s.charCodeAt(0)
    let arr = [...s.split(''), ...t.split('')]
    for (let i = 1; i < arr.length; i++) {
        res = res ^ arr[i].charCodeAt()
    }
    return String.fromCharCode(res)
};


console.time()

console.log(findTheDifference(s, t))

console.timeEnd()