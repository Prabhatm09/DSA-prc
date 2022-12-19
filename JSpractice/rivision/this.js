let object = {
    add() {
        console.log("obj", this)
    }
}

object.add()

let object2 = {
    add: function () {
        console.log("obj2", this)
    }
}

object2.add()


function add1() {
    console.log(this)
}
add1();

function add2() {
    console.log(this)
}

new add2();


const add3 = () => {
    console.log(this)
}
add3();


const obj3 = {
    age: 10,
    getAge: function () {
        const print = () => {   //--> function print(){
            console.log("age ", this.age)
        }
        print()
    }
}

obj3.getAge()