{
  interface Developer<T, X = null> {
    name: string;
    computer: {
      band: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type Emiled = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<Emiled> = {
    name: "Nadim",
    computer: {
      band: "Asus",
      model: "x-255ur",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw65",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: true;
  }
  interface yamaha {
    brand: string;
    model: string;
  }

  const richDeveloper: Developer<AppleWatch, yamaha> = {
    name: "Tasniya",
    computer: {
      band: "Hp",
      model: "x-256ur",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "kw64",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "yamaha",
      model: "kl52",
    },
  };
}
