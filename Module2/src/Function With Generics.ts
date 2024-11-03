{
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1 = createArrayWithGeneric<string>("Bangladesh");

  type user = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<user>({
    id: 21,
    name: "sona",
  });

  const createGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "mr x",
    email: "x@gmail.com",
    devType: "nlwd",
  });
  const student2 = addCourseToStudent({
    name: "mr y",
    email: "y@gmail.com",
    handWatch: "Apple Watch",
  });
}
