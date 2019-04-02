"use strict"



/**
 * @param {number[][]} grid
 * @return {number}
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