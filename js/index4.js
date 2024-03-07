// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Functii     -----
console.log(`-------       Functii       -------`);

// ---   Declararea funcțiilor   ---
console.log(`---   Declararea funcțiilor   ---`);

// ---   Parametri și argumente   ---
console.log(`---   Parametri și argumente   ---`);

// Declararea parametrilor x, y, z
function multiply(x, y, z) {
  console.log(`Rezultatul înmulțirii este ${x * y * z}`);
}
multiply(2, 3, 4);

// ---   Returnarea valorii   ---
console.log(`---   Returnarea valorii   ---`);

function multiply(x, y, z) {
  console.log("Codul înainte de operatorul return va fi executat");

  // Returnează rezultatului înmulțirii
  return x * y * z;

  console.log(
    "Acest print nu se va executa deoarece este amplasat după operatorul return"
  );
}

// Rezultatul funcției poate fi stocat într-o variabilă
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

// ---   Ordinea de executare a codului   ---
console.log(`---   Ordinea de executare a codului   ---`);

function multiply(x, y, z) {
  console.log(`Rezultatul înmulțirii este ${x * y * z}`);
}

console.log("Se printează înainte de apelul funcției multiply");
multiply(2, 3, 5); // Rezultatul înmulțirii este 30
console.log("Se printează după apelul funcției multiply");

// Ordinea log-urilor din consolă
// "Se printează înainte de apelul funcției multiply"
// "Rezultatul înmulțirii este 30"
// "Se printează după apelul funcției multiply"

// ---   Parametrii default   ---
console.log(`---   Parametrii default   ---`);

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

console.log(`- exemplu 1-count(1, 5); -`);
count(1, 5); // countFrom = 1, countTo = 5, step = 1

console.log(`- exemplu 2-count(2); -`);
count(2); // countFrom = 2, countTo = 10, step = 1

console.log(`- exemplu 3-count(); -`);
count(); // countFrom = 0, countTo = 10, step = 1

console.log(`- exemplu 4-count(7, 21); -`);
count(7, 21); // countFrom = 0, countTo = 10, step = 1

// ---   Pseudo-array arguments   ---
console.log(`---   Pseudo-array arguments   ---`);

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// ---   Pseudo-array   ---
console.log(`---   Pseudo-array   ---`);

// ---   "Return early" pattern   ---
console.log(`---   "Return early" pattern   ---`);

console.log(`- exemplu 1-(if/else-if) -`);
function withdraw(amount, balance) {
  if (amount === 0) {
    console.log(
      "Vă rugăm să introduceți o sumă mai mare decât zero pentru retragere."
    );
  } else if (amount > balance) {
    console.log("Fonduri insuficiente în cont!");
  } else {
    console.log("Operația de retragere a fost finalizată cu succes!");
  }
}

withdraw(0, 300); // "Vă rugăm să introduceți o sumă mai mare decât zero pentru retragere."
withdraw(500, 300); // "Fonduri insuficiente în cont!"
withdraw(100, 300); // "Operația de retragere a fost finalizată cu succes!"

console.log(`- exemplu 2-(return) -`);
function withdraw(amount, balance) {
  // Dacă condiția este adevărată, se apelează console.log
  // și funcția se va opri. Codul de după instrucțiunea if nu va mai fi executat.
  if (amount === 0) {
    console.log(
      "Introduceți o sumă mai mare decât zero pentru a finaliza tranzacția."
    );
    return;
  }

  // Dacă condiția primului if nu este îndeplinită, corpul acestuia este omis
  // și interpretorul ajunge la al doilea if.
  // Dacă condiția este adevărată, se apelează console.log și funcția este oprită.
  // Codul de după instrucțiunea if nu va mai fi executat.
  if (amount > balance) {
    console.log("Fonduri insuficiente în cont");
    return;
  }

  // Dacă niciunul dintre if-urile anterioare nu a fost îndeplinit,
  // interpretorul ajunge la acest cod și îl execută.
  console.log("Operațiune de retragere este finalizată");
}

withdraw(0, 300); // "Introduceți o sumă mai mare decât zero pentru a finaliza tranzacția."
withdraw(500, 300); // "Fonduri insuficiente în cont"
withdraw(100, 300); // "Operațiune de retragere este finalizată"

// ---   Function expression   ---
console.log(`---   Function expression   ---`);

// Function expression
const multiplyies = function (x, y, z) {
  console.log(`Rezultatul înmulțirii este ${x * y * z}`);
};
multiplyies(1, 3, 9);

// -------       Scope       -------
console.log(`-------       Scope       -------`);

// ---   Scope-ul global   ---
console.log(`---   Scope-ul global   ---`);

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}

// ---  Block Scope   ---
console.log(`---   lock Scope   ---`);

for (let i = 0; i < 5; i++) {
  const a = 20;
  console.log(a); // 20

  if (i === 2) {
    const b = 30;
    console.log(a); // 20
    console.log(b); // 30
  }

  if (i === 3) {
    console.log(a); // 20

    // ❌ Incorect! Variabila b nu este disponibilă în acest scope
    // console.log(b);
  }
}

// ---  Căutarea în lanțul/ierarhia de scopuri   ---
console.log(`---  Căutarea în lanțul/ierarhia de scopuri   ---`);

// -------       Callstack       -------
console.log(`-------       Callstack       -------`);

function fnA() {
  console.log("Log în interiorul funcției fnA înainte de a apela fnB");
  fnB();
  console.log("Log în interiorul funcției fnA după ce se apelează fnB");
}

function fnB() {
  console.log("Log în interiorul funcției fnB");
}

console.log("Log înainte de a apela fnA");
fnA();
console.log("Log după apelul lui fnA");

// "Log înainte de a apela fnA"
// "Log în interiorul funcției fnA înainte de a apela fnB"
// "Log în interiorul funcției fnB"
// "Log în interiorul funcției fnA după ce se apelează fnB"
// "Log după apelul lui fnA"

// ---  Stack   ---
console.log(`---  Stack   ---`);

// ---  Callstack   ---
console.log(`---  Callstack   ---`);

function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// ------     Exercitii autoverificare 2     ------
console.log(`---------        Exercitii autoverificare 2        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

function slugify(title) {
  // Change code below this line
  const titleToLower = title.toLowerCase();
  //   console.log(titleToLower);
  const slug = titleToLower;
  console.log(slug.split(` `).join("-"));
  return slug.split(` `).join("-");
}

slugify("Arrays for begginers");

// - exercitiul-2 -
console.log(`- exercitiul-2 -`);

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  const both = firstArray.concat(secondArray);
  console.log(both);
  const bothLength = both.slice(0, maxLength);

  console.log(bothLength);
  return bothLength;

  // Change code above this line
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);

// - exercitiul-3 -
console.log(`- exercitiul-3 -`);

function calculateTotal(number) {
  // Change code below this line

  let sum = 0;

  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  console.log(sum);
  return sum;

  // Change code above this line
}

calculateTotal(7);
calculateTotal(14);

// - exercitiul-4 -
console.log(`- exercitiul-4 -`);

function findLongestWord(string) {
  // Change code below this line
  let words = string.split(" ");
  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  console.log(maxLength);
  console.log(longestWord);
  return longestWord;

  // Change code above this line
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord(
  "This is a string, the longest word and its length will be printed on the console. Isn't it incredible ?"
);
// findLongestWord();

// - exercitiul-4 -
console.log(`- exercitiul-4 -`);

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  // Change code above this line
  console.log(numbers);
  return numbers;
}

createArrayOfNumbers(29, 34);

// - exercitiul-5 -
console.log(`- exercitiul-5 -`);

function filterArray(numbers, value) {
  // Change code below this line
  let bigger = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      bigger.push(numbers[i]);
    }
  }

  console.log(bigger);
  return bigger;
  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3);

// - exercitiul-6 -
console.log(`- exercitiul-6 -`);

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  console.log(fruits.includes(fruit));
  return fruits.includes(fruit); // Change this line
}

checkFruit("plum");
checkFruit("mandarin");

// - exercitiul-7 -
console.log(`- exercitiul-7 -`);

function getCommonElements(array1, array2) {
  // Change code below this line
  let common = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      common.push(array1[i]);
    }
  }

  console.log(common);
  return common;
  // Change code above this line
}

getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([1, 2, 3], [10, 20, 30]);
// getCommonElements();

// - exercitiul-8 -
console.log(`- exercitiul-8 -`);

function getEvenNumbers(start, end) {
  // Change code below this line
  let even = [];

  for (let i = start; i <= end; i++) {
    let a = i % 2;
    if (a === 0) {
      even.push(i);
    }
  }

  console.log(even);
  return even;
  // Change code above this line
}

getEvenNumbers(3, 11);
getEvenNumbers(7, 7);

// - exercitiul-9 -
console.log(`- exercitiul-9 -`);

// - varianta 1 -
console.log(`- varianta 1 -`);
console.log(`- numar divizibil cu 5 si maxim 10 -`);

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
  }
  if (i > 10) {
    break;
  }
}

console.log(number);

// - varianta 2 -
console.log(`- varianta 2 -`);
console.log(`- numar divizibil cu 3 si maxim 10 -`);

const starte = 6;
const ende = 27;
let numbere;

for (let i = 7; i < ende; i++) {
  if (i % 3 === 0) {
    numbere = i;
    break;
  }
}

console.log(numbere);

// - exercitiul-10 -
console.log(`- exercitiul-10 -`);

function includes(array, value) {
  // Change code below this line
  let result;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = true;
      console.log(result);
      return result;
    } else {
      result = false;
    }
  }
  console.log(result);
  return result;

  // Change code above this line
}

includes([1, 2, 3, 4, 5], 17);
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
