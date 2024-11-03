{
  type vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; /*manually*/

  type Owner2 = keyof vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "mr x",
    age: 26,
    address: "ctg",
  };
  const car = {
    model: "Toyota 100",
    year: 200,
  };
  const result1 = getPropertyValue(car, "model");
}
