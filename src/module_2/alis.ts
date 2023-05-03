// Type aliases
type crushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: crushType = {
  name: "Millie Brown",
  age: 21,
  profession: "Actor",
  address: "UK",
};

type marriedStatus = "married" | "single";
const isMarried: marriedStatus = "single";

type operationType = (x: number, y: number) => number;
const calculate = (
  num1: number, // 2
  num2: number, // 3
  operation: operationType // (2, 3) => 2 + 3)
): number => {
  return operation(num1, num2);
};
calculate(2, 3, (x, y) => x + y);
calculate(2, 3, (x, y) => x - y);
calculate(2, 3, (x, y) => x / y);
calculate(2, 3, (x, y) => x * y);
