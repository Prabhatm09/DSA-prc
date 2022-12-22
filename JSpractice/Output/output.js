//1)  output

console.log(10 == [10]); //true
console.log(10 == [[[[[[[[[[10]]]]]]]]]]); // true

//ANS--> Because 10 == Number([10].valueOf().toString()) //10
// so it doesnt matter about number brackets([]) around  the number , it is always converted to a number inthe expression

//2).
console.log(10 + "10") // 1010
console.log(10 - "10") // 0

// Because concatenation operator(+) is applicable for both number and string types. so if any operator is string type
// then bpth operand concated aa string. whereas Sub(-)  operator tries to convert the operand as  number typer

//3) 
console.log([0] == false)
if ([0]) {
    console.log("I'M true");
} else {
    console.log("I'm false")
}

//True , I'm True
//in camprision operator , the expression [0] converted to  Number([0].value().toString()) which is resolved to false.
//whereas[0] just becomes a truthy vlue without anyconversion because there is no camprison operator

//4)
console.log(NaN == NaN) // false
//because NaN are never equal for floating point  number

//5)
function foo() {
    return;
    {
        message: "Hello world";
    }
}
console.log(foo()) // undefined because return 

//6)
let a = [];
let b = a;
console.log("checckinh", a == b)


//7)
function getName() {
    console.log(name);
    let name = "Prabhat"
}
// getName()//error

//8)
let obj = {
    x: 2,
    getX: function () {
        setTimeout(() => console.log("a"), 2000)
        new Promise(res => res(1)).then(v => console.log(v));
        setTimeout(() =>
            console.log("b"), 1000)
    }
}
// obj.getX();

//9)
console.log(new Array(3).toString())

//10)
const person = { name: "Ayush verma", .25e2: 25 };
console.log(person[25]);
console.log(person[.25e2]);
console.log(person['.25e2']) // undefined

//11)
const arr = [1, 2, undefined, NaN, null, false, true, " ", "abc", 3];
console.log(arr.filter(Boolean))

//12)
console.log([1] + "abc");

//13)
console.log([1, 2, 3] + [1, 3, 4]);

//14)
const arrTest = [10, 20, 30, 40, 50][1, 3];
console.log(arrTest)

//15)
hositedVarible = 3;
console.log(hositedVarible)
var hositedVarible

//16)
console.log(Number.isNaN(NaN))

//17)
let obj1 = { message: "hello world" };
const newSet3 = new
    WeakSet([obj1])
console.log(newSet3.has(obj1))


//18)
// (function (a) {
//     return (function () {
//         console.log(a);
//         a = 23;
//     })()
// })(45)

//19)
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < 10; i++) {
//     setTimeout(() =>
//         console.log(arr2[i]), 1000)
// }
// for (var i = 0; i < 10; i++) {
//     setTimeout(() =>
//         console.log(arr2[i]), 1000)
// }

//20)
var aa = 3;
var bb = aa++
var c = ++aa
console.log(aa, bb, c)

//21)
const a3 = { x: 1, y: 2 };
const b2 = a3
b2.x = 3
console.log(a)

//22)
let a4 = 10;
var a5 = 20;
console.log(a4, a5)

