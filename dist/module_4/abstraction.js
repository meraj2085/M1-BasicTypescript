"use strict";
// Interface class
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log("Engine started");
//   }
//   stopEngine(): void {
//     console.log("Engine stopped");
//   }
//   move(): void {
//     console.log("Vehicle is moving");
//   }
//   test() {
//     console.log("Testing");
//   }
// }
// const vehicle1 = new Vehicle("Car", "Honda", 2020);
// Abstract class
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
}
class Carr extends Vehicle {
    startEngine() {
        console.log("Engine started");
    }
    stopEngine() {
        console.log("Engine stopped");
    }
    move() {
        console.log("Vehicle is moving");
    }
}
