"use strict"

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
let A = "this apple is sweet",
    B = "this apple is sour"
var uncommonFromSentences = function (A, B) {
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