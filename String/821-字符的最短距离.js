"use strict"

/**
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组
 * 
 * 示例 1:
 *  输入: S = "loveleetcode", C = 'e'
 *  输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * 
 * 说明:
 *  字符串 S 的长度范围为 [1, 10000]
 *  C 是一个单字符，且保证是字符串 S 里的字符
 *  S 和 C 中的所有字母均为小写字母
 * 
 * 解题思路左右遍历 标记出位置 值最小值
 */


/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
let S = "loveleetcode",
    C = 'e'

var shortestToChar = function (S, C) {
    return S.split('').reduce((a, b, i) => {
        S[0] === C ? a[0] = 0 : a[0] = Number.MAX_VALUE
        S[i] === C ? a[i] = 0 : a[i] = a[i - 1] + 1
        return a
    }, []).reduce((a, b, i, s) => {
        let len = s.length - 1
        if (i === 0) {
            S[len] === C ? a[len] = 0 : a[len] = s[len]
        } else {
            S[len - i] === C ? a[len - i] = 0 : s[len - i] = a[len - i] = Math.min(s[len - i], s[s.length - i] + 1)
        }
        return a
    }, [])
};

var shortestToChar = function (s, c) {
    const ans = []
    ans[0] = s[0] === c ? 0 : Number.MAX_VALUE
    for (let i = 1; i < s.length; i++) {
        if (s[i] === c) ans[i] = 0
        else ans[i] = ans[i - 1] + 1
    }
    for (let i = s.length - 2; i > -1; i--) {
        if (s[i] === c) ans[i] = 0
        else ans[i] = Math.min(ans[i + 1] + 1, ans[i])
    }
    return ans
};



console.time()

console.log(shortestToChar(S, C))

console.timeEnd()