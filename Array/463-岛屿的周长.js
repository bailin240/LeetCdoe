"use strict"

/**
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长
 * 
 * 示例 :
 *  输入:
 *  [[0,1,0,0],
 *   [1,1,1,0],
 *   [0,1,0,0],
 *   [1,1,0,0]]
 * 输出: 16
 * 解释: 它的周长是下面图片中的 16 个黄色的边：
 */


 /**
 * @param {number[][]} grid
 * @return {number}
 * 执行用时 : 428 ms, 在Island Perimeter的JavaScript提交中击败了11.19% 的用户
 * 内存消耗 : 43.8 MB, 在Island Perimeter的JavaScript提交中击败了0.00% 的用户
 */
let A = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]
var islandPerimeter = function (grid) {
    let num = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let n = grid[i]
            if (n[j] === 1 && !n[j - 1]) {
                num += 1
            }
            if (n[j] === 1 && !n[j + 1]) {
                num += 1
            }
            if (n[j] === 1 && (!grid[i - 1] || !grid[i - 1][j])) {
                num += 1
            }
            if (n[j] === 1 && (!grid[i + 1] || !grid[i + 1][j])) {
                num += 1
            }
        }
    }
    return num
};


/**
 * @param {number[][]} grid
 * @return {number}
 * 执行用时 : 384 ms, 在Island Perimeter的JavaScript提交中击败了17.91% 的用户
 * 内存消耗 : 44.5 MB, 在Island Perimeter的JavaScript提交中击败了0.00% 的用户
 */
islandPerimeter = function (grid) {
    let num = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let n = grid[i]
            if (n[j] === 1) {
                num += !n[j - 1] ? 1 : 0
                num += !n[j + 1] ? 1 : 0
                num += !grid[i - 1] || !grid[i - 1][j] ? 1 :0
                num += !grid[i + 1] || !grid[i + 1][j] ? 1 :0
            }
        }
    }
    return num
};

/**
 * @param {number[][]} grid
 * @return {number}
 * 好思路 别人写出来的
 * 执行用时 : 532 ms, 在Island Perimeter的JavaScript提交中击败了7.46% 的用户
 * 内存消耗 : 43.7 MB, 在Island Perimeter的JavaScript提交中击败了0.00% 的用户
 */
var islandPerimeter = function(grid) {
    let num = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let n = grid[i]
            if (n[j] === 1) {
                num += 4;
                num -= i > 0 && grid[i - 1][j] ? 2 : 0;
                num -= j > 0 && grid[i][j - 1] ? 2 : 0;
            }
        }
    }
    return num
};
console.time()

console.log(islandPerimeter(A))

console.timeEnd()