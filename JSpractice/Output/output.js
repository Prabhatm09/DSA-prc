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

//23)
let array1 = [];
let array2 = [];
console.log(array1 == array2) // false
console.log(array1 == array2) // false

//24)
let array3 = [];
let array4 = array3
console.log(array3 == array4) // true
console.log(array3 == array4) // true


//25)
let array5 = [20]
let array6 = [20]
console.log(array5[0] == array6[0]) // true
console.log(array5[0] == array6[0]) // true
//bcz element are compare here not address

//26)
let z = [1,2,3,4,5,6]
let name = {name : "prabhat"}
console.log(...z) // 1,2,3,4,5,6

//27)
console.log(typeof NaN) // number

//28)
let data = 10 - -10;
console.log(data)//20

//29)
const set = new Set([1,1,3,4,5]); //work of set remove dublicate value
console.log(set)// 1 ,3,4,5

//30)
let data1 = {name : "prabhat"};
console.log(delete data1.name) //true

//31) 
let data2 = {name : "prabhat"};
console.log(delete data2) //false bcz we cant delete data directly

//32)
const data3 = ["peter" , "prabhat" , "ram"];
const [y,zz] = data3;
console.log(y , zz)  //peter , prabaht
  
//33) to find the 2nd element from array
const data4 = ["peter" , "prabhat" , "ram"];
const [,z1] = data4;
console.log( z1)  // prabaht

//34) how to get any property from obj without .operator
const data5 = {name : "ram" , age: 23 , skill:"js"}
const {age} = data5
console.log(age)

//35)how to merge two object
let data6 = {name : "ram" , age: 23 , skill:"js"}
let info = {city : "noida"};
data6 = {...data6 , ...info};
console.log(data6)

//36)how to merge two object
let dat7 = {name : "ram" , age: 23 , skill:"js"}
let info1 = {city : "noida"};
data7 = {data7 , ...info1}; 
console.log(data7) // {data7:{name : "ram" , age: 23 , skill:"js"}  , city : "noida"}

//37) if same key in two object
let dat8 = {name : "ram" , age: 23 , skill:"js"}
let info2 = {city : "noida" , skill : "python"};
data8 = {data8 , ...info1}; 
console.log(data8) // {name : "ram" , age: 23 , skill : "python" , city : "noida" }

 //38)
 const name1 = "prabhat";
 console.log(name1())//error

 //39)
 const result = false || {} || null
 console.log(result) // object bcz OR operator find first true value

 //40)
 const result1 = false || null || "" 
 console.log(result1)//empty string bcz no value is true it take last value

 //41)
 const result2 = [] || 0 || true 
 console.log(result2)//[]

 //42)
 console.log(Promise.resolve(5))//promise fullfilled

 //43)
 console.log("emoji" === "emoji")//true

 //44)
 JSON.parse()//convert  json into js value

 //45)
 console.log(`${(x=>x)("i love program")}`)// i love program

 //46)
 const string = "code by me"
 console.log(!typeof string === "object")//false
 console.log(!typeof string === "string")//false 

 //47)
 const name2 = "sub";
 const age1 = 21
 console.log(isNaN(name2))//true
 console.log(isNaN(age))//false

 //48)
 let person1 = {name:"prabhat"}
 Object.seal(person1)//seal can allow to change the key which is alrdy in object  not allow to add new thi ngs
 person1.name = "mishra"
 console.log(person1)

 //49)convert string to boolean
let data9 = "true"
console.log(!data9) //false

//50)
let arr1 = [1,2,3,4]
let aar2 = [4 ,5,6]
let c = [...arr1 , ...aar2]
console.log(c)//[1,2,3,4,4,5,6]


//51)
let a5 = "like";
let b3 =  `like`
console.log(a5 === b3)//true

//52)
let apple = 1;
let cat = 2;
console.log(--cat === apple) //true

//53)
let apple1 = 1;
let ball = 1;
let cat1 = 2;
console.log ( apple1 === ball ===  --cat ) //false

//54)
console.log(3*3)//9
console.log(3**3)//27
// console.log(3***3)//error

//55)how to find the OS in js
// navigator.plateform


//56)
console.log(+true); //by adding + in front of any data it converts in number // 1
console.log( typeof +true);//number

//57)
console.log(!"prabhat")//false

//58)
let data10 = "size";
const bird = {
    size : "small"
}
console.log(bird[data10])//small
console.log(bird["size"])//small
console.log(bird.size)//small
console.log(bird.data10)//Undefined

//59)
let c = {name : "peter"};
let d = c;
c.name = "prabhat";
console.log(d.name)//prabhat

//60)
let e = 3;
let f = new Number(3)//convert in object
console.log(e == f)//true 
console.log( e === f)//false bcz (number === object)

//61)
 function getAga(...arg){
    console.log(typeof arg)//object
 }
 getAga(21)//[21]

 //62)
 const object = {1 : "a" , 2 :"b", 3:"c"}
 console.log(object.hasOwnProperty("1"))//true
 console.log(object.hasOwnProperty(1))//true

 //63)
 for(let i=1; i<5; i++){
    if(i === 3) continue ;
    console.log(i) // 1 2 4 
 }

 //64)
 function sayHi(){
    return (()=> 0)() // => 0
 }
 console.log(typeof sayHi())//number

 //65)
 function sayHi(){
    return (()=> 0) // => 0
 }
 console.log(typeof sayHi())//functiom

 //66)
 console.log(typeof typeof 1)//string

 //67)
 const number = [1,2,3]
 number[9] = number
 console.log(number)//infinite

 //68)
 (()=>{
    let x = y = 10
 })()
 console.log(typeof y)//number
   
 //69)
 console.log(!true - true);//(0-1)==> -1

//70)
console.log(true + +"10")// //(1+10)=> 11


