// -- Type Alias
type User = {
  name: string;
  age: number;
};
type extendedUser = User & {
  roll: string;
};
const userWithTypeAlias: extendedUser = {
  name: "Emni",
  age: 20,
  roll: "123",
};
// Object, Function, Arrays
type addNumType = (x: number, y: number) => number;
const addNum: addNumType = (x, y) => x + y;

type rollNumType = number[];
const userRoll: rollNumType = [1, 2, 3, 4, 5];

// -- Interface
interface IUser { name: string, age: number }
interface IExtendedUser extends IUser {roll: string}
const newUser: IExtendedUser = {
  roll: "123",
  name: "Emni",
  age: 20,
};

interface IAddNum {(x: number, y: number): number;}
const addNum2: IAddNum = (x, y) => x + y;

interface IUserRoll {[index: number]: number;}
const userRoll2: IUserRoll = [1, 2, 3, 4, 5];
