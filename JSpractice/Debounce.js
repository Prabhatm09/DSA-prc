//debouncing in js

let count = 1;
const getData = () =>{
    console.log("fetching" , count++)
};

const debounce = (fn , d) => {
    let timer;
    return function (){
clearTimeout(timer)
     timer =    setTimeout(()=> {
            getData()
        } , d)
    }
}

let bettrtime = debounce(getData , 300)



























































