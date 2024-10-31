{
  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //   ternary

  const idAdult = age >= 18 ? "Adult" : "Not adult";
  console.log(idAdult);

  //   nullish

  const isAuthenticate = "";
  const result1 = isAuthenticate ?? "Guest";
  const result2 = isAuthenticate ? isAuthenticate : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      premanentAddress?: string;
    };
  };

  const user: User = {
    name: "Nadim",
    address: {
      city: "Feni",
      road: "Awesome road",
      presentaddress: "Feni town",
    },
  };
  const premanentAddress =
    user?.address?.premanentAddress ?? "No permanetAddress";
  console.log(premanentAddress);
}
