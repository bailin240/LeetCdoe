"use strict"

/**
 * 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）
 * 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false
 * 
 * 示例 1：
 *  输入：[0,1,1]
 *  输出：[true,false,false]
 * 解释：
 *  输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真
 * 
 * 示例 2：
 *  输入：[1,1,1]
 *  输出：[false,false,false]
 * 
 * 示例 3：
 *  输入：[0,1,1,1,1,1]
 *  输出：[true,false,false,false,true,false]
 * 
 * 示例 4：
 *  输入：[1,1,1,0,1]
 *  输出：[false,false,false,false,false]
 * 
 * 提示：
 *  1 <= A.length <= 30000
 *  A[i] 为 0 或 1
 * 
 * 
 * 思路：
 *  [1,1,1,0,1]
 *  第一步：[1] = 0*2+1 = 1;			被5取模=1
 *  第二步：[1,1] = 1*2+1 = 3;			被5取模=3
 *  第三步：[1,1,1] = 3*2+1 = 7;		被5取模=2
 *  第四步：[1,1,1,0] = 7*2+0 = 14;     被5取模=4
 *  第五步：[1,1,1,0,1] = 14*2+1 = 29;	被5取模=4
 *  如果每步计算2的幂，结果会越来越大，java没有基本类型可以承受如此大的结果
 *  考虑采用每次结果的模进行计算
 *  第一步：[1] = (0*2+1)%5 = 1;	    被5取模=1
 *  第二步：[1,1] = (1*2+1)%5 = 3;		被5取模=3
 *  第三步：[1,1,1] = (3*2+1)%5 = 2;	被5取模=2
 *  第四步：[1,1,1,0] = (2*2+0)%5 = 4;	被5取模=4
 *  第五步：[1,1,1,0,1] = (4*2+1)%5 = 4;被5取模=4
 */


/**
 * @param {number[]} A
 * @return {boolean[]}
 * 执行用时 : 180 ms, 在Binary Prefix Divisible By 5的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 37.6 MB, 在Binary Prefix Divisible By 5的JavaScript提交中击败了100.00% 的用户
 */
let A = [0, 1, 1, 1, 1, 1]
var prefixesDivBy5 = function (A) {
    let num = 0
    return A.map((v) => {
        num = ((num << 1) + v) % 5;
        return num % 5 === 0
    })
};


 /**
 * @param {number[]} A
 * @return {boolean[]}
 * 执行用时 : 172 ms, 在Binary Prefix Divisible By 5的JavaScript提交中击败了100.00% 的用户
 * 内存消耗 : 38 MB, 在Binary Prefix Divisible By 5的JavaScript提交中击败了100.00% 的用户
 */
let A = [1,1,1,0,1]
var prefixesDivBy5 = function (A) {
    let res = []
    let str = 0
    for (let i = 0; i < A.length; i++) {
        str = (str * 2 + A[i]) % 5;
        str === 0 ? res.push(true) : res.push(false)
    }
    return res
};

console.time()

console.log(prefixesDivBy5(A))

console.timeEnd()