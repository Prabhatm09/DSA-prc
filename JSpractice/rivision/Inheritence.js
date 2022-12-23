class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //getter
    get fullName() {
        return this.name + "kumar";
    }
    set setFullName(name) {
        this.name = name;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
}

let prabhat = new Person("prabhat", 10)
console.log(prabhat.age, prabhat.name, prabhat.fullName)

class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log("eat")
    }
    sleep() {
        console.log("sleep")
    }
    think() {
        console.log("think")
    }
}

let prabhat3 = new Human("pra", 19, "male")
console.log(prabhat3)

//inheritance

class GrandParent {
    house() {
        console.log("hpouse")
    }
}

class Parent extends GrandParent {
    car() {
        console.log("parent")
    }
}

class Child extends Parent {
    bike() {
        console.log("yamaha")
    }
}

let prabhat1 = new Parent();
prabhat1.car()
prabhat1.house()
let aditya = new Child()
aditya.car()
aditya.house()
