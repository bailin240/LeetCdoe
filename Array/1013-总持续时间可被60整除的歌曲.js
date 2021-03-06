"use strict"

/***
 * 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒
 * 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字  i < j 且有 (time[i] + time[j]) % 60 == 0
 * 示例 1：
 *  输入：[30,20,150,100,40]
 *  输出：3
 *  解释：这三对的总持续时间可被 60 整数：
 *  (time[0] = 30, time[2] = 150): 总持续时间 180
 *  (time[1] = 20, time[3] = 100): 总持续时间 120
 *  (time[1] = 20, time[4] = 40): 总持续时间 60
 * 示例 2：
 *  输入：[60,60,60]
 *  输出：3
 *  解释：所有三对的总持续时间都是 120，可以被 60 整数
 * 
 * 提示：
 *  1 <= time.length <= 60000
 *  1 <= time[i] <= 500
 */


/**
 * @param {number[]} time
 * @return {number}
 */
let arr = [384, 322, 399, 494, 320, 334, 408, 122, 247, 262, 50, 135, 19, 409, 25, 465, 260, 149, 5, 418, 51, 98, 238, 186, 356, 170, 221, 336, 46, 466, 161, 356, 231, 320, 374, 19, 421, 443, 197, 378, 142, 3, 310, 102, 12, 350, 125, 182, 47, 399, 446, 409, 390, 87, 361, 188, 74, 23, 314, 478, 411, 427, 6, 439, 208, 147, 76, 224, 135, 480, 105, 70, 251, 408, 253, 458, 157, 343, 111, 195, 195, 182, 41, 28, 308, 168, 54, 262, 430, 228, 218, 496, 2, 305, 133, 278, 360, 322, 408, 221, 120, 330, 19, 378, 342, 233, 193, 187, 291, 421, 288, 324, 474, 373, 82, 59, 264, 74, 121, 449, 36, 365, 211, 346, 392, 399, 175, 209, 93, 429, 58, 410, 103, 16, 71, 466, 231, 174, 148, 55, 492, 435, 362, 73, 155, 285, 417, 98, 314, 316, 486, 63, 104, 163, 411, 261, 451, 421, 46, 309, 281, 29, 403, 356, 93, 10, 209, 287, 427, 268, 177, 456, 311, 469, 415, 267, 202, 480, 3, 106, 399, 166, 85, 486, 235, 68, 302, 336, 205, 75, 296, 177, 328, 164, 390, 158, 460, 124, 386, 300, 225, 421, 325, 217, 104, 15, 294, 49, 51, 356, 239, 290, 449, 460, 195, 81, 404, 462, 470, 295, 242, 365, 281, 269, 484, 392, 203, 480, 194, 203, 329, 445, 417, 315, 438, 374, 447, 266, 80, 435, 195, 257, 437, 187, 350, 167, 495, 352, 363, 257, 45, 230, 216, 500, 407, 317, 99, 33, 98, 462, 430, 362, 234, 231, 71, 362, 402, 236, 317, 121, 23, 30, 185, 421, 218, 107, 65, 210, 281, 128, 437, 215, 454, 362, 281, 79, 284, 426, 372, 313, 484, 17, 196, 97, 69, 124, 312, 208, 68, 197, 213, 452, 37, 461, 169, 98, 148, 380, 179, 1, 38, 500, 416, 274, 281, 318, 72, 278, 175, 119, 431, 498, 472, 20, 133, 332, 191, 126, 227, 19, 89, 275, 135, 159, 9, 400, 123, 266, 185, 321, 155]
var numPairsDivisibleBy60 = function (time) {
    let res = null
    let arr = []
    let list = time.map((v) => v % 60)
    for (let i = 0; i < 60; i++) {
        arr[i] = 0
    }
    for (let i = 0; i < list.length; i++) {
        arr[list[i]] += 1
    }
    res += (arr[0] * (arr[0] - 1)) / 2
    res += (arr[30] * (arr[30] - 1)) / 2
    for (let i = 1; i < 30; i++) {
        res += arr[i] * arr[60 - i]
    }
    return res
};

console.time()

console.log(numPairsDivisibleBy60(arr))

console.timeEnd()