type GenericArray<T> = Array<T>;
const rollNumbs: Array<number> = [1, 2, 3, 4, 5];
const rollNumbs2: GenericArray<string> = ["1", "2", "3", "4", "5"];
const rollNumbs3: GenericArray<boolean> = [true, false, true, false, true];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Meraj", "Bobby Brown"];
const relationWithSalary: GenericTuple<
  { name: string; salary: number },
  string
> = [{ name: "Meraj", salary: 1000 }, "Bobby Brown"];


type NameRollType = {
  name: string;
  roll: number;
};
const useNamRoll: Array<NameRollType> = [
  { name: "Meraj", roll: 1 },
  { name: "Hossain", roll: 2 },
];
