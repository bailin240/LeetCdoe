"use strict"

/***
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序
 * 
 * 示例 1:
 *  输入: "Let's take LeetCode contest"
 *  输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格
 */

 /**
 * @param {string} s
 * @return {string}
 */
let str = "Let's take LeetCode contest"
var reverseWords = function (s) {
   return s.split(' ').map((v) => {
        return v.split('').reverse().join('')
    }).join(' ')
};

var reverseWords = function(s) {
    var total = str = ''
        for (var i = 0; i < s.length; i++) {
          if (s.charCodeAt(i) == 32) {
            total += str + ' '
            str = ''
          } else {
            str = s[i] + str
          }
        }
        total += str
        return total
};

console.time()

console.log(reverseWords(str))

console.timeEnd()