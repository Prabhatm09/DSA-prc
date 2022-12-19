function createCounter() {
    let count = 1;
    function CounterIncrement() { //lexical environment
        count++;
        return count;
    }
    return CounterIncrement;
}

let counter = createCounter()
// console.log(counter());



//it will print after third time call
function counter1() {
    let count = 1;
    return function () {
        if (count % 3 === 0) {
            console.log("printing")
        }
        count++
    }
}

let counter2 = counter1()
counter2()
// counter2()
// counter2()


function getCredentail() {
    let username = "prabhat"
    let password = "12234"

    return function () {
        let credentails = {
            username: username,
            password: password
        };
        return credentails;

    };

}

let prabhatcrendentail = getCredentail();
console.log(prabhatcrendentail())



for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

//output --> 5 (5times)


for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j)
        }, 1000);
    })(i)

}
//output --> 0 ,1,2,3,4