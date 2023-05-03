"use strict";
// Normal function
function add(x, y = 10) {
    return x + y;
}
add(2, 3);
// Arrow function
const add2 = (x, y) => {
    return x + y;
};
add2(2, 3);
// Callback function
const arr = [1, 2, 3, 4, 5];
const newArray = arr === null || arr === void 0 ? void 0 : arr.map((num) => num * num);
const person = {
    name: "John",
    balance: 1000,
    addBalance(money) {
        return `My new balance is ${this.balance + money}`;
    },
};
// spread operator
const friends = ["John", "Peter", "Bob"];
const newFriends = ["Anna", "Mary", "Kate"];
friends.push(...newFriends);
// rest operator
const greetFriends = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Hi ${friend}`);
    });
};
greetFriends("John", "Peter", "Bob");
// Array & object destructuring
const myBestFriend = {
    fullName: "John Doe",
    age: 25,
};
const [bestFriend] = friends;
const { fullName, age } = myBestFriend;
