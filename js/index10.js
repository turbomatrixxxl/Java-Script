// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Programarea orientată pe obiecte     -----
console.log(`-------       Programarea orientată pe obiecte       -------`);

console.log(`Programarea procedurală`);

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  console.log(baseSalary + overtime * rate);
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);

console.log(`Programarea orientată pe obiecte (POO)`);

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    console.log(this.baseSalary + this.overtime * this.rate);
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

// ---   Entity   ---
console.log(`---   Entity   ---`);

// --  Class  --
console.log(`--  Class  --`);

// --  Instanță  --
console.log(`--  Instanță  --`);

// --  Interface  --
console.log(`--  Interface  --`);

// -----     Prototypal Inheritance     -----
console.log(`-------       Prototypal Inheritance       -------`);

// ---   Prototipul obiectului   ---
console.log(`---   Prototipul obiectului   ---`);

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Jojo";

console.log(dog); // { name: 'Jojo', __proto__: animal }

console.log(`-isPrototypeOf-`);

console.log(animal.isPrototypeOf(dog)); // true

console.log(`-hasOwnProperty-`);

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Jojo'

console.log(`-hasOwnProperty-`);

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4

// ---   Metoda hasOwnProperty()   ---
console.log(`---   Metoda hasOwnProperty()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-"for...in"-returneaza si daca gaseste in Prototype -`);

const animal0 = { eats: true };
const dog0 = Object.create(animal0);
dog0.barks = true;

for (const key in dog0) {
  console.log(key); // barks, eats
}

// - exemplu 2 -
console.log(`- exemplu 2-hasOwnProperty-returneaza doar ce este in original -`);

const animal1 = {
  eats: true,
};
const dog1 = Object.create(animal1);
dog1.barks = true;

for (const key in dog1) {
  if (!dog1.hasOwnProperty(key)) continue;

  console.log(key); // barks
}

// - exemplu 3 -
console.log(`- exemplu 3-Object.keys()-returneaza doar ce este in original -`);

const animal2 = {
  eats: true,
};
const dog2 = Object.create(animal2);
dog2.barks = true;

const dogKeys = Object.keys(dog2);

console.log(dogKeys); // ['barks']

// -----     Class     -----
console.log(`-------       Class       -------`);

// ---   Declararea unei clase   ---
console.log(`---   Declararea unei clase   ---`);

class User {
  // Corpul clasei
}

const vasile = new User();
console.log(vasile); // {}

const georgiana = new User();
console.log(georgiana); // {}

console.log(User);

// ---   Constructorul clasei   ---
console.log(`---   Constructorul clasei   ---`);

class User0 {
  // Sintaxa de declarare a unei metode de clasă
  constructor(name, email) {
    // Inițializarea proprietăților instanței
    this.name = name;
    this.email = email;
  }
}

const andrei = new User0("Andrei", "andrei@mail.com");
console.log(andrei); // { name: 'Andrei', email: 'andrei@mail.com' }

const ioana = new User0("Ioana", "ioana@mail.com");
console.log(ioana); // { name: 'Ioana', email: 'ioana@mail.com' }

// ---   Parameter Object   ---
console.log(`---   Parameter Object   ---`);

class User1 {
  // Destructurăm obiectul
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const vasile0 = new User1({
  name: "Vasile",
  email: "vasile@mail.com",
});
console.log(vasile0); // { name: "Vasile", email: "vasile@mail.com" }

const georgiana0 = new User1({
  name: "Georgiana",
  email: "georgiana@mail.com",
});
console.log(georgiana0); // { name: "Georgiana", email: "georgiana@mail.com" }

// ---   Metodele clasei   ---
console.log(`---   Metodele clasei   ---`);

class User2 {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Metoda getEmail
  getEmail() {
    return this.email;
  }

  // Metoda changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const vasile2 = new User2({
  name: "Vasile",
  email: "vasile@mail.com",
});
console.log(vasile2); // { name: "Vasile", email: "vasile@mail.com" }

const georgiana2 = new User2({
  name: "Georgiana",
  email: "georgiana@mail.com",
});
console.log(georgiana2); // { name: "Georgiana", email: "georgiana@mail.com" }

vasile2.changeEmail("abcd@asd.com");
console.log(vasile2.getEmail());
console.log(vasile2);

// ---   Proprietăți private   ---
console.log(`---   Proprietăți private   ---`);

class User3 {
  // Nu este obligatorie declararea unei proprietăți publice
  name;
  // Declararea unei proprietăți private este obligatorie
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const andrei3 = new User3({
  name: "Andrei",
  email: "andrei@mail.com",
});
andrei3.changeEmail("andrei@supermail.com");
console.log(andrei3.getEmail()); // andrei@supermail.com
// console.log(andrei3.#email);
// Va apărea o eroare deoarece este o proprietate privată

// ---   Getters și Setters   ---
console.log(`---   Getters și Setters   ---`);

class User4 {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Getter email
  get email() {
    return this.#email;
  }

  // Setter email
  set email(newEmail) {
    if (newEmail === "") {
      console.error("Eroare! Email-ul nu poate fi un șir gol!");
      return;
    }

    this.#email = newEmail;
  }
}

const vasile4 = new User4({
  name: "Vasile",
  email: "vasile@mail.com",
});
console.log(vasile4.email); // vasile@mail.com

vasile4.email = "vasile@supermail.com";
console.log(vasile4.email); // vasile@supermail.com

vasile4.email = "";
console.log(vasile4.email); // vasile@supermail.com

// ---   Proprietăți statice   ---
console.log(`---   Proprietăți statice   ---`);

class User5 {
  // Declararea și inițializarea unei proprietăți statice
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const vasile5 = new User5({
  email: "vasile@mail.com",
  role: User5.Roles.ADMIN,
});

console.log(vasile.Roles); // undefined
console.log(User5.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(vasile5.role); // "admin"
vasile5.role = User5.Roles.EDITOR;
console.log(vasile5.role); // "editor"

// ---   Metode statice   ---
console.log(`---   Metode statice   ---`);

class User6 {
  static takenEmails = [];

  static isEmailTaken(email) {
    return User6.takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User6.takenEmails.push(email);
  }
}

const vasile6 = new User6({ email: "vasile@mail.com" });

const georgiana6 = new User6({ email: "v@mail.com" });

console.log(User6.isEmailTaken("georgiana@mail.com"));

console.log(User6.isEmailTaken("vasile@mail.com"));

console.log(User6.isEmailTaken("v@mail.com"));

console.log(vasile6);

console.log(georgiana6);

console.log(User6.takenEmails);

// ---   Moștenirea claselor   ---
console.log(`---   Moștenirea claselor   ---`);

const Vasile7 = new User4({
  email: "bnm@vbn.com",
});

class ContentEditor extends User4 {
  // Corpul clasei ContentEditor
}

const editor = new ContentEditor({ email: "vasile@mail.com" });
console.log(editor); // { email: "vasile@mail.com" }

console.log(editor.email); // "vasile@mail.com"

editor.email = "abc#";
console.log(editor.email); // "vasile@mail.com"

// console.log(User4.#email);

// ---   Constructorul clasei copil   ---
console.log(`---   Constructorul clasei copil   ---`);

class ContentEditor0 extends User4 {
  constructor({ email, posts }) {
    // Apelarea constructorului din clasa părinte User
    super(email);
    this.posts = posts;
  }
}

const editor0 = new ContentEditor0({
  email: "geo@mail.com",
  posts: ["asd"],
});

console.log(editor0); // { email: 'george@mail.com', posts: [] }

console.log(editor0.posts); // 'george@mail.com'

// ---   Metodele clasei copil   ---
console.log(`---   Metodele clasei copil   ---`);

class User7 {
  email;
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

// Să presupunem că mai sus există clasa User

class ContentEditor1 extends User7 {
  namee;
  constructor({ namee, email, posts }) {
    super(email);
    this.namee = namee;
    this.posts = posts;
  }

  get namee() {
    return this.namee;
  }

  set namee(newNamee) {
    this.namee = newNamee;
  }

  addPost(...post) {
    this.posts.push(post);
  }
}

const editor1 = new ContentEditor1({
  namee: "radu",
  email: "vas@mail.com",
  posts: [],
});

console.log(editor1); // { email: 'vas@mail.com', posts: [] }

console.log(editor1.email); // 'vas@mail.com'

editor1.namee = "bogdan";

console.log(editor1.namee);

editor1.addPost("post-1", "post-2", "post-2");

console.log(editor1.posts); // ['post-1']

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// Interface
console.log("-----------------Interface-------------");

const account = {
  balance: 100,
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }

    console.error("Operation failed");
  },

  deposit(amount) {
    this.balance += amount;
  },
};

account.balance -= 105;
console.log(account.balance);

console.log("-----------------prototype-------------");
const personProto = {
  name: "",
  age: 0,
  incrementAge() {
    this.age++;
  },
};
const cristi = Object.create(personProto);
cristi.name = "Cristi";
cristi.age = 25;

cristi.incrementAge();
console.log(personProto);
console.log(cristi);

console.log([1, 2, 3]);

console.log(personProto.isPrototypeOf(cristi));

console.log("---------------classes------------------");

class Person {
  #name;
  age = 0;
  #cnp;
  static #staticName = "Person";

  constructor(name, age, cnp) {
    this.#name = name;
    this.age = age;
    this.#cnp = cnp;
  }

  incrementAge() {
    this.age++;
  }

  getCnp(permissionLevel) {
    if (permissionLevel === "Admin") {
      return this.#cnp;
    }
    console.error("Forbidden");
    return null;
  }

  setCnp(newCnp, permissionLevel) {
    if (permissionLevel === "Admin") {
      this.#cnp = newCnp;
      return;
    }
    console.error("Forbidden");
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (!this.checkForSpecialCharacters(newName)) {
      console.error("Not allowed");
      return;
    }
    this.#name = newName;
  }
  checkForSpecialCharacters(newName) {
    return true;
  }

  static #whoAmI() {
    return `I'm a ${this.#staticName}`;
  }

  static logWhoAmI() {
    console.log(this.#whoAmI());
  }
}

const marius = new Person("Marius", 25, "123456789");

marius.incrementAge();
console.log(marius);

console.log(marius.getCnp("Admin"));
console.log(marius.getCnp("User"));

marius.setCnp("987654321", "Admin");
console.log(marius.getCnp("Admin"));

marius.name = "Asd";
console.log(marius.name);
console.log(marius);

marius.name = "!!!";
console.log(marius.name);

Person.logWhoAmI();

const people = [];
for (let i = 0; i < 10; i++) {
  people.push(new Person(`Person-${i}`, 25, "123981263"));
}

console.log(people);

class PostsDatabase {
  posts = [];
}

class ContentReader {
  postsDatabase;

  constructor(postsDatabase) {
    this.postsDatabase = postsDatabase;
  }

  readPosts() {
    return this.postsDatabase.posts;
  }
}

class ContentEditor01 extends ContentReader {
  comment;
  constructor(comment, postsDatabase) {
    super(postsDatabase);
    this.comment = comment;
  }
  addPost(post) {
    this.postsDatabase.posts.push(post);
  }
}
const postsDatabase = new PostsDatabase();

const contentEditor = new ContentEditor01("comment", postsDatabase);

contentEditor.addPost({ text: "Post" });
console.log("Editor", contentEditor.readPosts());

const contentReader = new ContentReader(postsDatabase);

console.log("Reader", contentReader.readPosts());

// -----  exercitiu 1 generare string aleatoriu  ----
https: console.log("-----  exercitiu 1 generare string aleatoriu  ----");

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

// ------     Exercitii autoverificare 3     ------
console.log(`---------        Exercitii autoverificare 3        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1(this) -`);

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders
      .map((order) => order.email)
      .sort((a, b) => a.localeCompare(b));
    console.log(emails);
    const uniqueEmails = new Set(emails);
    console.log(uniqueEmails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getOrdersLog());

console.log(historyService.getEmails());

console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// - exercitiul-2 -
console.log(`- exercitiul-2(Object.create()) -`);

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);
console.log(child);

// Change code above this line
child.name = "Jason";
child.age = 27;

console.log(parent);
console.log(child);

console.log(parent.hasOwnProperty("surname"));
console.log(child.hasOwnProperty("name"));
console.log(child.name);

console.log(child.hasOwnProperty("age"));
console.log(child.age);

console.log(child.hasOwnProperty("surname"));
console.log(child.surname);

console.log(child.hasOwnProperty("heritage"));
console.log(child.heritage);

console.log(parent.isPrototypeOf(child));

// - exercitiul-3 -
console.log(`- exercitiul-3(clase cu metode functii) -`);

class Storage {
  constructor(items) {
    this.items = [...items];
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const item = this.items.find((x) => x === itemToRemove);
    return this.items.splice(this.items.indexOf(item), 1);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// - exercitiul-4 -
console.log(`- exercitiul-4(clase cu metode functii) -`);

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    return (this.value += str);
  }
  padStart(str) {
    this.value = str + this.value;
    return;
  }
  padBoth(str) {
    this.value = str + this.value + str;
    return this.value;
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

let ddd = "asdfgh";
let asd = "vvv";
console.log(ddd.padStart(ddd.length + asd.length, asd));
console.log(ddd.padEnd(ddd.length + asd.length, asd));
const padBoth = ddd
  .padStart(ddd.length + asd.length, asd)
  .padEnd(ddd.length + asd.length * 2, asd);
console.log(padBoth);

console.log(ddd + asd);

// - exercitiul-5 -
console.log(`- exercitiul-5(clase proprietati private) -`);

class Car {
  // Change code below this line
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
    return this.brand;
  }

  // Change code above this line
}

console.log(Car);

const Audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(Audi);
console.log(Audi.getBrand());
Audi.changeBrand("Honda");
console.log(Audi.getBrand());
console.log(Audi);

// - exercitiul-6 -
console.log(`- exercitiul-6(clase proprietati statice) -`);

class Car1 {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car1.MAX_PRICE < newPrice) {
      return this.#price;
    }
    this.#price = newPrice;
  }
  // Change code above this line
}

const audi = new Car1({ price: 35000 });
console.log(audi);
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

console.log(Car1.MAX_PRICE);

// - exercitiul-7 -
console.log(
  `- exercitiul-7(clase metode statice si proprietati statice private) -`
);

class Car2 {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car2.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi0 = new Car2({ price: 36000 });
const bmw0 = new Car2({ price: 64000 });

console.log(Car2.checkPrice(audi0.price)); // "Success! Price is within acceptable limits"
console.log(Car2.checkPrice(bmw0.price)); // "Error! Price exceeds the maximum"

// - exercitiul-8 -
console.log(
  `- exercitiul-8(clase copii ai altor clase cu constructori cu parametri mosteniti si afisati ca obiect) -`
);

class User31 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User31 {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

// - exercitiul-9 -
console.log(
  `- exercitiul-9(clase copii ai altor clase cu constructori cu parametri mosteniti si afisati ca obiect si metode noi) -`
);

class User00 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin00 extends User00 {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango0 = new Admin00({
  email: "mango@mail.com",
  accessLevel: Admin00.AccessLevel.SUPERUSER,
});

console.log(mango0.email); // "mango@mail.com"
console.log(mango0.accessLevel); // "superuser"

mango0.blacklist("poly@mail.com");
console.log(mango0.blacklistedEmails); // ["poly@mail.com"]
console.log(mango0.isBlacklisted("mango@mail.com")); // false
console.log(mango0.isBlacklisted("poly@mail.com")); // true
