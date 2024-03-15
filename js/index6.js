// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Operatorul spread și rest     -----
console.log(`-------       Operatorul spread și rest       -------`);

// ---   spread: transmiterea argumentelor   ---
console.log(`---   spread: transmiterea argumentelor   ---`);

const temps = [14, -4, 25, 8, 11];
console.log(temps.slice(0));

// Consola va printa o matrice
console.log(temps);
// ❌ Acest lucru nu va funcționa deoarece transmitem o matrice întreagă
console.log(Math.max(temps)); // NaN

// În consolă se va printa un set de numere individuale
console.log(...temps);
// ✅ Pulverizăm o colecție de elemente ca și niște argumente individuale
console.log(Math.max(...temps)); // 25

// ---   spread: crearea unei noi matrice   ---
console.log(`---   spread: crearea unei noi matrice   ---`);

const temps0 = [14, -4, 25, 8, 11];

// Este o copie exactă, dar independentă a matricei temps
const copyOfTemps = [...temps0];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
console.log(`copyOfTemps:` + copyOfTemps);

// - exemplu 2-cu 2 array -
console.log(`- exemplu 2-cu 2 array  -`);

const lastWeekTemps = [14, 25, 11];
console.log(lastWeekTemps);
const currentWeekTemps = [23, 17, 18];
console.log(currentWeekTemps);
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ---   spread: crearea unui obiect nou   ---
console.log(`---   crearea unui obiect nou   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const first = { propA: 5, propB: 10 };
console.log(first);
const second = { propC: 15 };
console.log(second);
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

// - exemplu 2-cu suprascriere -
console.log(`- exemplu 2-cu suprascriere -`);

const first0 = { propA: 5, propB: 10, propC: 50 };
console.log(first0);
const second0 = { propC: 15, propD: 20 };
console.log(second0);

const third0 = { ...first0, ...second0 };
console.log(third0); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second0, ...first0 };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// - exemplu 3-cu adaugare -
console.log(`- exemplu 2-cu adaugare -`);

const first1 = { propA: 5, propB: 10, propC: 50 };
console.log(first1);

const second1 = { propC: 15 };
console.log(second1);

const third1 = { propB: 20, ...first1, ...second1 };
console.log(`propB: 20, ...first1, ...second1`, third1); // { propA: 5, propB: 10, propC: 15 }

const fourth0 = { ...first1, ...second1, propB: 20 };
console.log(`...first1, ...second1, propB: 20`, fourth0); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first1, propB: 20, ...second1 };
console.log(`...first1, propB: 20, ...second1`, fifth); // { propA: 5, propB: 20, propC: 15 }

// ---   rest: colectarea tuturor argumentelor unei funcţii   ---
console.log(`---   rest: colectarea tuturor argumentelor unei funcţii   ---`);

function multiply(...args) {
  console.log(args); // o matrice cu toate argumentele
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// ---   rest: colectarea unei părți din argumentele funcției   ---
console.log(`---   rest: colectarea unei părți din argumentele funcției   ---`);

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Valoarea primului argument
  console.log(secondNumber); // Valoarea celui de al doilea argument
  console.log(otherArgs); // O matrice cu restul argumentelor
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// -----     Destructurarea unui obiect     -----
console.log(`-------       Destructurarea unui obiect       -------`);

// ---   Destructurarea unui obiect   ---
console.log(`---   Destructurarea unui obiect   ---`);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "public" : "private";
const message = `Cartea ${book.title} de ${book.author} cu un rating de ${book.rating} are acces ${accessType}.`;
console.log(message);

// - exemplu 2- destructurat -
console.log(`- exemplu 1- destructurat -`);

const book0 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Destructurăm
const { title, author, isPublic, rating, coverImage } = book0;
console.log(coverImage); // undefined

const accessType0 = isPublic ? "public" : "private";
const message0 = `Cartea ${title} de ${author} cu un rating de ${rating} are acces ${accessType}.`;
console.log(message0);

// ---   Valori implicite   ---
console.log(`---   Valori implicite   ---`);

const book1 = {
  title1: "The Last Kingdom",
  author1: "Bernard Cornwell",
};

// Adăugăm o imagine de copertă dacă aceasta nu se află în obiectul carte
const {
  title1,
  coverImage1 = "https://via.placeholder.com/640/480",
  author1,
} = book1;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480

// ---   Modificarea numelui la o variabilă   ---
console.log(`---   Modificarea numelui la o variabilă   ---`);

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Amintiri din copilărie",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "asdhttps://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Amintiri din copilărie
console.log(secondCoverImage); // asdhttps://via.placeholder.com/640/480

// ---   Destructurarea în cicluri   ---
console.log(`---   Destructurarea în cicluri   ---`);

// - exemplu 1 - cu for...of -
console.log(`- exemplu 1 - cu for...of -`);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Baltagul",
    author: "Mihail Sadoveanu",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

// - exemplu 2 - cu for...of si destructurare -
console.log(`- exemplu 2 - cu for...of si destructurare -`);

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// - exemplu 3-la fel dar cu o variabila direct in for -
console.log(`- exemplu 3-la fel dar cu o variabila direct in for -`);

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// ---   Nested Destructuring Assignments   ---
console.log(`---   Nested Destructuring Assignments   ---`);

const user = {
  namee: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  namee,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(namee); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// -----     Destructurarea unui array     -----
console.log(`-------       Destructurarea unui array       -------`);

// - exemplu 1 - array => atribuire variabila -
console.log(`- exemplu 1 - array => atribuire variabila -`);

const rgb = [200, 255, 100];
console.log(rgb);

const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// - exemplu 2 - atribuire variabila ulterior declararii variabilei -
console.log(
  `- exemplu 2 - atribuire variabila ulterior declararii variabilei -`
);

const rgb0 = [200, 255, 100];
console.log(rgb0);

let red0, green0, blue0;

[red0, green0, blue0] = rgb0;

console.log(`R:${red0},G:${green0},B:${blue0}`); // "R:200,G:255,B:100"

// - exemplu 3 - atribuire variabila suplimentar cu valoare -
console.log(`- exemplu 3 - atribuire variabila suplimentar cu valoare -`);

const rgb1 = [200, 100, 255];
console.log(rgb1);

const [red1, green1, blue1, alfa = 0.3] = rgb1;

console.log(`R:${red1},G:${green1},B:${blue1},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// - exemplu 4 - stocare cu ...rest -
console.log(`- exemplu 4 - stocare cu ...rest -`);

const rgb2 = [200, 255, 100];
console.log(rgb2);

const [red2, ...colors] = rgb2;

console.log(red2); // "200"
console.log(colors); // [255, 100]

// - exemplu 5 - omitere primele si luata ultima -
console.log(`- exemplu 5 - omitere primele si luata ultima -`);

const rgb3 = [200, 100, 255];
console.log(rgb3);

const [, , blue3] = rgb3;

console.log(`Blue: ${blue3}`); // "Blue: 255"

// -----     RORO pattern (receive an object, return an object)     -----
console.log(
  `-------       RORO pattern (receive an object, return an object)       -------`
);

// - exemplu 1- cu apelare neclara a functiei -
console.log(`- exemplu 1- cu apelare neclara a functiei -`);

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Se execută codul cu parametrii primiți
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  // Și funcția continuă
}

// - exemplu 2- cu apelare RORO (inlocuire parametrii cu obiect) -
console.log(`- exemplu 2- cu apelare RORO (inlocuire parametrii cu obiect) -`);

function doStuffWithBook(book) {
  // Se execută codul cu parametrii primiți
  console.log(book.title);
  console.log(book.numberOfPages);
  console.log(rating);
  console.log(isPublic);

  // Și funcția continuă
}

// ✅ Codel devine mult mai clar
doStuffWithBook({
  downloads: 10283,
  title: "The Last Kingdom",
  numberOfPages: 736,
  rating: 8.38,
  isPublic: true,
});

// - exemplu 2- cu destructurare obiect in corp  functie -
console.log(`- exemplu 2- cu destructurare obiect in corp  functie -`);

const book41 = {
  downloads: 10283,
  title: "The Last Kingdom",
  numberOfPages: 736,
  rating: 8.38,
  isPublic: true,
};

const book42 = ["The Last Kingdom", 736, 10283, 8.38, true];

function doStuffWithBook(book4) {
  const { title, numberOfPages, downloads, rating, isPublic } = book4;
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);

  // Și funcția continuă
}

doStuffWithBook(book41);

// - exemplu 2- imediat in semnatura functiei -
console.log(`- exemplu 2- imediat in semnatura functiei -`);

function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  // Și funcția continuă
}

doStuffWithBook(book41);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// -----  exercitiu 1 generare string aleatoriu  ----
console.log("-----  exercitiu 1 generare string aleatoriu  ----");

function generateRandomString(desiredLength) {
  const allowedCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";

  let randomString = "";

  const min = 0;
  const max = allowedCharacters.length;

  for (let i = 0; i < desiredLength; i++) {
    const randomIndex = Math.floor(Math.random() * (max - min) + min);
    randomString += allowedCharacters[randomIndex];
  }

  return randomString;
}

console.log(generateRandomString(11));

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

// ------     Exercitii autoverificare 3     ------
console.log(`---------        Exercitii autoverificare 3        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

const tags = ["premium", "promoted", "top"];
tags.push("push");
console.log(tags);

// - exercitiul-2 -
console.log(`- exercitiul-2 -`);

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);

// - exemplu -
console.log(`- exemplu -`);

const book12 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book12) {
  // Cheie
  console.log(key);
  // Valoarea proprietății cu o astfel de cheie
  console.log(book12[key]);
}

// - exercitiul-3 -
console.log(`- exercitiul-3 -`);

const keys0 = [];
const values0 = [];
const advert = {
  service: "apt",
};
const apartment0 = Object.create(advert);
apartment0.descr = "Spacious apartment in the city center";
apartment0.rating = 4;
apartment0.price = 2153;

for (const key in apartment0) {
  // Change code below this line
  if (apartment0.hasOwnProperty(key)) {
    keys0.push(key);
    values0.push(apartment0[key]);
  }
  // Change code above this line
}
console.log(keys0);
console.log(values0);

// - exemplu Object.create(object) -
console.log(`- exemplu Object.create(object) -`);

/*
Metoda Object.create(animal) creează și returnează
 un nou obiect asociindu-l cu obiectul animal. 
 Prin urmare, putem obținem valoarea proprietății 
 legs făcând doar referire la ea cu sintaxa dog.legs, 
 chiar dacă nu se află în obiectul dog, este o 
 proprietate moștenită a obiectului animal, deși 
 nu este proprie.
*/

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4

// ❌ Returnează true pentru toate proprietățile
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Returnează true doar pentru propriile proprietăți
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

// - exercitiul-4 -
console.log(`- exercitiul-4 -`);

// -metoda 1-
console.log(`-metoda 1-for...in`);

function countProps1(object) {
  let propCount = 0;
  // Change code below this line
  let keys = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  propCount = keys.length;
  console.log(propCount);

  // Change code above this line
  return propCount;
}

countProps1({});
countProps1({ name: "Mango", age: 2 });
countProps1({ mail: "poly@mail.com", isOnline: true, score: 500 });

// -metoda 2-
console.log(`-metoda 2-Object.keys(object)`);

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  propCount = Object.keys(object).length;
  // Change code above this line
  console.log(propCount);
  return propCount;
}

countProps({});
countProps({ name: "Mango", age: 2 });
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// - exercitiul-5 -
console.log(`- exercitiul-5 -`);

// -metoda 1-
console.log(`-metoda 1-for...in`);

function countProps0(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  console.log(propCount);
  return propCount;
  // Change code above this line
}

countProps0({});
countProps0({ name: "Mango", age: 2 });
countProps0({ mail: "poly@mail.com", isOnline: true, score: 500 });

// -metoda 2-
console.log(`-metoda 2-Object.keys(object)`);

function countProps2(object) {
  // Change code below this line
  let propCount = 0;

  propCount = Object.keys(object).length;
  console.log(propCount);
  return propCount;

  // Change code above this line
}

countProps({});
countProps2({ name: "Mango", age: 2 });
countProps2({ mail: "poly@mail.com", isOnline: true, score: 500 });

// - exercitiul-5 -
console.log(`- exercitiul-5 -`);

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let totalPrice = 0;
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      console.log(totalPrice);
      return totalPrice;
    }
  }
  console.log("null");
  return null;
  // Change code above this line
}

getProductPrice("Radar");
getProductPrice("Grip");
getProductPrice("Scanner");
getProductPrice("Droid");
getProductPrice("Engine");

// -varianta 2-
console.log(`-varianta 2-`);

function getProductPrice0(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      console.log(product.price);
      return product.price;
    }
  }
  console.log("null");
  return null;
  // Change code above this line
}

getProductPrice0("Radar");
getProductPrice0("Grip");
getProductPrice0("Scanner");
getProductPrice0("Droid");
getProductPrice0("Engine");

// - exercitiul-6 -
console.log(`- exercitiul-6 -`);

const products1 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let values = [];

  for (const product of products1) {
    for (const key in product) {
      if (key === propName) {
        const element = product[propName];
        values.push(element);
      }
    }
  }
  console.log(values);
  return values;
}

// Change code above this line

getAllPropValues("name");
getAllPropValues("price");
getAllPropValues("quantity");
getAllPropValues("category");

// - exercitiul-7 -
console.log(`- exercitiul-7 -`);

// -varianta 1-
console.log(`-varianta 1 cu destructurare in conditia for...off-`);

const colors1 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors1) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

console.log(hexColors);
console.log(rgbColors);

// -varianta 2-
console.log(`-varianta 2-cu destructurare in bucla for...off`);

const colors2 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors0 = [];
const rgbColors0 = [];
// Change code below this line

for (color of colors1) {
  const { hex, rgb } = color;
  hexColors0.push(hex);
  rgbColors0.push(rgb);
}

console.log(hexColors0);
console.log(rgbColors0);

// - exercitiul-8 -
console.log(`- exercitiul-8 -`);

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: { low: lowToday, high: highToday, icon: todayIcon },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
console.log(highTomorrow);
console.log(tomorrowIcon);
console.log(lowToday);
console.log(todayIcon);

// Change code below this line

// - exercitiul-9 -
console.log(`- exercitiul-9 -`);

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

calculateMeanTemperature({
  today: { low: 28, high: 32 },
  tomorrow: { low: 25, high: 29 },
});

calculateMeanTemperature({
  today: { low: 37, high: 40 },
  tomorrow: { low: 33, high: 38 },
});

// - exercitiul-10 -
console.log(`- exercitiul-10 -`);

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  // Change code below this line
  const initial = {
    category,
    priority,
    completed,
  };

  console.log({ ...initial, ...data });
  return { ...initial, ...data };
  // Change code above this line
}

makeTask({}); //{ category: "General", priority: "Normal", completed: false }
makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
makeTask({ category: "Finance", text: "Take interest" }); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }
makeTask({ priority: "Low", text: "Choose shampoo" }); //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }
makeTask({ text: "Buy bread" }); //priority: "Normal", text: "Buy bread", completed: false }

// - exercitiul-11 -
console.log(`- exercitiul-11 -`);

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    console.log("Returning all books");
    return "Returning all books";
  },
  addBook(bookName) {
    console.log(`Adding book ${bookName}`);
    return `Adding book ${bookName}`;
  },

  removeBook(bookName) {
    console.log(`Deleting book ${bookName}`);
    return `Deleting book ${bookName}`;
  },

  updateBook(oldName, newName) {
    console.log(`Updating book ${oldName} to ${newName}`);
    return `Updating book ${oldName} to ${newName}`;
  },

  // Change code above this line
};

bookShelf.addBook("Haze");
bookShelf.getBooks();
bookShelf.updateBook("Sands of dune", "Dune");
bookShelf.removeBook("Red sunset");

// - exercitiul-12 -
console.log(`- exercitiul-12 -`);

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    console.log(this.potions);
    return this.potions;

    // Change code above this line
  },
};

atTheOldToad.addPotion("Invisibility");
atTheOldToad.addPotion("Power potion");

// - exercitiul-13 -
console.log(`- exercitiul-13 -`);

const atTheOldToad1 = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line

  getPotions() {
    console.log(this.potions);
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        console.log(
          `Error! Potion ${newPotion.name} is already in your inventory!`
        );
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    console.log(this.potions);
  },

  removePotion(potionName) {
    let potionIndex = -1;
    for (let i = 0; i < this.potions.length; i++) {
      let potion = this.potions[i];
      if (potion.name === potionName) {
        potionIndex = i;
      }
    }
    if (potionIndex === -1) {
      console.log(`Potion ${potionName} is not in inventory!`);
      return `Potion ${potionName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1);
    console.log(this.potions);
  },

  updatePotionName(oldName, newName) {
    let potionIndex = -1;
    for (let i = 0; i < this.potions.length; i++) {
      let potion = this.potions[i].name;
      if (potion === oldName) {
        potionIndex = i;
      }
    }

    if (potionIndex === -1) {
      console.log(`Potion ${oldName} is not in inventory!`);
      return `Potion ${oldName} is not in inventory!`;
    }
    this.potions[potionIndex].name = newName;
    console.log(this.potions);
  },
  // Change code above this line
};

atTheOldToad1.getPotions(); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

atTheOldToad1.addPotion({ name: "Invisibility", price: 620 });

atTheOldToad1.addPotion({ name: "Power potion", price: 270 });

atTheOldToad1.addPotion({ name: "Dragon breath", price: 700 }); //"Error! Potion Dragon breath is already in your inventory!"

atTheOldToad1.addPotion({ name: "Stone skin", price: 240 }); //"Error! Potion Dragon breath is already in your inventory!"

atTheOldToad1.removePotion("Dragon breath"); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

atTheOldToad1.removePotion("Speed potion"); //[ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

atTheOldToad1.getPotions();

atTheOldToad1.updatePotionName("Power potion", "Polymorth"); //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]

atTheOldToad1.updatePotionName("Stone skin", "Invulnerability potion"); //potions va fi [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
