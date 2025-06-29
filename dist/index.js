"use strict";
let age = 25;
let namee = "kashish";
let isDetermined = true;
let key = 78;
let numbers = [1, 2, 3];
let classes = ["class1", "class2", "class3"];
function func(name) {
    return `Hello ${name}`;
}
func("kashish");
function add(a, b) {
    return a + b;
}
add(4, 5);
function logMsgs(msg) {
    console.log(`Message passed by the Log function : ${msg}`);
}
logMsgs("Hello and welcome to typescript revision");
let numArray = [1, 2, 3, 4, 5];
let perosn = ["kashish", true];
perosn.push("yourName", false);
function logNames(persons) {
    persons.map((i) => {
        console.log(i);
    });
}
logNames(["kashish", "noName", "Lol"]);
//# sourceMappingURL=index.js.map