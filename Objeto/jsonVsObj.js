const obj = {
    a: 1, 
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}
console.log(JSON.stringify(obj))
console.log(obj.soma)
//console.log(JSON.parse("{a: 1, b : 2 , c : 3}"))
//console.log(JSON.parse(" {'a': 1, 'b': 2, 'c':3} "))
console.log(JSON.parse('{"a":1 , "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 10,"b": "String", "c": true, "d":{}, "e": [3,2,1]}'))