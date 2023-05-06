interface CrushInterface<T, U=null>{
     name: string;
     age: T;
     netWorth?: U;
}
const crush_1: CrushInterface<number, number> = {
     name: 'Millie',
     age: 18,
     netWorth: 1000000
}
const crush_2: CrushInterface<string, number> = {
     name: 'Millie',
     age: '18',
     netWorth: 1000000
}
interface AgeInterface{
     dob: string;
     age: number;
}
const crush_3: CrushInterface<AgeInterface, number> = {
     name: 'Millie',
     age: {
          dob: '2003-02-19',
          age: 18
     },
     netWorth: 1000000
}
const crush_4: CrushInterface<{dob:string, age:number}, {currency:string, amount:number}> = {
     name: 'Millie',
     age: {
          dob: '2003-02-19',
          age: 18
     },
     netWorth: {
          currency: 'USD',
          amount: 1000000
     }
}