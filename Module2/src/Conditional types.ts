{
  type a1 = number;
  type b2 = string;
  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b2 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type HasPlane = CheckVehicle<"plane">;
}
