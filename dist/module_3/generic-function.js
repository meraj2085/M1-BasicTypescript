"use strict";
const createArray = (param1, param2) => {
    return [param1, param2];
};
function createArray2(param1, param2) {
    return [param1, param2];
}
const result_1 = createArray("hello", "world");
const result_2 = createArray(true, ['USA']);
const result_3 = createArray({ name: 'Millie' }, true);
// Spread Operator
const crush = "Millie Bobby Brown";
const MyInfo = {
    name: "Meraj",
    age: 21,
    salary: 100000,
};
const addMeInMyCrush = (myInfo) => {
    const crush = "Millie Bobby Brown";
    return Object.assign(Object.assign({}, myInfo), { crush });
};
const result_4 = addMeInMyCrush(MyInfo);
