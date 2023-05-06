const crush_5 = "Millie Bobby Brown";
type MandatoryInfoType = { name: string; age: number; salary: number };
type MyInfoType = {
  name: string;
  age: number;
  salary: number;
};
const MyInformation = {
  name: "Meraj",
  age: 21,
  salary: 100000,
};
const addMeIntoMyCrush = <T extends MandatoryInfoType>(myInfo: T) => {
  const crush = "Millie Bobby Brown";
  return { ...myInfo, crush_5 };
};
const result_5 = addMeInMyCrush<MyInfoType>(MyInformation);
