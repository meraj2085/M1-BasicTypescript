type PersonType = {
     name: string;
     age: number;
     address: string;
}
// type newType = "name" | "age" | "address"; // Manually
type newType = keyof PersonType;
const a: newType = "age";

