 
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


