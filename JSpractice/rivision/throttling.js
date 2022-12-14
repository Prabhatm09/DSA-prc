//throttling in Js;
let counter = 0;
const throttling = (fn , d) => {
    return function (){
      setTimeout(()=> {
    fn()
}, d)
    }
}



 const myfunc = throttling (()=> {
    console.log("user clicked" , counter++)
 } , 3000)