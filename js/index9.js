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

const person = {
  age: 25,
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

// -----  exercitiu 1 generare string aleatoriu  ----
console.log("-----  exercitiu 1 generare string aleatoriu  ----");

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);
