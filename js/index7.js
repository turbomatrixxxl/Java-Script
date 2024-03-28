// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Funcții callback     -----
console.log(`-------       Funcții callback       -------`);

// - exemplu 1 -
console.log(`- exemplu 1-simplu -`);

function greet(name) {
  return `Bine ai venit, ${name}.`;
}

// Apelăm funcția greet și printăm rezultatul în consolă
console.log(greet("Andrei")); // Bine ai venit, Andrei.

// Parsăm funcția greet fără a fi apelată pentru a o printa în consolă
console.log(greet); // ƒ greet() { return `Bine ai venit, ${name}.`; }

// - exemplu 2 -
console.log(`- exemplu 2-callback -`);

// Funcție callback
function greet(name) {
  console.log(`Bine ai venit, ${name}.`);
}

// Funcție de tip HOF
function registerGuest(name, callback) {
  console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
  callback(name);
}

registerGuest("Andrei", greet);

// ---   Inline callback   ---
console.log(`---   Inline callback   ---`);

function registerGuest(name, callback) {
  console.log(`Introducem datele vizitatorului în sistem: ${name}.`);
  callback(name);
}

// Transmitem funcția inline greet ca și callback.
registerGuest("Andrei", function greet(name) {
  console.log(`Bine ai venit, ${name}.`);
});

// Transmitem funcția notify greet ca și callback.
registerGuest("Andrei", function notify(name) {
  console.log(`Dragă ${name}, comanda dvs. va fi procesată în 30 de minute.`);
});

// ---   Several callbacks   ---
console.log(`---   Several callbacks   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-simplu cu if...else -`);

function processCall(recipient) {
  // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(
      `Abonatul ${recipient} nu este disponibil, va rugăm să lăsați un mesaj.`
    );
    // Logica de activare a robotului telefonic
  } else {
    console.log(
      `Încercăm efectuarea conexiunii cu ${recipient}, vă rugăm să așteptați...`
    );
    // Logica de conectare a apelurilor între 2 utilizatori
  }
}

processCall("Andrei");

// - exemplu 2 -
console.log(`- exemplu 2-callback -`);

function processCall1(recipient, onAvailable, onNotAvailable) {
  // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Vă conectăm cu utilizatorul ${name}, va rugăm să așteptați...`);
  // Logica de conectare a apelurilor între 2 utilizatori
}

function activateAnsweringMachine(name) {
  console.log(
    `Abonatul ${name} nu este disponibil, va rugăm să lăsați un mesaj.`
  );
  // Logica de activare a robotului telefonic
}

function leaveHoloMessage(name) {
  console.log(`Abonatul ${name} nu este disponibil, înregistrați o hologramă.`);
  // Logica de înregistrare a unei holograme
}

processCall1("Andrei", takeCall, activateAnsweringMachine);
processCall1("Vasile", takeCall, leaveHoloMessage);

// ---   Abstractizarea repetiției   ---
console.log(`---   Abstractizarea repetiției   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-simplu cu bucla for(let i...) -`);

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// - exemplu 2 -
console.log(`- exemplu 2-cu functie(n) + for(let i; i < n...) -`);

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

// - exemplu 3 -
console.log(`- exemplu 3-implementare functie cu callback -`);

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Parsăm printValue ca și funcție callback
repeat(3, printValue);
// 0
// 1
// 2

// Parsăm prettyPrint ca și funcție callback
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// -----     Metoda forEach     -----
console.log(`-------       Metoda forEach       -------`);

const numbers = [5, 10, 15, 20, 25];

// Bucla for
console.log(`=Bucla for-`);

for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, valoare ${numbers[i]}`);
}

// Metodă de iterare de tip Higher-Order Function
console.log(`-Metodă de iterare de tip Higher-Order Function-`);

numbers.forEach(function (number, index) {
  console.log(`Index ${index}, valoare ${number}`);
});

// -----     Arrow functions     -----
console.log(`-------       Arrow functions       -------`);

// Declararea unei funcții simple
console.log(`-Declararea unei funcții simple-`);

function classicAdd(a, b, c) {
  return a + b + c;
}

console.log(classicAdd(11, 23, 89));

// Declararea unei funcții de tip arrow
console.log(`-Declararea unei funcții de tip arrow-`);

const arrowAdd = (a, b, c) => {
  return a + b + c;
};

console.log(arrowAdd(3, 9, 4));

// - exemplu 2 -
console.log(`- exemplu 2-mai multi parametri -`);

const add = (a, b, c) => {
  console.log(a + b + c);
  return a + b + c;
};

add(7, 8, 9);

// - exemplu 3 -
console.log(`- exemplu 3-un parametru -`);

const addy = (a) => {
  console.log(a + 5);
  return a + 5;
};

addy(4);

// - exemplu 4 -
console.log(`- exemplu 4-fara parametri=() -`);

const greet1 = () => {
  console.log("Salut!");
};
greet1();

// ---   Implicit return   ---
console.log(`---   Implicit return   ---`);

// cu acolade
console.log(`cu acolade`);

const add_ = (a, b, c) => {
  console.log(a, b, c);
  console.log(a + b + c);
  return a + b + c;
};
add_(2, 9, 4);

// fara acolade
console.log(`fara acolade`);

const add__ = (a, b, c) => a + b + c;
console.log(add__(3, 8, 9));

// - exemplu 2 -
console.log(`- exemplu 2 -`);

// Înainte
console.log(`Înainte`);

function classicAdd(a, b, c) {
  return a + b + c;
}

console.log(classicAdd(2, 9, 4));

// După
console.log(`Dupa`);

const arrowAdd_ = (a, b, c) => a + b + c;
console.log(arrowAdd_(2, 9, 4));

// ---   Pseudo array arguments   ---
console.log(`---   Pseudo array arguments   ---`);

const add0 = (...args) => {
  console.log(args);
};

add0(1, 2, 3); // [1, 2, 3]

// ---   Funcții arrow în calitate de callback   ---
console.log(`---   Funcții arrow în calitate de callback   ---`);

const numberse = [5, 10, 15, 20, 25];

// Declararea funcției
console.log(`Declararea funcției`);

numberse.forEach(function (number, index) {
  console.log(`Index ${index}, valoare ${number}`);
});

// Anonymus arrow function
console.log(`Anonymus arrow function`);

numberse.forEach((number, index) => {
  console.log(`Index ${index}, valoare ${number}`);
});

// Declarata separat
console.log(`-Declarata separat-`);

const numbers0 = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, valoare ${number}`);
};

numbers0.forEach(logMessage);

// -----     Paradigme de programare     -----
console.log(`-------       Paradigme de programare       -------`);

// ---   Programare imperativă   ---
console.log(`---   Programare imperativă   ---`);

// ---   Programare declarativă   ---
console.log(`---   Programare declarativă   ---`);

// ---   Imperativ vs Declarativ   ---
console.log(`---   Imperativ vs Declarativ   ---`);

// Abordare imperativă
console.log(`-Abordare imperativă-`);

const numbers_ = [1, 2, 3, 4, 5, 9, 11, 0];
const filteredNumbers = [];

for (let i = 0; i < numbers_.length; i += 1) {
  if (numbers_[i] > 3) {
    filteredNumbers.push(numbers_[i]);
  }
}

console.log(filteredNumbers); // [4, 5, 9, 11]

// Abordare declarativă
console.log(`-Abordare declarativă-`);

const numbers__ = [1, 2, 3, 4, 5, 7, 0, 14];
const filteredNumbers_ = numbers__.filter((value) => value > 3);
console.log(filteredNumbers_); // [4, 5, 7, 14]

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

console.log("-----------------kahoot--------------");

console.log(`-moduri declarare functii-`);

console.log(`- exemplu apelare functie inainte de declararea functiei-`);
console.log(`test();`);

console.log(
  `-functie(poti declara variabila oriunde inainte/dupa declararea functiei-`
);
console.log(`function test() { };`);

// test2();
console.log(
  `- exemplu apelare functie inainte de declararea functiei(nu functioneaza...!!!)-`
);
console.log(`test2();`);

console.log(
  `-expresie functionala(poti declara variabila doar dupa declararea functiei-`
);
console.log(`const test2 = function () {};`);

console.log(
  `-expresie functionala(poti declara variabila doar dupa declararea functiei-`
);
const test3 = () => {};

console.log(
  `-functie arrow cu returnare implicita(se poate folosi doar la functii simple si nu gen "let" sau "for...of"=trebuie sa fie o singura expresie)-`
);
const test4 = (a, b) => a + b;

console.log(`-functie arrow cu returnare explicita-`);
const test5 = (a, b) => {
  return a + b;
};

console.log(
  `-functie arrow cu returnare explicita, un singur parametru si operator "...rest" ca parametru acceptat de arrow-`
);
const test6 = (...a) => {
  console.log(a);
};

console.log("-----------------callbacks-------------------");

console.log(`functie greet si functie callback`);
function greet(name) {
  console.log(`Hello, ${name} !`);
}
greet("Radu");

function register(name, welcome) {
  console.log(`Ati fost inregistrat cu numele ${name}.`);
  welcome(name);
}
register("Bogdan", greet);

function greetSms(name) {
  console.log(`Hello Sms ${name} !`);
}

function greetEmail(name) {
  console.log(`Hello Email ${name} !`);
}

register("Naramzoiu", greetSms);
register("Naramzoiu", greetEmail);

console.log(`-abstractizare forEach(descriere etapizata functionare metoda)-`);

let arr = [1, 4, 7, 8, 13, 2, 9, 0];
function foreach(array, callbackFunction) {
  for (let i = 0; i < array.length; i++) {
    callbackFunction(array[i]);
  }
}

console.log(`-printare tip functie normal-`);

function printElem(params) {
  console.log(params);
}

foreach(arr, printElem);

console.log(`-printare tip functie array-`);

foreach(arr, (elem) => console.log(elem));

console.log(`-printare tip obiect cu functie inclusa in obiect-`);

const myArray = {
  elements: [1, 4, 7, 8, 13, 2, 9, 0, -11, -23, -88],
  foreach: function (callbackFunction) {
    for (let i = 0; i < this.elements.length; i++) {
      callbackFunction(this.elements[i]);
    }
  },
};

myArray.foreach(printElem);

console.log(
  `-printare metoda foreach (built in), direct apeland funcia printElem-`
);

const arr2 = [100, 200, 300, 800];
arr2.forEach(printElem);

console.log(
  `-printare metoda foreach (built in), direct apeland funcia elem*2-`
);

arr2.forEach((element) => {
  element *= 2;
  console.log(element);
  return element;
});

console.log("---------------------arrow functions-----------------");

arr2.forEach((elem) => {
  console.log(elem);
});

console.log(arr2.filter((a) => a >= 300));

console.log("------------------ some examples --------------");

function processCall11(recipient, onAvailable, onNotAvailable) {
  // Simulăm disponibilitatea unui abonat cu un număr aleatoriu
  const isRecipientAvailable = Math.random() > 0.5;

  isRecipientAvailable ? onAvailable(recipient) : onNotAvailable(recipient);

  // if (!isRecipientAvailable) {
  //   onNotAvailable(recipient);
  //   return;
  // }
  // onAvailable(recipient);
}

const onAvailable = (recipient) => {
  console.log(
    `Încercăm efectuarea conexiunii cu ${recipient}, vă rugăm să așteptați...`
  );
};

function onNotAvailable(recipient) {
  console.log(
    `Abonatul ${recipient} nu este disponibil, va rugăm să lăsați un mesaj.`
  );
}

processCall11("Andrei", onAvailable, onNotAvailable);

console.log("-----------------for vs for of---------------");

console.log(`-cu bucla for(let...)-`);

console.log(`varianta 1(modificare matrice originala)`);

const c = [5, 3, 2, 4];
console.log(c);

for (let i = 0; i < c.length; i++) {
  c[i] *= 10;
}

console.log(c);

console.log(`varianta 2(pastrare matrice originala)`);

const a = [5, 3, 2, 4];
let values = [];
for (let i = 0; i < a.length; i++) {
  let value = a[i];
  value *= 10;
  values.push(value);
}

console.log(a);
console.log(values);

console.log(`-cu bucla for...off(pastrare matrice originala)-`);

b = [];
for (let value of a) {
  value *= 10;
  b.push(value);
}

console.log(a);
console.log(b);

console.log(`-cu bucla forEach(pastrare matrice originala)-`);

console.log(`exemplu 1`);

console.log(a);

let x = [];
a.forEach((value) => {
  value *= 10;
  x.push(value);
});

console.log(x);

console.log(`exemplu 2`);

a.forEach((x, i) => {
  console.log(`${i}: ${x}`);
});
console.log(a);

console.log(`-cu bucla forEach(modificare matrice originala)-`);

const z = [2, 3, 14, 7, 9];
console.log(z);

z.forEach((value, index, array) => {
  array[index] *= 10;
});

console.log(z);

// -----  exercitiu 1 transformare arrow function  ----
console.log("-----  exercitiu 1 transformare arrow function  ----");

/*
Make the code refactoring using arrow functions.

*/

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

console.log(`arrow function`);

console.log(`1`);

console.log(`v1`);

console.log(
  each([64, 49, 36, 25, 16], (value) => {
    return value * 2;
  })
);

console.log(`v2`);

console.log(each([64, 49, 36, 25, 16], (value) => value * 2));

console.log(`v2`);

console.log(each([64, 49, 36, 25, 16], (x) => x * 2));

console.log(`2`);

console.log(each([64, 49, 36, 25, 16], (x) => x - 10));

console.log(`3`);

console.log(each([64, 49, 36, 25, 16], (x) => Math.sqrt(x)));

console.log(`4`);

console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (x) => Math.ceil(x)));

console.log(`4`);

console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (x) => Math.floor(x)));

// -----  exercitiu 2 transformare arrow function  ----
console.log("-----  exercitiu 2 transformare arrow function  ----");

/*
Make the code refactoring using forEach method and arrow functions.

*/

console.log(`original`);

function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

console.log(`arrow`);

function printContactsInfoForEach({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");

  nameList.forEach((name, i) => {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  });
}

printContactsInfoForEach({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

// -----  exercitiu 3  arrow function  ----
console.log("-----  exercitiu 3  arrow function  ----");

/*
Write the following functions:

createProduct(obj, callback) - accepts a product object without an id, and also callback. The function creates a product object by adding a unique identifier to it in property id and calls the callback passing it the created object.

logProduct(product) - callback accepting a product object and logging it to console

logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console

*/

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

const createProduct = (obj, callback) => {
  const object = { ...obj, id: generateRandomString(4) };
  callback(object);
};

const logProduct = (product) => {
  console.log(product);
};

const logTotalPrice = (product) => {
  const totalPrice = product.quantity * product.price;
  console.log(
    `Pretul total pentru produsele cu denumirea ${product.name} este ${totalPrice}`
  );
};

let product = {
  name: "aragaz",
  price: 142,
  quantity: 12,
};

createProduct(product, logProduct);
createProduct(product, logTotalPrice);

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

/*

Add methods withdraw(amount, onSuccess, onError) to the account object and deposit(amount, onSuccess, onError), where the first parameter is the amount of the operation, and second and third are callbacks.

The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance, and onSuccess otherwise. deposit method raises onError if amount is greater than TRANSACTION_LIMIT or less or either zero and onSuccess otherwise.

*/

const account = {
  balance: 100,
  TRANSACTION_LIMIT: 1000,

  withdraw(amount, onSuccess, onError) {
    if (amount > this.TRANSACTION_LIMIT) {
      return onError(
        `Suma ${amount} este mai mare decat suma ${this.TRANSACTION_LIMIT}, limita de retragere zilnica !`
      );
    } else if (amount > this.balance) {
      return onError(
        `Suma ${amount} este mai mare decat balanta contului Dvs. ${this.balance} si nu se poate procesa retragerea !`
      );
    }

    this.balance -= amount;
    return onSuccess(amount);
  },

  deposit(amount, onSuccess, onError) {
    if (amount > this.TRANSACTION_LIMIT) {
      return onError(
        `Suma ${amount} este mai mare decat suma ${this.TRANSACTION_LIMIT}, limita de depunere zilnica si nu se poate procesa depunerea !`
      );
    } else if (amount <= 0) {
      return onError(
        `Suma ${amount} este necorespunzatoare si nu se poate procesa depunerea ! Incercati sa depuneti sume mai mari decat 0(zero) !`
      );
    }

    this.balance += amount;
    return onSuccess(amount);
  },
};

onSuccess = (amount) => {
  console.log(
    `Succes ! Suma ${amount} este procesata, balanta contului Dvs este ${account.balance}`
  );
};

onError = (declaration) => {
  console.log(`Eroare !  ${declaration}`);
};

account.withdraw(100, onSuccess, onError);
account.deposit(1000, onSuccess, onError);
account.deposit(10000, onSuccess, onError);
account.deposit(100.24, onSuccess, onError);
account.deposit(0, onSuccess, onError);
account.deposit(-150, onSuccess, onError);

account.withdraw(1100, onSuccess, onError);
account.withdraw(900.38, onSuccess, onError);
