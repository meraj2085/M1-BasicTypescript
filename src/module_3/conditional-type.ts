// A type is dependent on another type

type a1 = string;
type a2 = a1 extends string ? string : null;
type a3 = number;

//Nested conditional types
type a4 = a1 extends null
  ? null
  : a2 extends null
  ? null
  : a3 extends null
  ? null
  : number;



// Ex-1
type Sheikh={
     wife1: string;
     wife2: string;
}
type A =  keyof Sheikh;
type CheckProperty<T, W> = W extends keyof T ? true : false;
type CheckWife1 = CheckProperty<Sheikh, "wife1">;

