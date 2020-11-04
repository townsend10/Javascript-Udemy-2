console.log('1-' , '1'== 1)
console.log('2-', '1'===1)
console.log('3-',  '3'!= 3)
console.log('4-',  '3'!== 3)
console.log('5-', 3<2)
console.log('6', 4>1)
console.log('7-', 3<=1)
console.log('8-', 4>=2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09-',d1 ===d2)
console.log('19-',d1 ==d2)
console.log('11', d1.getTime()=== d2.getTime()) //== tambem ira dar true

onsole.log('12-', undefined ==null)
console.log('13-', undefined === null)