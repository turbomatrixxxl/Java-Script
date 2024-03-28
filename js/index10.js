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

// -----  exercitiu 1 generare string aleatoriu  ----
console.log("-----  exercitiu 1 generare string aleatoriu  ----");

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

// ------     Exercitii autoverificare 3     ------
console.log(`---------        Exercitii autoverificare 3        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);
