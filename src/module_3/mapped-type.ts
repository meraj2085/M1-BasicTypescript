const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrings = arrayOfNumbers?.map(num => num.toString());

type AreaNumber = {
     height: number;
     width: number;
}
const rectangularArea: AreaNumber = {
     height: 20,
     width: 30
}
rectangularArea.height = 50;

type AreaReadOnly = {
     readonly height: number;
     readonly width: number;
}
const rectangularArea2: AreaReadOnly = {
     height: 20,
     width: 30
}


type a = AreaNumber["height"] //Look up type
type B = keyof AreaNumber // 'height' | 'width'


type Volume = {
     height: number;
     width: number;
     depth: number;
}
type Area<T> ={
     // [key in keyof Volume]: string;
     // [key in keyof Volume]: Volume[key];
     [key in keyof T]: T[key];
}
const area1: Area<{height: number; width: string}> = {height: 10, width: '20'};