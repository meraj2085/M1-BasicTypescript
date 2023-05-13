"use strict";
function add(param1, param2) {
    if (typeof param1 === "string" || typeof param2 === "string") {
        return `${param1} ${param2}`;
    }
    return param1 + param2;
}
add(1, 2);
add("1", "2");
const normalUser1 = { name: "John", age: 30 };
const adminUser1 = { name: "Jane", role: "admin" };
function getUser(user) {
    if ("role" in user) {
        console.log(`Admin user ${user.name}`);
    }
    else {
        console.log(`Normal user ${user.name}`);
    }
}
getUser(adminUser1);
// Instance guard
class Car {
    constructor(name, horsePower) {
        this.name = name;
        this.horsePower = horsePower;
    }
    boostPower() {
        this.horsePower += 100;
        console.log(`Boosted power to ${this.horsePower}`);
    }
}
class ElectricCar extends Car {
    constructor(name, battery) {
        super(name, 0);
        this.battery = battery;
    }
    boostPower() {
        this.battery += 100;
        console.log(`Boosted power to ${this.battery}`);
    }
}
function boostPower(car) {
    if (car instanceof ElectricCar) {
        car.boostPower();
    }
    else {
        car.boostPower();
    }
}
const car1 = new Car("BMW", 100);
const car2 = new ElectricCar("Tesla", 300);
boostPower(car2);
