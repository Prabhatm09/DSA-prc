function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading data from database");
        let user = { id: id, getHubUser: "prabhat" };
        callback(user)
    }, 2000)
}

console.log("before")
const user = getUser(1, function callback(user) {
    console.log(user)
})

// console.log("after");


function readDataInDb(id, display) {
    setTimeout(() => {
        console.log("reading account data in the Db");
        let user = { id: id, getHubUser: "prabhat" };
        display(user)
    }, 2000)
}

function displayDataOnScreen(userData) {
    console.log("returning the user", userData);
    console.log("display the content in github page")
}

function githublogin() {
    console.log("entering userId as 1")
    console.log("clicking submit button");
    readDataInDb(1, displayDataOnScreen)
}

githublogin()