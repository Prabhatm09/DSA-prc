// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("collect all the golds")
//         reject("killed by adheera")
//     }, 5000)
// });

// promise
//     .then((result) => console.log("climax", result))
//     .catch((error) => console.log(error));


// console.log("entering the user id ", 1);

// function getUserData(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let user = { id: id, getHubUser: "prabhat" };
//             resolve(user)
//         }, 2000)

//     })
// };

// function getRepo(username) {
//     function getUserData(id) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let repo = {
//                     "vasanth": ["add", "calc", "froms"],
//                     "shweta": ["id.gen", "facebook"],
//                     "anish": ["react", "redux"],
//                 };
//                 resolve(repo[username])
//             }, 2000)
//         })
//     }

//     function getCommit(repo) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 let commits = {
//                     add: ["initial"],
//                     calc: ["initial"],
//                     forms: ["desgin"]
//                 }
//                 resolve(commits[repo])
//             }, 2000);
//         })
//     }


//     getUserData(1)
//         .then((userData) => {
//             console.log("userData", userData);
//             let repos = getReposirty(userData.username)
//             return repos
//         })
//         .then((repos) => {
//             console.log("repos", repos);
//             let commit = getCommit(repos[0]);
//             return commit
//         })
//         .then((commits) => console.log("commits", commits))

// }


///promises part -2

// function dinnerSecanrio() {
//     console.log("Entering into the hotel");
//     console.log("calling the server and order paav bhaji");
//     console.log("server informing th chef to prepare food");
//     setTimeout(() => {
//         console.log("preparing pav bhaji..... ");
//     }, 3000)

//     console.log("server deliver the food to the table");
//     setTimeout(() => {
//         console.log("eating bhaji");
//     }, 3000)
//     console.log("paying the bill");
//     console.log("leaving the hotel");
// }

// dinnerSecanrio();

// function prepareOffFood(callbackOfEatingAndPayingbill) {
//     setTimeout(() => {
//         console.log("preparing pav bhaji..... ");
//         console.log("server deliver the food to the table");
//         callbackOfEatingAndPayingbill()
//     }, 3000)
// }

// function eatingFood() {
//     setTimeout(() => {
//         console.log("eating bhaji");
//         

//     }, 3000)
// }

// function dinnerSecanrio() {
//     console.log("Entering into the hotel");
//     console.log("calling the server and order paav bhaji");
//     console.log("server informing th chef to prepare food");
//     prepareOffFood(eatingFood)
// }

// dinnerSecanrio();


//same in promise

function preparationOffFood() {
    return new Promise((resolve, reject) => {
        let vegitables = true;
        if (vegitables) {
            setTimeout(() => {
                console.log("preparing pav bhaji..... ");
                console.log("server deliver the food to the table");
                resolve("food prepared successfully");
            })
        } else {
            reject("no vegitables")
        }

    })
}

function eatinfFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("eating bhaji");
            resolve("sccesfully ate the food")
        })
    })
}

function payment() {
    return new Promise((resolve, reject) => {
        let purse = false;
        if (purse) {
            console.log("paying the bill")
            console.log("leaving the hotel");
            resolve("payment successfully")
        } else {
            reject("run from hotel")
        }
    })
}
//this is way in iside then and inside then ...
// function dinnerSecanrio() {
//     console.log("Entering into the hotel");
//     console.log("calling the server and order paav bhaji");
//     console.log("server informing th chef to prepare food");
//     preparationOffFood()
//         .then(() => {
//             console.log("food prepared successfully")
//             eatinfFood().then(() => {
//                 console.log("sccesfully ate the food")
//                 payment().then(() => console.log("payment successfully"))
//                     .catch((error) => console.log(error))
//             })
//         })
//         .catch((error) => console.log(error))

// }

// dinnerSecanrio()


//correct way to write promiess
function dinnerSecanrio() {
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bhaji");
    console.log("server informing th chef to prepare food");
    preparationOffFood()
        .then((success) => {
            console.log(success)
            return eatinfFood()
        })
        .then((success) => {
            console.log(success)
            return payment()
        })
        .then((success) => console.log(success))
        .catch((error) => console.log(error))
}

// dinnerSecanrio()


//parallel excutation

function fn1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("process 1")
            res("1")
        }, 4000)
    });
}

function fn2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("process 2");
            res(" rejected 2")
        }, 5000);
    })
}

// fn1().then(() => fn2())
//     .then(() => console.log("process over"))

Promise.all([fn1(), fn2()]).then((result) => console.log("pro over", result))
    .catch((err) => console.log("error", err))
    .finally(() => console.log("closing"))


async function dinnerSecanrio() {
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bhaji");
    console.log("server informing th chef to prepare food");
    try {
        await preparationOffFood()
        await eatinfFood()
        await payment()
    } catch (err) {
        console.log("error", err)
    }

}

// dinnerSecanrio()