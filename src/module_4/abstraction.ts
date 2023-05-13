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
abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void
  abstract stopEngine(): void
  abstract move(): void
}
class Carr extends Vehicle {
     startEngine(): void {
          console.log("Engine started");
     }
     stopEngine(): void {
          console.log("Engine stopped");
     }
     move():void{
          console.log("Vehicle is moving");
     }
}

