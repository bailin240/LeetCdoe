"use strict"

/**
 * 给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
 * 如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的
 * 返回所有不常用单词的列表
 * 您可以按任何顺序返回列表
 * 
 * 示例 1：
 *  输入：A = "this apple is sweet", B = "this apple is sour"
 *  输出：["sweet","sour"]
 * 
 * 示例 2：
 *  输入：A = "apple apple", B = "banana"
 *  输出：["banana"]
 * 
 * 提示：
 *  0 <= A.length <= 200
 *  0 <= B.length <= 200
 *  A 和 B 都只包含空格和小写字母
 * 
 */





/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 * 执行用时 : 88 ms, 在Uncommon Words from Two Sentences的JavaScript提交中击败了94.74% 的用户
 * 内存消耗 : 33.9 MB, 在Uncommon Words from Two Sentences的JavaScript提交中击败了0.00% 的用户
 */
let A = "this apple is sweet",
    B = "this apple is sour"
var uncommonFromSentences = function (A, B) {
    let obj = {}
    let res = []
    let Aarr = A.split(' ')
    let Barr = B.split(' ')
    for (let i = 0; i < Aarr.length; i++) {
        if (!obj[Aarr[i]]) {
            obj[Aarr[i]] = 1
        } else {
            obj[Aarr[i]] += 1
        }
    }
    for (let i = 0; i < Barr.length; i++) {
        if (!obj[Barr[i]]) {
            obj[Barr[i]] = 1
        } else {
            obj[Barr[i]] += 1
        }
    }
    for (let index in obj) {
        if (obj[index] == 1) res.push(index)
    }
    return res
};





/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 * 执行用时 : 88 ms, 在Uncommon Words from Two Sentences的JavaScript提交中击败了94.74% 的用户
 * 内存消耗 : 34.3 MB, 在Uncommon Words from Two Sentences的JavaScript提交中击败了0.00% 的用户
 */
var uncommonFromSentences = function(A, B) {
    let obj = {}
    let res = []
    let arr = [...A.split(' '),...B.split(' ')]
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }
    }
    for(let index in obj) {
        if(obj[index] == 1) res.push(index)
    }
    return res
};





/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 * 执行用时 : 88 ms, 在Uncommon Words from Two Sentences的JavaScript提交中击败了94.74% 的用户
 * 内存消耗 : 34.5 MB, 在Uncommon Words from Two Sentences的JavaScript提交中击败了0.00% 的用户
 */
var uncommonFromSentences = function(A, B) {
    let obj = {}
    let res = []
    let arr = [...A.split(' '),...B.split(' ')]
    arr.map((v) => !obj[v] ? obj[v] = 1:obj[v] += 1)
    for(let index in obj) {
        if(obj[index] == 1) res.push(index)
    }
    return res
};

console.time()

console.log(uncommonFromSentences(A, B))

console.timeEnd()