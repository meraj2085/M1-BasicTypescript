// Ternary operator
const candidate_age: number = 18;
// if(candidate_age>=18){
//      console.log("You are eligible to vote");
// }
// else{
//      console.log("You are not eligible to vote");
// }

const isAdult =
  candidate_age >= 18 ? "You are eligible" : "You are not eligible";
// console.log(isAdult);

// Nullish coalescing operator
// Only works with null & undefined
const isAuthenticated = null;
const userName = isAuthenticated ?? "Guest";

type Manush = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    home?: "Dhaka" | "Chittagong";
  };
};
const manushOne: Manush = {
  name: "Rahim",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const home = manushOne?.address?.home ?? "No home";
console.log(home);
