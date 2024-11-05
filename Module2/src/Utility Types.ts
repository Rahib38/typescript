{
  type Person = {
    name: string;
    age: number;
    email?: string;
    contacts: string;
  };
  // pick

  type NameAge = Pick<Person, "name" | "age">;

  // omit

  type ContactInfo = Omit<Person, "name" | "age">;

  // Required

  type PersonRequired = Required<Person>;

  // Partial

  type PersonPartial = Partial<Person>;

  //Readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "mr x",
    age: 200,
    contacts: "01812455474",
  };
  // person1.name = "mr y";
}
