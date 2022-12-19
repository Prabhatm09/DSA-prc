let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("collect all the golds")
        reject("killed by adheera")
    }, 5000)
});

promise
    .then((result) => console.log("climax", result))
    .catch((error) => console.log(error));


console.log("entering the user id ", 1);

function getUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = { id: id, getHubUser: "prabhat" };
            resolve(user)
        }, 2000)

    })
};

function getRepo(username) {
    function getUserData(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let repo = {
                    "vasanth": ["add", "calc", "froms"],
                    "shweta": ["id.gen", "facebook"],
                    "anish": ["react", "redux"],
                };
                resolve(repo[username])
            }, 2000)
        })
    }

    function getCommit(repo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let commits = {
                    add: ["initial"],
                    calc: ["initial"],
                    forms: ["desgin"]
                }
                resolve(commits[repo])
            }, 2000);
        })
    }


    getUserData(1)
        .then((userData) => {
            console.log("userData", userData);
            let repos = getReposirty(userData.username)
            return repos
        })
        .then((repos) => {
            console.log("repos", repos);
            let commit = getCommit(repos[0]);
            return commit
        })
        .then((commits) => console.log("commits", commits))

}