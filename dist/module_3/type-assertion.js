"use strict";
// Ex: 1
let emni;
emni = "I am Emni";
emni.toUpperCase();
emni.toUpperCase();
// Ex: 2
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `${value}g`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `${value}g`;
    }
}
const result = kgToGram(1000);
const result2 = kgToGram("1000");
try {
    // Hi
}
catch (err) {
    console.log(err.message);
}
