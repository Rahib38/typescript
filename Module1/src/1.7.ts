const greetfriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};
greetfriends("abdul", "habul");

const bros1: string[] = ["nadim", "nadim", "mamun"];
const bros2: string[] = ["Rohim", "korim", "mujahid"];

bros1.push(...bros2);
console.log(bros1);

const mentor1 = {
  node: "korim",
  express: "rohim",
};
const mentor2 = {
  prisma: "shahin",
  react: "mir",
};
const mentorList = {
  ...mentor1,
  ...mentor2,
};
console.log(mentorList);
