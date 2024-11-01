{
  // unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };
  searchName(null);

  //   unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(convertSpeed);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond("1000");

  // never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("mushkil se error hogaya");
}
