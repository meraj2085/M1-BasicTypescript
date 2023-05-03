"use strict";
const crush1 = {
    name: "Millie Brown",
    age: 21,
    profession: "Actor",
    address: "UK",
};
const isMarried = "single";
const calculate = (num1, // 2
num2, // 3
operation // (2, 3) => 2 + 3)
) => {
    return operation(num1, num2);
};
calculate(2, 3, (x, y) => x + y);
calculate(2, 3, (x, y) => x - y);
calculate(2, 3, (x, y) => x / y);
calculate(2, 3, (x, y) => x * y);
