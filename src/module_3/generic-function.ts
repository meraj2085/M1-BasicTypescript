const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
     return [param1, param2];
};
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
     return [param1, param2];
}
const result_1 = createArray<string, string>("hello", "world");
const result_2 = createArray<boolean, string[]>(true, ['USA']);
const result_3 = createArray<{name: string}, boolean>({name: 'Millie'}, true);

// Spread Operator
const crush = "Millie Bobby Brown"
const MyInfo = {
     name: "Meraj",
     age: 21,
     salary: 100000,
}
const addMeInMyCrush = <T>(myInfo: T)=>{
     const crush = "Millie Bobby Brown"
     return {...myInfo, crush}
}
const result_4 = addMeInMyCrush(MyInfo)
