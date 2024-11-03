{
  // const rollNumbers:number=[3, 4, 5];

  // Generices
  type GenericesArray = Array<string>;
  const rollNumbers: Array<number> = [3, 4, 5];
  const mentors: GenericesArray = ["mr x", "mr Y", "mr z"];

  //   Generices use to array

  type GenericesArr<T> = Array<T>;

  const user: GenericesArr<{ name: string; age: number }> = [
    {
      name: "mezba",
      age: 120,
    },
    {
      name: "Jhankar",
      age: 110,
    },
  ];
}
