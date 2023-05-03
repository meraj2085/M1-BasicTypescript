// Ex: 1
let emni: any;
emni = "I am Emni";
(emni as string).toUpperCase();
<string>emni.toUpperCase();

// Ex: 2
function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `${value}g`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `${value}g`;
  }
}
const result = kgToGram(1000) as number;
const result2 = <string>kgToGram("1000");

// Ex: 3
type CustomErrorType = {
  message: string;
};
try {
  // Hi
} catch (err) {
  console.log((err as CustomErrorType).message);
}
