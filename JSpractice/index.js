// console.log("hellow prabhat web developer here");

// getName();

// var  a = 7;
// function getName(){

//     var b = 10;
//     console.log("hellow javascript");
// }

// console.log(a);

// let b = 89;
// function a(){
//     // let b = 19
//     c()
//     function c(){
//         console.log(b);
//     }
// }

// a()

// function makeFunc() {
//     const name = 'Prabhat';
//     //   const name = 'Mozilla';
// function displayName() {
//     console.log(name);
// }
// // return displayName
// displayName();
// }

// // const myFunc = makeFunc();
// // myFunc();

// makeFunc()


// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(11);

// console.log(add5(2));
// console.log(add10(2)); 



// function x(){
//   var  i = 1;
//   setTimeout(function (){
//     console.log(i);
//   }, 1000);
// }
// x();


// function x(){
//   for(var i=0; i<=5; i++){
//     setTimeout(() => {
//       console.log(i)
//     }, 1000);
//   }
//   console.log("prabhat")
// }
// x();


// function x(){
//   for(var i=0; i<=5; i++){
//     function close(x){
//       setTimeout(() => {
//         console.log(x);
//       }, x*1000);
//     }
//     close(i);
//   }
//   console.log("prabhat")
// }
// x()


// //first class citizens example
// const func = function (){
//   console.log("This is first class function which is store in variable ")
// }

// func()


// function hello (add){
//   add()
// }

// hello(function (){ console.log("This is call in higher order function")})



// function hello(){
//   return function() {
//     return "hello world"
//   }
// }

// var hi=hello()
// console.log(hi())



// //pure impure function

// // function getval(num){
// //   return num
// // }
// // console.log(getval(10))

// //impure function 
// function getval(){
//   return Math.floor(Math.random()*1000)
// }
// console.log(getval())
// console.log(getval())
// console.log(getval())
// console.log(getval())


// setInterval(function (){
//   console.log(new Date())
// } , 1000)



// //tell the output

// console.log("first");

// setTimeout(function (){
//   console.log("calling");
// }, 2000)

// setTimeout(function (){
//   console.log("calling again");
// }, 5000)

// let i=0;
// while(i<= 10){
//   console.log("second" , i); //output --> first , second , calling , calling again
//   i++
// }


 //======= CALLBACK -=======

//  function Atmachine(){
//   console.log("entering the user pin");
//   let userEnteredpin = 1234;
//   console.log("user enter the pin" , userEnteredapin);
//   let originalPin;
//   setTimeOut(function(){
//     originalPin =1234;
//     console.log("getting the pin from db" , originalPin);
//     if(userEnteredpin === originalPin) console.log("enter the amount")
//     else console.log("invalid pin")
//   }, 2000)
//  }

// Atmachine()



//======arrray========

// let num = [ 10 , 15];
// let copy = num;

// console.log(num ,  copy);//[10 , 15] [10 , 15]

// copy[0] = 12;
//  console.log(num , copy); // [12 , 15] [12 , 15]


console.log("raM"=== "raMm")

