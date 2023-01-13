const myMap = new Map();

myMap.set("Guilherme", "front-end");
myMap.set("Felipe", "Back-end");
myMap.set("Júnior","Admin");
myMap.set("Rodrigo","Admin")

function getAdmin (myMap) {
    let admins = []
    for ([key, value] of myMap) {
        if (value === "Admin") {
            admins.push(key)
        }
    }
    return admins;
}

console.log(getAdmin(myMap))
