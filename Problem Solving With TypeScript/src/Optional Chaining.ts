{
  function employCity(employ: {
    address?: { city?: string };
  }): string | undefined {
    return employ.address?.city;
  }
  const employ1 = { address: { city: "new york" } };
  console.log(employ1);
}
