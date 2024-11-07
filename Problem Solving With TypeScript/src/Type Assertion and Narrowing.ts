{
  function fun(input: string | number): number {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input * input;
    }
  }
  console.log(fun("shifgneis"));
}
