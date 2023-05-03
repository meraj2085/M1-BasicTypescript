type NoobDev = {
  name: string;
};
type JuniorDev = NoobDev & {
  expertise: string;
  experience: number;
};
type NextLevelDev = JuniorDev & {
  leadershipExp: boolean;
};

const newDev: NoobDev | JuniorDev | NextLevelDev = {
  name: "John Doe",
  expertise: "Frontend",
  experience: 1,
  leadershipExp: true,
};
