// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Objects     -----
console.log(`-------       Objects       -------`);

// ---   Crearea unui obiect   ---
console.log(`---   Crearea unui obiect   ---`);

const books = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(books);

// ---   Proprietăți anexate la o proprietate   ---
console.log(`---   Proprietăți anexate la o proprietate   ---`);

const users = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

console.log(users);

// ---   Accesarea proprietăților prin punct   ---
console.log(`---   Accesarea proprietăților prin punct   ---`);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice); // undefined

// ---   Accesarea proprietăților anexate   ---
console.log(`---   Accesarea proprietăților anexate   ---`);

// - exemplu 1-cu puncte -
console.log(`- exemplu 1-cu puncte -`);

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location1: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

const location1 = user.location1;
console.log(location1); // Obiectul location

const country = user.location1.country;
console.log(country); // 'Jamaica'

// - exemplu 2 -cu [] -
console.log(`- exemplu 2 -cu [] -`);

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

// ---   Accesarea proprietăților prin paranteze pătrate   ---
console.log(`---   Accesarea proprietăților prin paranteze pătrate   ---`);

const booke = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookeTitle = booke["title"];
console.log(bookeTitle); // 'The Last Kingdom'

const bookeGenres = booke["genres"];
console.log(bookeGenres); // ['historical prose', 'adventurs']

const propKey = "author";
const bookeAuthor = booke[propKey];
console.log(bookeAuthor); // 'Bernard Cornwell'

// ---   Modificarea valorii unei proprietăți   ---
console.log(`---   Modificarea valorii unei proprietăți   ---`);

const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book1);

book1.rating = 9;
book1.isPublic = false;
book1.genres.push("love");

console.log(book1.rating); // 9
console.log(book1.isPublic); // false
console.log(book1.genres); // ['historical prose', 'adventures', 'drama']

// ---   Adăugarea proprietăților   ---
console.log(`---   Adăugarea proprietăților   ---`);

const booki = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

booki.pageCount = 836;
booki.originalLanguage = "en";
booki.translations = ["fr", "ro"];

console.log(booki);

console.log(booki.pageCount); // 836
console.log(booki.originalLanguage); // 'en'
console.log(booki.translations); // ['fr', 'ro']

// ---   Proprietăți scurte   ---
console.log(`---   Proprietăți scurte   ---`);

// - exemplu 1 - cu repetare(ambiguu) -
console.log(`- exemplu 1 - cu repetare(ambiguu) -`);

const name = "Henry Deep";
const age = 25;

const usere = {
  name: name,
  age: age,
};

console.log(usere.name); // "Henry Deep"
console.log(usere.age); // 25

// - exemplu 2 - cu proprietate scurta -
console.log(`- exemplu 2 - cu proprietate scurta -`);

const name2 = "Henry Deep";
const age2 = 25;

const user2 = {
  name2,
  age2,
};

console.log(user2.name2); // "Henry Deep"
console.log(user2.age2); // 25

// ---   Proprietăți calculate   ---
console.log(`---   Proprietăți calculate   ---`);

// - exemplu 1 - cu [] -
console.log(`- exemplu 1 - cu []) -`);

const propName = "name";
const user3 = {
  age: 25,
};

user3[propName] = "Henry Deep";
console.log(user3.name); // 'Henry Deep'

// - exemplu 2 - cu proprietate calculata -
console.log(`- exemplu 2 - cu proprietate calculata -`);

const propName1 = "name";
const user4 = {
  age: 25,
  // Numele acestei proprietăți va fi luat din valoarea variabilei propName
  [propName1]: "Henry Deep",
};

console.log(user4.name); // 'Henry Deep'

// ---   Metodele unui obiect   ---
console.log(`---   Metodele unui obiect   ---`);

// ✅ Entități grupate logic și sintactic
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Este o metodă de obiect
  getBooks() {
    console.log("Această metodă va returna toate cărțile - proprietatea books");
  },
  // Este o metodă de obiect
  addBook(bookName) {
    console.log("Această metodă va adăuga o carte nouă în proprietatea books");
  },
};

// Apeluri de metodă
bookShelf.getBooks();
bookShelf.addBook("O carte nouă");

// ---   Accesarea proprietăților obiectului în metode   ---
console.log(`---   Accesarea proprietăților obiectului în metode   ---`);

const bookShelf1 = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

// Înaintea punctului se specifică obiectul bookShelf1,
// de aceea atunci când o metodă este apelată, this va stoca o referință.
bookShelf1.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// - exemplu 2 - cu cale spre proprietate  -
console.log(`- exemplu 2 - cu cale spre proprietate -`);

const bookShelf2 = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf2.getBooks()); // ["The Last Kingdom"]
bookShelf2.addBook("The Mist");
bookShelf2.addBook("Dream Guardian");
console.log(bookShelf2.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf2.removeBook("The Mist");
console.log(bookShelf2.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// -----     Metode de iterare a unui obiect     -----
console.log(`-------       Metode de iterare a unui obiect       -------`);

// ---   Ciclul for...in   ---
console.log(`---   Ciclul for...in   ---`);

const book4 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book4) {
  // Cheia
  console.log(key);
  // Valoarea proprietății cu o astfel de cheie
  console.log(book4[key]);
}

// ---   Metoda hasOwnProperty()   ---
console.log(`---   Metoda hasOwnProperty()   ---`);

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Daisy";

console.log(dog); // {name: 'Daisy'}
console.log(dog.name); // 'Daisy'
console.log(dog.legs); // 4

// ❌ Returnează true pentru toate proprietățile
console.log(`❌ Returnează true pentru toate proprietățile`);
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Returnează true numai pentru proprietățile proprii/native
console.log(`✅ Returnează true numai pentru proprietățile proprii/native`);
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

// - exemplu 2 - cu for..in si  hasOwnProperty -
console.log(`- exemplu 2 - cu cu for..in si  hasOwnProperty -`);

const book5 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book5) {
  // Dacă aceasta este o proprietate nativă - se va executa codul din corpul if
  if (book5.hasOwnProperty(key)) {
    console.log(key);
    console.log(book5[key]);
  }

  // Dacă nu este o proprietate nativă - nu facem nimic.
}

// ---   Metoda Object.keys()   ---
console.log(`---   Metoda Object.keys()   ---`);

// - exemplu 1 - cu  Object.keys() -
console.log(`- exemplu 1 - cu Object.keys() -`);

const book6 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book6);
console.log(keys); // ['title', 'author', 'genres', 'rating']

// - exemplu 2 - cu for...of si  Object.keys() -
console.log(`- exemplu 2 - cu cu for...of si  Object.keys() -`);

const book7 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys1 = Object.keys(book7);

for (const key of keys1) {
  // Cheia
  console.log(key);
  // Valoarea cheii din obiect
  console.log(book7[key]);
}

// ---   Metoda Object.values()   ---
console.log(`---   Metoda Object.values()   ---`);

// - exemplu 1 - cu  Object.values() -
console.log(`- exemplu 1 - cu Object.values() -`);

const book8 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys2 = Object.keys(book8);
console.log(keys2); // ['title', 'author', 'rating']

const values = Object.values(book8);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// - exemplu 2 - cu for...of si  Object.values() -
console.log(`- exemplu 2 - cu cu for...of si  Object.values() -`);

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values0 = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values0) {
  total += value;
}

console.log(total); // 20

// ---   Metoda Object.entries()   ---
console.log(`---   Metoda Object.entries()   ---`);

const book9 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys3 = Object.keys(book9);
console.log(keys3); // ['title', 'author', 'rating']

const values1 = Object.values(book9);
console.log(values1); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book9);
// [["title","The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
console.log(entries);

// -----     Array de obiecte     -----
console.log(`-------       Array de obiecte       -------`);

const books0 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "O scrisoare pierdută",
    author: "I.L.Caragiale",
    rating: 8.51,
  },
  {
    title: "Romeo și Julieta",
    author: "William Shakespeare",
    rating: 7.75,
  },
];

console.log(books0);

for (const book of books0) {
  // Obiectul carte
  console.log(book);
  // Titlul
  console.log(book.title);
  // Autorul
  console.log(book.author);
  // Rating-ul
  console.log(book.rating);
}

// - exemplu 2 - De exemplu, ca să obținem o listă cu toate titlurile cărților din colecția
cărți: -console.log(`exemplu 2 - De exemplu, ca să obținem o listă cu toate titlurile cărților din colecția cărți:
`);

const bookNames = [];
let bookNames1 = "";

for (const book of books0) {
  bookNames.push(book.title);
  bookNames1 = bookNames1.concat(`${book.title} `);
}

console.log(bookNames1);
console.log(bookNames); // ["The Last Kingdom", "O scrisoare pierdută", "Romeo și Julieta"]

// - exemplu 3 - De exemplu, ca să obținem rating-ul mediu a întregii noastre colecții
cărți: -console.log(`exemplu 3 - De exemplu, ca să obținem rating-ul mediu a întregii noastre colecții
`);

let totalRating = 0;

for (const book of books0) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books0.length).toFixed(1);
console.log(averageRating); // 8.2

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// -----  exemplu  ----
console.log("-----  exemplu  ----");

// -----  exercitiu 1 ----
console.log("-----  exercitiu 1  ----");

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);
