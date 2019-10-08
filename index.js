"use strict"
// var a = 1, b = 2;
// a = [a,b].slice(0,1)
// b = [a,b].slice(1,2)
// console.log(a.toString()) 
// console.log(b.toString()) 

function *foo() {
    yield *[1,2,3]
}
for(var v of foo()){
    console.log(v)
}