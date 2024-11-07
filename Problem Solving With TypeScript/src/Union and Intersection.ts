{
  interface book {
    title: string;
    page: number;
  }
  interface magazine {
    title: string;
    page: number;
    publushed: number;
  }

  type unionBookMagazine = book | magazine;
  type intersectionBookMagazine = book & magazine;

  const myItem: unionBookMagazine = {
    title: "sfedfgs",
    page: 26,
  };
  const item: intersectionBookMagazine = {
    title: "dhe",
    page: 25,
    publushed: 2005,
  };
  console.log(myItem);
  console.log(item);
}
