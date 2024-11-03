{
  const arrOfNumber: number[] = [1, 3, 4];
  const arrOfString: string[] = arrOfNumber.map((number) => number.toString());
  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
  type AreString<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
