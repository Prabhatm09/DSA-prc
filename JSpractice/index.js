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


function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(11);

console.log(add5(2));
console.log(add10(2)); 