"use strict"

/**
 * 编写一个函数来查找字符串数组中的最长公共前缀
 * 如果不存在公共前缀，返回空字符串 ""
 * 示例 1:
 *  输入: ["flower","flow","flight"]
 *  输出: "fl"
 * 示例 2:
 *  输入: ["dog","racecar","car"]
 *  输出: ""
 *  解释: 输入不存在公共前缀
 * 
 * 说明:
 *  所有输入只包含小写字母 a-z 
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length == 0) return ""
    let str = String(strs[0])
    let n = str.length
    for (let i = 1; i < strs.length; i++) {
        str = str.slice(0, n)
        while (strs[i].indexOf(str) != 0) {
            str = str.slice(0, --n)
            if(str.length === 0 ) return ""
        }
    }
    return str
};


var longestCommonPrefix = function (strs) {
    return strs[0].split('').reduce((r, c, i) => {
        let cache = strs.reduce((j, k) => {
            let cache = k.substr(0, i)
            j[cache] = cache
            return j
        }, {})
        return Object.keys(cache).length === 1 ? Object.values(cache) : r
    }, '').toString()
};

console.time()

console.log(longestCommonPrefix(strs))

console.timeEnd()