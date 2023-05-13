"use strict";
const crush_5 = "Millie Bobby Brown";
const MyInformation = {
    name: "Meraj",
    age: 21,
    salary: 100000,
};
const addMeIntoMyCrush = (myInfo) => {
    const crush = "Millie Bobby Brown";
    return Object.assign(Object.assign({}, myInfo), { crush_5 });
};
const result_5 = addMeInMyCrush(MyInformation);
