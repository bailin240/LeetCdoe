"use strict"


/**
 * @param {string[]} logs
 * @return {string[]}
 */
let str = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"]
var reorderLogFiles = function (logs) {
    let l = []
    let y = []
    let arr = logs.map((v) => v.split(' '))
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i][1]) != NaN && parseInt(arr[i][1]) == parseInt(arr[i][1])) {
            y.push(arr[i])
        }
        if (parseInt(arr[i][1]) != NaN && parseInt(arr[i][1]) != parseInt(arr[i][1])) {
            l.push(arr[i])
        }
    }
    let larr = l.map((v) => {
        let s = v.shift()
        v.push(s)
        return v
    })
    larr.sort((a, b) => a > b)
    console.log(larr)
    console.log('--------------')
    let la = larr.map((v) => {
        v.push(v.shift())
        return v
    })
    console.log(la)
    console.log('=========')
    return la
    return [...larr.map((v) => v.join(' ')), ...y.map((v) => v.join(' '))]
};

console.time()

console.log(reorderLogFiles(str))

console.timeEnd()