"use strict"

/**
 * 我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为100个单位，
 * 如果我们在写某个字母的时候会使这行超过了100 个单位，那么我们应该把这个字母写到下一行。我们给定了一个数组 widths 
 * 这个数组 widths[0] 代表 'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位
 * 
 * 现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为2的整数列表返回
 * 
 * 示例 1:
 *  输入: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],S = "abcdefghijklmnopqrstuvwxyz"
 *  输出: [3, 60]
 * 解释: 
 *  所有的字符拥有相同的占用单位10。所以书写所有的26个字母，
 *  我们需要2个整行和占用60个单位的一行
 * 
 * 示例 2:
 *  输入: 
 *  widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
 *  S = "bbbcccdddaaa"
 *  输出: [2, 4]
 * 解释: 
 *  除去字母'a'所有的字符都是相同的单位10，并且字符串 "bbbcccdddaa" 将会覆盖 9 * 10 + 2 * 4 = 98 个单位.
 *  最后一个字母 'a' 将会被写到第二行，因为第一行只剩下2个单位了
 *  所以，这个答案是2行，第二行有4个单位宽度
 * 
 * 注:
 *  字符串 S 的长度在 [1, 1000] 的范围
 *  S 只包含小写字母
 *  widths 是长度为 26的数组
 *  widths[i] 值的范围在 [2, 10]
 */


/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 * 执行用时 : 92 ms, 在Number of Lines To Write String的JavaScript提交中击败了23.81% 的用户
 * 内存消耗 : 34.7 MB, 在Number of Lines To Write String的JavaScript提交中击败了0.00% 的用户
 */
let widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    S = "abcdefghijklmnopqrstuvwxyz"
var numberOfLines = function (widths, S) {
    let str = S.split('')
    let res = [1, 0]
    let n = 0
    for (let i = 0; i < str.length; i++) {
        let item = str[i]
        let code = widths[item.charCodeAt() - 97]
        if (n + code > 100) {
            res[0] = res[0] + 1;
            n = code
        } else {
            n = code + n
        }
    }
    res[1] = n
    return res
};

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 * 执行用时 : 92 ms, 在Number of Lines To Write String的JavaScript提交中击败了23.81% 的用户
 * 内存消耗 : 34.6 MB, 在Number of Lines To Write String的JavaScript提交中击败了0.00% 的用户
 */
let widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    S = "abcdefghij"
var numberOfLines = function (widths, S) {

    return S.split('').reduce((a,b) => {
        let code = widths[b.charCodeAt() - 97]
        if(a[1] + code > 100){
            a[0] = a[0] + 1;
            a[1] = code
        }else{
            a[1] = code + a[1]
        }
        return a
    },[1,0])
};

console.time()

console.log(numberOfLines(widths, S))

console.timeEnd()