// Normal function
function add(x: number, y: number = 10): number {
  return x + y;
}
add(2, 3);

// Arrow function
const add2 = (x: number, y: number): number => {
  return x + y;
};
add2(2, 3);

// Callback function
const arr = [1, 2, 3, 4, 5];
const newArray = arr?.map((num: number) => num * num);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "John",
  balance: 1000,
  addBalance(money: number) {
    return `My new balance is ${this.balance + money}`;
  },
};

// spread operator
const friends = ["John", "Peter", "Bob"];
const newFriends = ["Anna", "Mary", "Kate"];
friends.push(...newFriends);

// rest operator
const greetFriends = (...friends: string[]): void => {
  friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
  });
};
greetFriends("John", "Peter", "Bob");

// Array & object destructuring
const myBestFriend = {
  fullName: "John Doe",
  age: 25,
};
const [bestFriend] = friends;
const { fullName, age } = myBestFriend;
