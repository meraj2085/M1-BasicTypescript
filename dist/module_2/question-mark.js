"use strict";
var _a, _b;
// Ternary operator
const candidate_age = 18;
// if(candidate_age>=18){
//      console.log("You are eligible to vote");
// }
// else{
//      console.log("You are not eligible to vote");
// }
const isAdult = candidate_age >= 18 ? "You are eligible" : "You are not eligible";
// console.log(isAdult);
// Nullish coalescing operator
// Only works with null & undefined
const isAuthenticated = null;
const userName = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const manushOne = {
    name: "Rahim",
    age: 25,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
const home = (_b = (_a = manushOne === null || manushOne === void 0 ? void 0 : manushOne.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No home";
console.log(home);
