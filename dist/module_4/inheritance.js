"use strict";
// Parent class
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} sleeps for ${hours} hours.`;
    }
}
// Inheritance: means getting from parent class
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student("Millie", 20, "UK");
student1.makeSleep(10);
//Ex-2
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClassed(no_of_class) {
        return `${this.name} will take ${no_of_class} classes today.`;
    }
}
const teacher1 = new Teacher("John", 30, "USA", "Math");
