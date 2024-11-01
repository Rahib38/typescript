const greetfriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friends}`));
};
greetfriends("abdul", "habul");

const bros1: string[] = ["nadim", "nadim", "mamun"];
const bros2: string[] = ["Rohim", "korim", "mujahid"];

bros1.push(...bros2);
console.log(bros1);
