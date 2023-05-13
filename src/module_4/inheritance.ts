// Parent class
class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `${this.name} sleeps for ${hours} hours.`;
  }
}

// Inheritance: means getting from parent class
class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("Millie", 20, "UK");
student1.makeSleep(10);

//Ex-2
class Teacher extends Parent {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }
  takeClassed(no_of_class: number): string {
    return `${this.name} will take ${no_of_class} classes today.`;
  }
}
const teacher1 = new Teacher("John", 30, "USA", "Math");