"usc strict"

/**
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目
 * 给出两个整数 x 和 y，计算它们之间的汉明距离
 * 注意：
 * 0 ≤ x, y < 2(31)
 * 
 * 示例:
 *  输入: x = 1, y = 4
 *  输出: 2
 *  解释:
 *  1   (0 0 0 1)
 *  4   (0 1 0 0)
 *         ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置
 */

 /**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let res = 0;
    let xM = x.toString(2);
    let yM = y.toString(2);
    let max = Math.max(xM.length, yM.length)
    for (let i = 0; i < max; i++) {
        if (xM.length < max) {
            xM = '0' + xM
        }
        if (yM.length < max) {
            yM = '0' + yM
        }
    }
    for (let j = 0; j < xM.length; j++) {
        if (xM[j] != yM[j]) res++
    }
    return res
    
};

var hammingDistance = function (x, y) {
    return (x^y).toString(2).replace(/0/g,'').length
};

console.time()

console.log(hammingDistance(x, y))

console.timeEnd()