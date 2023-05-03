const user_details: {
  name: string;
  age: number;
  isMarried: boolean;
  company: "Google" | "Facebook" | "Amazon";
  readonly wife?: string;
} = {
  name: "Hayes",
  age: 34,
  isMarried: true,
  company: "Facebook",
  wife: "Sara",
};


user_details.company = "Amazon";