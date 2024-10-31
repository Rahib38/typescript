const greetfriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friends}`));
};
greetfriends("abdul", "habul");
