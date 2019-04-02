"use strict"


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 执行用时： 376ms
 */
let nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
var threeSum = function (nums) {
    // 排序
    let arr = nums.sort((a, b) => {
        return a - b
    })
    let len = arr.length
    // 存放结果
    let res = {}
    // 循环数据
    for (let i = 0; i < len; i++) {
        // 跳过大于0的开始，因为三个正数相加不可能等于 0
        if(arr[i] > 0) break;
        // 跳过相同的数，避难重复
        if(i > 0 && arr[i] == arr[i - 1]){
            continue;
        }
        // 基数
        let v = arr[i]
        // 左指针
        let l = i + 1
        // 右指针
        let r = len - 1
        while (l < r) {
            // 判断三数和小于 0  左指针向右移动
            if (arr[l] + arr[r] + v < 0) {
                // 判断向右移动和当前值相等继续向右移动指针
                while(arr[l] == arr[l + 1]) {
                    l++
                }
                l++

            // 判断三数和大于 0 右指针向左移动
            } else if (arr[l] + arr[r] + v > 0) {
                // 判断向左移动和当前值相等继续向左移动指针
                while(arr[r] == arr[r - 1]) {
                    r--
                }
                r--
            } else {
                res[[v, arr[l], arr[r]]] = 1
                l++
                r--
            }
        }
    }
    return Object.keys(res).map((k) => {
        return k.split(',')
    })
};

console.time()

console.log(threeSum(nums))

console.timeEnd()
























// ////第一版 暴力超时
// let threeSum = function (nums) {
//     nums.sort((a,b) => {
//         return a - b
//     })
//     let arrArr = []
//     let ar = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             for (let k = 0; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] == 0 && i != j && i != k && j != k) {
//                     ar.push(nums[i], nums[j], nums[k])
//                     ar.sort((a, b) => {
//                         return a - b
//                     })
//                     if (arrArr.length == 0) {
//                         arrArr.push(ar)
//                     } else {
//                         let x = 0
//                         for (let n = 0; n < arrArr.length; n++) {
//                             let item = arrArr[n]
//                             if (item.toString() == ar.toString()) {
//                                 x = 1
//                             }
//                         }
//                         if (x == 0) {
//                             arrArr.push(ar)
//                         }
//                     }
//                     ar = []
//                 }
//             }
//         }
//     }
//     return arrArr
// };
// console.time()
// console.log(threeSum(nums))
// console.timeEnd()