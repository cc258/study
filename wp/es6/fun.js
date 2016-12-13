'use strict';

function foo({x,y=5}){
    console.log(x,y);
}

foo({x:4,y:7});


console.log((function(a,b=2,c){}).length);

function add(...values){
    let sum = 0;

    for(var v of values){
        sum += v;
    }

    return sum;
}

console.log(add(10,...[20,20],30));

const sortNum = (...numbers) => numbers.sort();

console.log(sortNum(10,...[30,10],20));

console.log([...'x\uD83D\uDE80y'].length);

console.log(...'hello');

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '4': 'e',
    length: 5
};

console.log(...arrayLike);

let m = new Map([
    ['a','540507363'],
    ['b','13631878113']

]);

console.log(m);



var f = v => v;

var f = function(v){
    return v;
};

console.log(f.name);


var Person = {
    name: 'zhangsan',
    birth: new Date(),
    hello(){ console.log(`Hello,My name is ${this.name}`)}

};

Person.hello();


let obj = {
    ['h'+'ello']() {
        return 'hi';
    },
    firstName() {
        return 'Cui';
    }
};

obj.hello();
console.log(obj.firstName.name);

var target = {a:1,a1:11,a2:{aaa:1}};
var source1 = {b:2};
var source2 = {c:3};

Object.assign(target,source1,source2);

console.log(target);


console.log(Object.getOwnPropertyDescriptor(target,'a2'));


function test (o) {
    // for(for in Object.keys(o)){
        console.log(Object.keys(o));
    // }
}

test(target);

let setting = new Set();
setting.add([1,2,3,4,4]);
console.log(setting);

for(let item of setting){
    console.log(item);
}


var mp = new Map()
var o = {p:'hello p'}

mp.set(o,'content')
mp.get(o)
console.log(mp)
console.log(mp.has(o))
console.log(mp.delete(o))
console.log(mp.has(o))

var map = new Map()
var k1 = ['a']
var k2 = ['a']
map.set(k1,555)
map.set(k2,666)
console.log(map.get(k2))
map.clear()
console.log(map)






