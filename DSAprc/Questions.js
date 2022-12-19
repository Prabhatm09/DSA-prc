 
//  // Q1 First repeating number?
//  let leftHands = [ 1 , 3 , 4 , 3 , 2 , 5 , 1];

//  for(let i=0; i<leftHands.length; i++){
//     if(leftHands.includes(leftHands[i] , i+1)){
//         // console.log(leftHands[i])
//     }
//  }



//  //Q First non repeating number?
//  let numbers = [1 , 3 ,4 ,2 ,3  , 4,2,  7]
//  for(let i= 0; i<numbers.length; i++){
//     if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]))
//     console.log( "non " , numbers[i])
//  }

// //output question
// //  console.log("1" - "1") // 0;

//  // reverse a name array  without reserver methods?

//  let names = [ "vasu" , "abhi" , "ram" , " sunil"];

// //  console.log(names.sort().reverse())

//  console.log(names.sort(function(a , b) {
//    return  a > b ? -1 : 1 //in reverse order
//     //   return a > b ? 1 : -1 // return in ascending order
//  }))



//  //find the larget digit from the array? and smallest

// //  let nums = [ 12, 34 , 32 , 56, 1 , 2, 30 , 19]
// let nums = [ -12, -34 , -32 , 56, 1 , -2, -30 , -19]

//  let max = nums[0];
// for(let i = 1 ; i<nums.length; i++){
//     if(max < nums[i]){
//         max = nums[i]
//     }
// }

// console.log(max)


// //finding facto for each elements?


// let digit = [1,2  , 3,4];

// let factArray = digit.map((num)=> {
//     let fact = 1;
// for(let i=num; i>0; i--){
//     fact *= i;
// }
// return fact
// })
// console.log(factArray)


// //print truthy value?

// let truthyValue = [ 1 ,' ' , false  , true , "vasu" , null , undefined ];

// let trueValue = truthyValue.filter(Boolean);
// let falsyValue = truthyValue.filter((num)=>!num);
// console.log("truethy" , trueValue , falsyValue)


// //matrix question  in single loop
//  let matrix = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
//  ]

//  let start = 0

//  let sum = 0;
//  for(let i =0 ; i<matrix.length; i++){
//     sum += matrix[i][start];
//     start += 1;
//  }
//  console.log("matrix " , sum)


// //===Snake pattern 
// let matrix = [
//      [1,2,3,4],
//      [5,6,7,8],
//      [9,10,11,12],
//      [13,14,15,16]
//   ]


//   let rows = matrix.length;
//   let cols = matrix[0].length;

//   for(let i=0; i<rows; i++){
//     if(i % 2 !=0){
//         for(let j=0; j<cols; j++){
//             console.log(matrix[i][j])
//         }
//     }else{
//         for(let j=cols-1; j>=0; j--){
//             console.log(matrix[i][j])
//         }
//     }
//   }



//searhcing binear search 2pointer algo

let nums = [1,3,10,23,34,45,89,90];
let target = 89;


let start = 0;
let end = nums.length-1;

while(start <= end){
    let middle = Math.floor(start+end / 2);

    if(nums[middle] === target){
        console.log("found" , middle);
        start += 1;
        end -= 1;
    }else if(nums[middle]< target){
        start = middle+1;
    }else if(nums[middle] > target){
        end = middle -1;
    }
}

//anagram 

let word1 = "god";
let word2 = "dog";

if(word1.split("").sort().join() === word2.split("").sort().join()){
    console.log("anagram")
}else{
    console.log("not a anagram")
}

//factpry method function - any function  creating object

function createCircular (radius){
    return {
    radius : radius,
    draw :  function (){
        console.log( "drawing circle")
    }
    }
}

let circle1 = createCircular(10);
console.log(circle1.radius)


//constructor method

function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        return "drawing circle"
    }
    return this;
}


let circle2 = new Circle(10);
console.log(circle2 , circle2.draw())


//creating by this way also// using new keyword everything store in as a object

let num = 10;
// ---> this hapen behind the scene of js storing the variable;
let numarr = new Number(10);


let string = "prabhat";
let string1 = new String("pravhat")



let car = {
    car : "BMW",
    model : "Q3",
    year : 2021,
    type: "suv"
}

for(let key  in  car){
    console.log(key)
}

let carObj = Object.key(car);
console.log(carObj)



let array = [
    [1,2],
    [3,4],
    [
        [[7 , "vasu"], 9],
        [9,10],
    ],
]

console.log(array.flat(4))




//call by refrence

let arrNum = [1,2,3,4];
function change(value){
    console.log(arrNum , value);
    arrNum[0] = 10;
    console.log(arrNum , value)
}

change(arrNum)


//sort the object

let object = {
    name : "prabhat",
    age : 10,
    place : "lucknow"
}

let sortedKey = Object.keys(object).sort();
let sortedObj = {};
for(let key of sortedKey){
    sortedObj[key] = object[key]
}

console.log("sorted object " , sortedObj)




//array destructing

let number = [1,2,3,56,7];
let [numss , num2 , ...rest] = nums;
console.log(numss , num2 , rest);


let number1 =  [1,2]
let [nums1 , nums2 , num3] = nums;


//object destructing

let objectt = {
    fname: "prasbhat",
    class : "engineering",
    pro : "developer"
}

let {fname , classs} = obj;
console.log(fname , classs)



//recursion

let numb = [1,2,3,5 ,4,5];

function number(arr){
    if(arr.length == 1){
        return arr[0]
    }
     return arr.shift()+number(arr)
}

console.log(numb)


//find the sum of given range

function sum(first , last){
    if(first === last){
        return 0;
    }

    return first+sum(first+1 , last)
}
console.log(sum(3,10))


//power

function getPower(base , exponential){
    if(exponential == 0 ) return 1;
    return base * getPower(base , exponential-1)
}
console.log(getPower(2 ,4))


//flatten array

function flattering(arr){
let falltenedArray = []

for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
        falltenedArray = [...falltenedArray , ...flattering(arr[i])]
    }else{
        falltenedArray.push(arr[i])
    }
    return falltenedArray
}
}

console.log(flattering([1, [2,3,45,[3 [3 , 4 ,5]]]]))