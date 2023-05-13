class Person{
     takeNap():void{
          console.log("I'm sleeping 8h/day");
     }
}
class Students extends Person{
     takeNap():void{
          console.log("I'm sleeping 10h/day");
     }
}
class Developer extends Person{
     takeNap():void{
          console.log("I'm sleeping 6h/day");
     }
}
function getNap(param: Person){
     param.takeNap();
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);







class Shape{
     getArea():number{
          return 0;
     }
}
class Circle extends Shape{
     radius:number;
     constructor(radius:number){
          super();
          this.radius = radius;
     }
     getArea():number{
          return Math.PI * this.radius * this.radius;
     }
}
class Rectangle extends Shape{
     width:number;
     height:number;
     constructor(width:number, height:number){
          super();
          this.width = width;
          this.height = height;
     }
     getArea():number{
          return this.width * this.height;
     }
}
function getAreaOfShape(param:Shape){
     console.log(param.getArea());
}
const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);
getAreaOfShape(rectangle);