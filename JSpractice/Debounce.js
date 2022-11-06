//debouncing in js

let counter = 1;
const getData = () => {
    console.log("fetching" , counter++);
};

const debounce = function(fn , delay) {
    let timer;
    return function () {
        let context = this,
        arg = arguments
          clearTimeout(timer)
          timer = setTimeout (()=> {
            getData.apply(context  , arguments)
        } , delay)
    }
} 

const Bettertime = debounce(getData , 300)





























































