"use strict"

/***
 * 给定一个由空格分割单词的句子 S。每个单词只包含大写或小写字母
 * 我们要将句子转换为 “Goat Latin”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）
 * 山羊拉丁文的规则如下：
 *  如果单词以元音开头（a, e, i, o, u），在单词后添加"ma"
 *  例如，单词"apple"变为"applema"
 * 
 *  如果单词以辅音字母开头（即非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"
 *  例如，单词"goat"变为"oatgma"
 * 
 *  根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从1开始
 *  例如，在第一个单词后添加"a"，在第二个单词后添加"aa"，以此类推
 * 
 * 返回将 S 转换为山羊拉丁文后的句子
 * 
 * 示例 1:
 *  输入: "I speak Goat Latin"
 *  输出: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * 
 * 示例 2:
 *  输入: "The quick brown fox jumped over the lazy dog"
 *  输出: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 * 
 * 说明:
 *  S 中仅包含大小写字母和空格。单词间有且仅有一个空格
 *  1 <= S.length <= 150
 */





 /**
 * @param {string} S
 * @return {string}
 * 执行用时 : 100 ms, 在Goat Latin的JavaScript提交中击败了64.29% 的用户
 * 内存消耗 : 34.8 MB, 在Goat Latin的JavaScript提交中击败了0.00% 的用户
 */
let S = "Each word consists of lowercase and uppercase letters only"
let obj = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
}
var toGoatLatin = function (S) {
    let arr = S.split(' ')
    return arr.map((v, i, s) => {
        if (obj[v[0].toLowerCase()]) {
            v += 'ma'
            v = v.split('')
            v.length = v.length + i + 1
            return v.fill('a', v.length - i - 1).join('')
        } else {
            v = v.split('')
            v.push(v.shift())
            v = (v.join('') + 'ma').split('')
            v.length = v.length + i + 1
            return v.fill('a', v.length - i - 1).join('')
        }
    }).join(' ')
};




/**
 * @param {string} S
 * @return {string}
 * 执行用时 : 88 ms, 在Goat Latin的JavaScript提交中击败了97.62% 的用户
 * 内存消耗 : 34.3 MB, 在Goat Latin的JavaScript提交中击败了0.00% 的用户
 */
let S = "Each word consists of lowercase and uppercase letters only"
let obj = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
}
var toGoatLatin = function (S) {
    return S
        .split(' ')
        .map((v, i, s) => {
            if (obj[v[0].toLowerCase()]) {
               return v + 'ma'
            } else {
                return v.slice(1) + v.charAt(0) + 'ma'
            }
        })
        .map((v,i) => {
            return v + 'a'.repeat(i+ 1)
        }).join(' ')
};




/**
 * @param {string} S
 * @return {string}
 * 执行用时 : 144 ms, 在Goat Latin的JavaScript提交中击败了7.14% 的用户
 * 内存消耗 : 33.8 MB, 在Goat Latin的JavaScript提交中击败了0.00% 的用户
 */
let S = "Each word consists of lowercase and uppercase letters only"
var toGoatLatin = function (S) {
    return S
        .split(' ')
        .map((v, i, s) => {
            if (v.match(/^[aeiou]/i)) {
                return v + 'ma'
            } else {
                return v.slice(1) + v.charAt(0) + 'ma'
            }
        })
        .map((v, i) => {
            return v + 'a'.repeat(i + 1)
        }).join(' ')
};



console.time()

console.log(toGoatLatin(S))

console.timeEnd()