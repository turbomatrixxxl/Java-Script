// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Contextul de execuție a unei funcții     -----
console.log(`-------       Contextul de execuție a unei funcții       -------`);

console.log(`-simplu-`);

// Vasile aleargă rapid pentru că Vasile încearcă să prindă trenul.
const vasile = {
  username: "Vasile",
  showName() {
    console.log(vasile.username);
  },
};

vasile.showName();

console.log(`-cu "this"-`);

// Vasile aleargă repede pentru că el (this) încearcă să prindă trenul.
const vasile1 = {
  username: "Vasile",
  showName() {
    console.log(this.username);
  },
};

vasile1.showName();

console.log(`-exemplu cu o colecție de cărți-`);

const bookShelf = {
  authors: ["Tudor Arghezi", "Mihai Eminescu"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Tudor Arghezi", "Mihai Eminescu"]
bookShelf.addAuthor("I.L. Caragiale");
console.log(bookShelf.getAuthors()); // ["Tudor Arghezi", "Mihai Eminescu", "I.L. Caragiale"]

// -----     Keywordul this - reguli de definire     -----
console.log(`-------       Keywordul this - reguli de definire       -------`);

// ---   this în global scope   ---
console.log(`---   this în global scope   ---`);

console.log(`window fără "use strict" și undefined cu "use strict"`);

// ("use strict");

function foo() {
  console.log(this);
}

foo(); // window fără "use strict" și undefined cu "use strict"

// ---   this în metoda unui obiect   ---
console.log(`---   this în metoda unui obiect   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const vasile3 = {
  username: "Vasile",
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};

vasile3.showThis(); // {username: "Vasile", showThis: ƒ, showName: ƒ}
vasile3.showName(); // 'Vasile'

// - exemplu 2 -
console.log(`- exemplu 2 -`);

function showThis() {
  console.log("this in showThis: ", this);
}

// Apelăm funcția unde contextul de execuție este în scope-ul global
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

// Atribuim unei proprietăți din obiectul user, funcția showThis
// Observați că nu este un apel de funcție - nu are ()
user.showContext = showThis;

// Apelăm funcția în contextul global
// this va indica obiectul curent,
// în contextul căruia se execută apelul funcției, nu și cel global.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// ---   this în funcțiile callback   ---
console.log(`---   this în funcțiile callback   ---`);

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() este un apel la metoda getFullName care
  // nu și-a păstrat contextul obiectului customer
  console.log(`Se procesează cererea primită de la ${callback()}.`);
}

makeMessage(customer.getFullName); // Va apărea o eroare la apelarea funcției(Se procesează cererea primită de la undefined undefined.)

// ---   this în funcția arrow   ---
console.log(`---   this în funcția arrow   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-global -`);

const showThis0 = () => {
  console.log("this in showThis: ", this);
};

showThis0(); // this in showThis: window

const user0 = {
  username: "Mango",
};
user0.showContext = showThis0;

user0.showContext(); // this in showThis: window

// - exemplu 2 -
console.log(`- exemplu 2-in obiect -`);

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Funcția arrow salvează contextul de execuție la momentul declarării
      // din contextul părinte
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// -----     Metodele unei funcții     -----
console.log(`-------       Metodele unei funcții       -------`);

// ---   Metoda call()   ---
console.log(`---   Metoda call()   ---`);

function greetGuest0(greeting) {
  console.log(`${greeting}, ${this.username} !`);
}

const vasile2 = {
  username: "Vasile",
};
const georgiana = {
  username: "Georgiana",
};

greetGuest0.call(vasile2, "Bun venit"); // Bun venit, Vasile.

greetGuest0.call(georgiana, "Mă bucur să te revăd"); // Mă bucur să te revăd, Georgiana.

// ---   Metoda apply[]   ---
console.log(`---   Metoda apply[]   ---`);

function greetGuest(greeting, grr) {
  console.log(`${greeting}, ${this.username} ! ${grr}, ${this.username} !`);
}

const vasile4 = {
  username: "Vasile",
};
const georgiana0 = {
  username: "Georgiana",
};

greetGuest.apply(vasile4, ["Bun venit", "Mă bucur să te revăd"]); // Bunt venit, Vasile.
greetGuest.apply(georgiana0, ["Mă bucur să te revăd", "Bun venit"]); // Mă bucur să te revăd, Georgiana.

// ---   Metoda bind()   ---
console.log(`---   bind()   ---`);

function greet(clientName) {
  console.log(`${clientName}, bun venit în serviciul «${this.service}».`);
  return `${clientName}, bun venit în serviciul «${this.service}» !
  `;
}

console.log(`-Metoda cu constanta-`);

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
steamGreeter("Vasile"); // "Vasile, bun venit în serviciul «Steam»."

console.log(`-Metoda directa tip "foo.bind()();"-`);

greet.bind(steam)("Vasile");

console.log(`-Metoda cu constanta-`);

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Georgiana"); // "Georgiana, bun venit în serviciul «Gmail»."

// ---   bind() și metodele unui obiect   ---
console.log(`---   bind() și metodele unui obiect   ---`);

const customer0 = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() este un apel la metoda getFullName care
  // nu și-a păstrat contextul obiectului customer
  console.log(`Se procesează cererea primită de la ${callback()}.`);
}

// ❌ Înainte
makeMessage(customer0.getFullName); // Va apărea o eroare la executarea funcției (Se procesează cererea primită de la undefined undefined.)

console.log(`-apelare corecta-`);

// ✅ După
makeMessage(customer.getFullName.bind(customer)); // Se procesează cererea primită de la Jacob Mercer.

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// "use strict";

console.log("------------------kahoot----------------");

function asd() {
  console.log(this);
}

asd();

const ddd = () => {
  console.log(this);
};

ddd();

const obj = {
  asd,
  ddd,
};

obj.asd();
obj.ddd();

console.log("------------------this--------------------");
console.log(
  `--Model functie arrow cu "this" imbricata in metoda la un obiect nu returneaza window ci obiectul (urca un nivel mai sus)`
);

const person24 = {
  age: 24,
  incrementAge() {
    this.age++;
    const test = () => {
      console.log(this);
    };
    // apelam functia arrow
    test();
  },
};

person24.incrementAge();

console.log(person24.age);

console.log(`-apelare cu functie normala in obiect-`);

const person0 = {
  age: 25,
  incrementAge() {
    person0.age++;
  },
};

person0.incrementAge();

console.log(person0.age);

console.log(`-apelare cu functie normala si "this" in obiect-`);

const person = {
  age: 26,
  incrementAge() {
    this.age++;
  },
};

person.incrementAge();

console.log(person.age);

console.log("--------------call/apply-------------------");

const person2 = {
  age: 30,
};

person.incrementAge.call(person2);

console.log(person);
console.log(person2);

person.incrementAge.apply(person2);

console.log(person);
console.log(person2);

console.log("---------------bind------------------------");

const incrementPerson2Age = person.incrementAge.bind(person2);

incrementPerson2Age();
console.log(person);
console.log(person2);
console.log(incrementPerson2Age);

// -----  exercitiu 1   ----
console.log("-----  exercitiu 1   ----");

/*

Example 1 - Jewelry workshop

Write a `calcTotalPrice(stoneName)` method that takes the name of a stone,
calculates and returns the total cost of stones with that name, price, and
quantity from the `stones` property.

*/

console.log(`Metoda 1`);

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((x) => x.name === stoneName);

    if (stone === undefined) {
      return null;
    }

    return stone.price * stone.quantity;
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600
const totalPrice = chopShop.calcTotalPrice("Gold");
if (totalPrice === null) {
  console.error("Stone not found");
} else {
  console.log(totalPrice);
}
console.log(chopShop.calcTotalPrice("Rock"));

undefined?.price;

console.log(`Metoda 2`);

function stoneGetPriceOrUndefined(stone) {
  if (stone === undefined || stone === null) {
    return null;
  } else {
    return stone.price;
  }
}

function stoneGetQuantityOrUndefined(stone) {
  if (stone === undefined || stone === null) {
    return null;
  } else {
    return stone.quantity;
  }
}

const chopShop0 = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((x) => x.name === stoneName);

    return stoneGetPriceOrUndefined(stone) * stoneGetQuantityOrUndefined(stone);
  },
};

console.log(chopShop0.calcTotalPrice("Emerald")); // 5200
console.log(chopShop0.calcTotalPrice("Diamond")); // 8100
console.log(chopShop0.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop0.calcTotalPrice("Ruby")); // 1600
const totalPrice0 = chopShop0.calcTotalPrice("Gold");
if (totalPrice0 === 0) {
  console.error("Stone not found");
} else {
  console.log(totalPrice0);
}
console.log(chopShop0.calcTotalPrice("Rock"));

console.log(`Metoda 3`);

const chopShop01 = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((x) => x.name === stoneName);

    return stone?.price * stone?.quantity;
  },
};

console.log(chopShop01.calcTotalPrice("Emerald")); // 5200
console.log(chopShop01.calcTotalPrice("Diamond")); // 8100
console.log(chopShop01.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop01.calcTotalPrice("Ruby")); // 1600
const totalPrice01 = chopShop01.calcTotalPrice("Gold");
if (totalPrice01 === undefined) {
  console.error("Stone not found");
} else {
  console.log(totalPrice01);
}
console.log(chopShop01.calcTotalPrice("Rock"));

console.log(`Metoda 4`);

let totalPrice010 = 0;

const chopShop010 = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((x) => Object.values(x).includes(stoneName));

    totalPrice010 = stone?.price * stone?.quantity;
    if (stone === undefined) {
      return console.error("Stone not found");
    }
    return totalPrice010;
  },
};
// if (totalPrice010 === undefined) {
//   console.error("Stone not found");
// }

console.log(chopShop010.calcTotalPrice("Emerald")); // 5200
console.log(chopShop010.calcTotalPrice("Diamond")); // 8100
console.log(chopShop010.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop010.calcTotalPrice("Ruby")); // 1600
console.log(chopShop010.calcTotalPrice("Gold"));
console.log(chopShop010.calcTotalPrice("Rock"));

// -----  exercitiu 2   ----
console.log("-----  exercitiu 2   ----");

/*

Example 2 - Phone book

Make methods' refactoring of the `phonebook` object to make the code work.

*/
const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },

  remove(contact) {
    const toDeleteContact = this.contacts.find((x) => x.name === contact.name);
    return this.contacts.splice(this.contacts.indexOf(toDeleteContact), 1);
  },
  generateId() {
    return "_" + Math.random().toString(36).substring(2, 9);
  },
  getDate() {
    return new Date();
  },
};

console.log(phonebook.contacts);

console.log(
  phonebook.add({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  phonebook.add({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

phonebook.add({
  list: "beware",
  name: "Polyce",
  email: "polyce@hotmail.com",
});

console.log(phonebook.contacts.map((x) => x.name));

console.log(phonebook.contacts);

phonebook.remove({
  eyes: "blue",
  list: "beware",
  name: "Polyce",
  email: "polyce@hotmail.com",
});

console.log(phonebook.contacts);

// -----  exercitiu 3   ----
console.log("-----  exercitiu 3   ----");

/*

Create a `calculator` object with three methods:

- `read(a, b)`- takes two values and stores them as object properties.
- `add()` - returns the sum of the stored values.
- `mult()` - multiplies the stored values and returns the result.

*/

const calculator = {
  a: null,
  b: null,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    if (this.a === null || this.b === null) {
      return 0;
    }

    return this.a + this.b;
  },
  mult() {
    if (this.a === null || this.b === null) {
      return 0;
    }

    return this.a * this.b;
  },
};

const result1 = calculator.add();
console.log(result1);

const a = Number.parseFloat(prompt("First number:"));
const b = Number.parseFloat(prompt("Second number:"));

calculator.read(a, b);

console.log(calculator.add());
console.log(calculator.mult());

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);
