// Key of guard
type Alphanumeric = string | number;
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return `${param1} ${param2}`;
  }
  return param1 + param2;
}
add(1, 2);
add("1", "2");

// In guard
type NormalUserType = {
  name: string;
  age: number;
};
type AdminUserType = {
  name: string;
  role: "admin";
};
const normalUser1: NormalUserType = { name: "John", age: 30 };
const adminUser1: AdminUserType = { name: "Jane", role: "admin" };

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    console.log(`Admin user ${user.name}`);
  } else {
    console.log(`Normal user ${user.name}`);
  }
}
getUser(adminUser1);

// Instance guard
class Car {
  name: string;
  horsePower: number;
  constructor(name: string, horsePower: number) {
    this.name = name;
    this.horsePower = horsePower;
  }
  boostPower() {
    this.horsePower += 100;
    console.log(`Boosted power to ${this.horsePower}`);
  }
}
class ElectricCar extends Car {
  battery: number;
  constructor(name: string, battery: number) {
    super(name, 0);
    this.battery = battery;
  }
  boostPower() {
    this.battery += 100;
    console.log(`Boosted power to ${this.battery}`);
  }
}
function boostPower(car: Car | ElectricCar) {
     if (car instanceof ElectricCar) {
          car.boostPower();
     } else {
          car.boostPower();
     }
}

const car1 = new Car("BMW", 100);
const car2 = new ElectricCar("Tesla", 300);
boostPower(car2);