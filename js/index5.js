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
  title: ["The Last Kingdom", "pupaza din tei"],
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

console.log("----------------- question ---------------");

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line

  for (let product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return console.log(`we don't have this product`);
}

console.log(calculateTotalPrice("Radar"));
calculateTotalPrice("Radarr");

// -----  exemplu interesant ----
console.log("-----  exemplu interesant: for..in la array => indexurile ----");

const words = ["salut", "ce", "faci"];
console.log(words);

for (const word in words) {
  console.log(word);
}

console.log("----------------- object iteration ---------------");

const goItPeople = {
  12345: {
    name: "Cristi",
    surname: "Socaci",
    age: 25,
  },
  22345: {
    name: "Iani",
    surname: "Misoc",
    age: 23,
  },
};

console.log(goItPeople.hasOwnProperty("12345"));
console.log(goItPeople.hasOwnProperty("123456"));

for (const identifier in goItPeople) {
  const person = goItPeople[identifier];
  console.log(`${identifier}: ${person.name} ${person.surname}`);
}

console.log(Object.keys(goItPeople));

console.log(Object.values(goItPeople));

console.log(Object.entries(goItPeople));

for (const identifier of Object.keys(goItPeople)) {
  const person = goItPeople[identifier];
  console.log(`${identifier}: ${person.name} ${person.surname}`);
}

console.log("----------------- object basics ---------------");

const productNameKey = "name";
const price = 1300;
const quantityy = 4;

// --- varianta cu functie in  object ---
console.log(`--- varianta cu functie in  object ---`);

const product = {
  [productNameKey]: "Radar",
  price,
  quantity: quantityy,
  available: true,
  priceHistory: [1200, 1250, 1399, 1300],
  hala: {
    address: "Cluj",
  },

  calculateTotalPrice() {
    return this.price * this.quantity;
  },
};

console.log(product.calculateTotalPrice());

console.log(product.name);
console.log(product[productNameKey]);

console.log(product.hala.address);

product.name = "Scanner";

console.log(product.name);

product.description = "Best product";

console.log(product.description);

console.log(product.price);
console.log(product.quantity);
console.log(product.quantityy);

// --- varianta cu functie in afara object ---
console.log(`--- varianta cu functie in afara object ---`);

function calculateTotalPrice(product) {
  return product.price * product.quantity;
}

console.log(calculateTotalPrice(product));

// ---- functia console.log ----
console.log(`---- functia console.log ----`);

const myConsole = {
  log(message) {
    console.log(message);
  },
};

myConsole.log(`Hello...!`);

console.log("----------------- array of objects ---------------");

const products2 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

// --- varianta cu for...off ---
console.log(`--- varianta cu for...off ---`);

for (const product of products2) {
  console.log(
    `Pretul produsului product.name este: ${calculateTotalPrice(product)}`
  );
}

// --- varianta cu for...in ---
console.log(`--- varianta cu for...in ---`);

for (const product in products2) {
  console.log(
    `Pretul produsului products2[product].name este: ${calculateTotalPrice(
      products2[product]
    )}`
  );
}

// -----  exercitiu 1 ----
console.log("-----  exercitiu 1  ----");

/*
Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. There is an `account` object
in which it is necessary to implement methods for working with balance and
transaction history.

*/

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const transactionTypes = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Each transaction is an object with properties: id, type and amount
 */
const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {
    let beginningId = 0;
    for (const transaction of this.transactions) {
      if (transaction.id > beginningId) {
        beginningId = transaction.id;
      }
    }
    return {
      id: beginningId + 1,
      amount,
      type,
    };
  },

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {
    this.balance += amount;

    const transaction = this.createTransaction(
      amount,
      transactionTypes.DEPOSIT
    );

    this.transactions.push(transaction);
  },

  /*
   *The method responsible for withdrawing the amount from the balance.
   * Принимает сумму танзакции.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log(
        `About the fact that the withdrawal of such an amount is not possible, there are not enough funds.`
      );
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(
      amount,
      transactionTypes.WITHDRAW
    );
    this.transactions.push(transaction);
  },

  /*
   * The method returns the current balance
   */
  getBalance() {
    return this.balance;
  },

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id !== id) {
        continue;
      }
      return transaction;
    }
  },

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

account.deposit(12);
account.deposit(13);

account.withdraw(20);
account.withdraw(20);

console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(3));

console.log(
  "deposit total:",
  account.getTransactionTotal(transactionTypes.DEPOSIT)
);
console.log(
  "withdraw total:",
  account.getTransactionTotal(transactionTypes.WITHDRAW)
);

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul- 1 -
console.log(`- exercitiul- 1 -`);

/*

Example 1 - Object Basics

Write a script that, for the `user0` object, successively:

- adds a `mood` field with value `'happy'`
- replaces the value `hobby` to `'skydiving'`
- replaces `premium` to `false`
- prints the contents of the `user` object in `key:value` format using
  `Object.keys()` and `for...of`

*/

const userOf = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

userOf.mood = `happy`;

userOf.hobby = `skydiving`;

userOf.premium = `false`;

function keyValue(object) {
  let key = Object.keys(object);
  let value = Object.values(object);
  let keyValue;

  for (let i = 0; i < Object.keys(object).length; i++) {
    keyValue = Object.keys(object)[i] + ":" + Object.values(object)[i];
    console.log(keyValue);
  }
  return keyValue;
}

keyValue(userOf);

// - exercitiul- 2 -
console.log(`- exercitiul- 2 -`);

/*
Example 2 -  Object.values() method

We have an object that stores our team salaries. Write code for
summing all salaries and store the result in the sum variable. Should
get 390. If the `salaries` object is empty, then the result should be 0.

*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const empty = {};

function getTotalSalaries(object) {
  let total = 0;

  for (const salarie of Object.values(object)) {
    total += salarie;
  }
  console.log(total);

  return total;
}

getTotalSalaries(salaries);
getTotalSalaries(empty);
