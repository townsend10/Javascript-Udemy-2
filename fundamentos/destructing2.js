const [a] = [10]
console.log(a)

const [n1, ,n3, , n5,n6 = 0] = [10,3,5,2]
console.log(n1,n3,n5,n6)

const [, [,nota]] = [[,10, 10], [3,2,1]]
console.log(nota)