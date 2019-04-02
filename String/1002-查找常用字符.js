"use strict"

/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
 * 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次
 * 
 * 你可以按任意顺序返回答案
 * 
 * 示例 1：
 *  输入：["bella","label","roller"]
 *  输出：["e","l","l"]
 * 
 * 示例 2：
 *  输入：["cool","lock","cook"]
 *  输出：["c","o"]
 * 
 * 提示：
 *  1 <= A.length <= 100
 *  1 <= A[i].length <= 100
 *  A[i][j] 是小写字母
 */



/**
 * @param {string[]} A
 * @return {string[]}
 * 执行用时 : 208 ms, 在Find Common Characters的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 39.9 MB, 在Find Common Characters的JavaScript提交中击败了100.00% 的用户
 */
let num = ["bella", "label", "roller"]
var commonChars = function (A) {
    let res = {}
    A.map((v, i) => {
        let obj = {}
        v.split('').map((k) => {
            if (i === 0) {
                obj[k] = obj[k] ? ++obj[k] : 1
            } else if (res[k]) {
                obj[k] = obj[k] || 0
                if (obj[k] < res[k]) {
                    obj[k] += 1
                }
            }
        })
        res = obj
    })
    return Object.keys(res).reduce((a, b) => {
        return [...a, ...Array(res[b]).fill(b)]
    }, [])
};


/**
 * @param {string[]} A
 * @return {string[]}
 * 执行用时 : 168 ms, 在Find Common Characters的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 39.8 MB, 在Find Common Characters的JavaScript提交中击败了100.00% 的用户
 */
let num = ["bella", "label", "roller"]
var commonChars = function (A) {
    let res = {}
    for (let i = 0; i < A.length; i++) {
        let str = A[i].split('')
        let obj = {}
        for (let j = 0; j < str.length; j++) {
            let item = str[j]
            if (i === 0) {
                obj[item] = obj[item] ? ++obj[item] : 1
            } else if (res[item]) {
                obj[item] = obj[item] || 0
                if (obj[item] < res[item]) {
                    obj[item] += 1
                }
            }
        }
        res = obj
    }
    return Object.keys(res).reduce((a, b) => {
        return [...a, ...Array(res[b]).fill(b)]
    }, [])
};

/**
 * @param {string[]} A
 * @return {string[]}
 * 执行用时 : 152 ms, 在Find Common Characters的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 37 MB, 在Find Common Characters的JavaScript提交中击败了100.00% 的用户
 */
let num = ["bella", "label", "roller"]
var commonChars = function (A) {
    let arr = A[0].split('')
    for (let i = 1; i < A.length; i++) {
        let arr1 = A[i].split('')
        let arr2 = []
        arr1.forEach((str) => {
            let num = arr.indexOf(str)
            if (num >= 0) {
                arr2.push(str)
                arr.splice(num, 1)
            }
        })
        arr = arr2
    }
    return arr
};

console.time()

console.log(commonChars(num))

console.timeEnd()