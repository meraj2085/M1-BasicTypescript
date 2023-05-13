"use strict";
class Person {
    takeNap() {
        console.log("I'm sleeping 8h/day");
    }
}
class Students extends Person {
    takeNap() {
        console.log("I'm sleeping 10h/day");
    }
}
class Developer extends Person {
    takeNap() {
        console.log("I'm sleeping 6h/day");
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);
getAreaOfShape(rectangle);
