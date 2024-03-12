// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Arrays     -----
console.log(`-------       Arrays       -------`);

// ---   Accesarea elementelor   ---
console.log(`---   Accesarea elementelor   ---`);

const clients = ["Mango", "Poly", "Ajax"];

// Specificând indexul(poziția) elementului între paranteze, putem obține valoarea acestuia
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

// ---   Redefininirea unui array   ---
console.log(`---   Redefininirea unui array   ---`);

const clients1 = ["Mango", "Poly", "Ajax"];
clients1[0] = "Kiwi";
clients1[1] = "Pango";
console.log(`clients changed :`, clients1); // ["Kiwi", "Pango", "Ajax"]

// ---   Lungimea unui array   ---
console.log(`---   Lungimea unui array   ---`);

const clients2 = ["Mango", "Poly", "Ajax"];
console.log(clients2.length); // 3

// ---   Indexul ultimului element   ---
console.log(`---   Indexul ultimului element   ---`);

const clients3 = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients3.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"

// -----     Iterarea unui array     -----
console.log(`-------       Iterarea unui array       -------`);

const clients4 = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients4.length; i += 1) {
  console.log(clients4[i]);
}

// ---   Ciclul for...of   ---
console.log(`---   Ciclul for...of   ---`);

console.log(`- exemplu 1 -`);
const clients5 = ["Mango", "Ajax", "Poly"];

for (const client of clients5) {
  console.log(client);
}

console.log(`- exemplu 2 -`);
const string = "javascript";

for (const character of string) {
  console.log(character);
}

// ---   Operatorul break și continue   ---
console.log(`---   Operatorul break și continue   ---`);

console.log(`- exemplu 1:break -`);
const clients6 = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
const clientNameToFinds = "Pol";

let message;
let messages;

for (const client of clients6) {
  // La fiecare iterație, vom verifica dacă elementul din array se potrivește cu
  // numele clientului. Dacă se potrivește, atunci scriem un mesaj de succes
  // în variabila message adăugăm break-ul pentru a nu căuta mai departe
  if (client === clientNameToFind) {
    message = "Clientul cu acest nume există în baza de date!";
    break;

    // Dacă nu se potrivesc, atunci scriem un mesaj din care reiese că acest nume nu s-a putut găsi message = "Nu există nici un client cu acest nume în baza de date!";
  }
  if (client === clientNameToFinds) {
    message = "Clientul cu acest nume nu există în baza de date!";
    break;
  }
}

console.log(message, messages); // "Clientul cu acest nume există în baza de date!"

console.log(`- exemplu 2:break -`);
const clients7 = ["Mango", "Poly", "Ajax"];
const clientNameToFind1 = "Pol";
let message1 = "Nu există nici un client cu acest nume în baza de date!";

for (const client of clients7) {
  if (client === clientNameToFind1) {
    message1 = "Clientul cu acest nume există în baza de date!";
    break;
  }
  // Dacă nu se potrivește, atunci nu facem nimic la această iterație
}

console.log(message1); // Clientul cu acest nume există în baza de date!

console.log(`- exemplu 3:continue+break -`);
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Pentru numere mai mici decât valoarea limită, va funcționa continue, iar corpul
// execuției statement se oprește.
// Se va efectua următoarea iterație.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Numărul este mai mare decât ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

for (let j = 0; j < numbers.length; j += 1) {
  if (numbers[j] < threshold) {
    console.log(`Numărul este mai mic decât ${threshold}: ${numbers[j]}`); // 18, 29, 34
  }
}

// -----     Atribuire prin referință și după valoare     -----
console.log(
  `-------       Atribuire prin referință și după valoare       -------`
);

console.log(`- exemplu 1:atribuire dupa valoare -`);
let a = 5;
// Atribuire după valoare, se va crea o altă celulă în memorie
// în care se va copia valoarea 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Modificarea valorii pentru variabila a
a = 10;
console.log(a); // 10
// Valoarea lui b nu s-a schimbat, deoarece este o copie separată
console.log(b); // 5

console.log(`- exemplu 2:atribuire prin referință -`);
const c = ["Mango"];
// Deoarece c este o matrice, d este setat la o referință a matricei
// deja existente în memorie. Acum c și d indică aceeași matrice.
const d = c;
console.log(c); // ["Mango"]
console.log(d); // ["Mango"]

// Să modificăm matricea adăugând un alt element folosind pointerul de la c
c.push("Poly");
console.log(c); // ["Mango", "Poly"]

// d, de asemenea, este schimbat, deoarece d, ca și c,
// deține doar o referință la același loc în memorie
console.log(d); // ["Mango", "Poly"]

// Se repetă rezultatul
d.push("Ajax");
console.log(c); // ["Mango", "Poly", "Ajax"]
console.log(d); // ["Mango", "Poly", "Ajax"]

// -----     Metodele unui array     -----
console.log(`-------       Metodele unui array       -------`);

console.log(`-----     Metoda split() și join()     -----`);

console.log(`- exemplu 1:split() -`);
const namee = "Mango";
console.log(namee.split("")); // ["M", "a", "n", "g", "o"]

const messagess = "JavaScript is cool";
console.log(messagess.split(" ")); // ["JavaScript", "is", "cool"]

console.log(`- exemplu 2:join() -`);
const words = ["JavaScript", "is", "cool"];

console.log(`join("")`);
console.log(words.join("")); // "JavaScriptiscool"

console.log(`join(" ")`);
console.log(words.join(" ")); // "JavaScript is cool"

console.log(`("-")`);
console.log(words.join("-")); // "JavaScript-is-cool"

// ---   Metoda indexOf()   ---
console.log(`---   Metoda indexOf()   ---`);

const clientss = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clientss.indexOf("Poly")); // 2
console.log(clientss.indexOf("Monkong")); // -1

// ---   Metoda includes()   ---
console.log(`---   Metoda includes()   ---`);

const clientsss = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clientsss.includes("Poly")); // true
console.log(clientsss.includes("Monkong")); // false

// --  Verificarea mai multor condiții cu ajutorul metodei includes()  --
console.log(
  `--  Verificarea mai multor condiții cu ajutorul metodei includes()  --`
);

console.log(`- exemplu 1:simplu -`);
const fruit = "apple";

if (fruit === "apple" || fruit === "strawberry") {
  console.log("It is a red fruit!");
}

console.log(`- exemplu 2:cu mai multe elemente -`);
const fruits = "apple";

if (
  fruits === "apple" ||
  fruits === "strawberry" ||
  fruits === "cherry" ||
  fruits === "cranberries"
) {
  console.log("It is a red fruit!");
}

console.log(`- exemplu 3:mai simplu cu includes -`);
// Mutăm opțiunile într-un array
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
let fruitss = ["strawberry", "bannana", "cherry", "mango"];

for (let k = 0; k < fruitss.length; k += 1) {
  // Verificăm dacă elementul există
  const hasFruit = redFruits.includes(fruitss[k]);
  if (hasFruit) {
    console.log(`${fruitss[k]} is a red fruit!`);
  } else {
    console.log(`${fruitss[k]} is not a red fruit`);
  }
}

// ---   Metoda push() și pop()   ---
console.log(`---   Metoda push() și pop()   ---`);

console.log(`- exemplu 1:push/unshift() -`);
const numberss = [];

numberss.push(1);
console.log(numberss); // [1]

numberss.push(2);
console.log(numberss); // [1, 2]

numberss.push(3);
console.log(numberss); // [1, 2, 3]

numberss.unshift(4);
console.log(numberss); // [1, 2, 3, 4]

numberss.push(5);
console.log(numberss); // [1, 2, 3, 4, 5]

console.log(`- exemplu 2:pop/shift() -`);
const numbersss = [1, 2, 3, 4, 5];

console.log(numbersss.pop()); //  5
console.log(numbersss); // [1, 2, 3, 4]

console.log(numbersss.shift()); //  4
console.log(numbersss); // [1, 2, 3]

console.log(numbersss.pop()); //  3
console.log(numbersss); // [1, 2]

console.log(numbersss.shift()); //  2
console.log(numbersss); // [1]

console.log(numbersss.pop()); //  1
console.log(numbersss); // []

// ---   Metoda slice   ---
console.log(`---   Metoda slice   ---`);

console.log(`- exemplu 1:slice(begin, end) -`);
const clientssss = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clientssss.slice(1, 3)); // ["Ajax", "Poly"]

console.log(`- exemplu 2:slice() -`);
console.log(clientssss.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

console.log(`- exemplu 3:slice(begin) -`);
console.log(clientssss.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clientssss.slice(2)); // ["Poly", "Kiwi"]

console.log(`- exemplu 4:slice(-begin) -`);
console.log(clientssss.slice(-2)); // ["Poly", "Kiwi"]

// ---   Metoda splice   ---
console.log(`---   Metoda splice   ---`);

// --  Îndepărtarea  --
console.log(`--  Îndepărtarea  --`);

const scores = [1, 2, 3, 4, 5];

// Ștergem trei elemente ale matricei, începând cu primul element (index 0)
const deletedScores = scores.splice(0, 3);

// Acum array-ul scores conține două elemente
console.log(`scores:`, scores); // [4, 5]

// Și array-ul deletedScores conține cele trei elemente șterse
console.log(`deletedScores:`, deletedScores); // [1, 2, 3]

// --  Adăugarea  --
console.log(`--  Adăugarea  --`);

console.log(`- exemplu 1:un element -`);
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

console.log(`- exemplu 2:mai multe elemente -`);
colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "purple", "blue"]

// --  Înlocuirea  --
console.log(`--  Înlocuirea  --`);

const languages = ["C", "C++", "Java", "JavaScript"];

// Să înlocuim elementul de la indexul 1 cu unul nou
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Înlocuim elementul cu indexul 2 cu mai multe
languages.splice(2, 2, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go"]

// ---   Metoda concat()   ---
console.log(`---   Metoda concat()   ---`);

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(`oldClients:`, oldClients);
const newClients = ["Monkong", "Singu"];
console.log(`newClients:`, newClients);

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(`allClientsWithOldFirst:`, allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(`allClientsWithNewFirst:`, allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

console.log("-----  replace on index  ----");
const family = [`radu`, `lavi`, `diti`, `ovi`, `mama`, `altu`];
console.log(`old family members :`, family);
family[2] = `nicu`;
console.log(`new family members :`, family);

console.log("-----  replace last  ----");
const lastMember = family.length - 1;
family[lastMember] = `Nelu`;
console.log(`last new family members :`, family);
const newMember = [`Rodica`];
let bigFamily = family.concat(newMember);
console.log(`Big family is :`, bigFamily);

console.log("-----  show each upper case  ----");
for (let i = 0; i < bigFamily.length; i++) {
  console.log(bigFamily[i].toUpperCase(), "is a member of my family");
}

console.log("-----  for(const (value) of (value))  ----");
for (const members of bigFamily) {
  console.log(members.toLowerCase());
}

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

/*
Example 7 - Sorting an array with a loop 

Write a script to sort an array of strings alphabetically by the first letter 
of an element.
*/

// varianta-1
console.log(`varianta-1`);

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
const sortLangs = langs.sort();
console.log(sortLangs);

// varianta-2
console.log(`varianta-2`);

const langses = ["python", "javascript", "c++", "haskel", "php", "ruby"];

for (let i = 0; i < langses.length - 1; i += 1) {
  for (let j = i + 1; j < langses.length; j++) {
    if (langses[i][0] > langses[j][0]) {
      let aux = langses[i];
      langses[i] = langses[j];
      langses[j] = aux;
    }
  }
}

console.log(langses);

// varianta-3
console.log(`varianta-3`);

const langsess = ["python", "javascript", "c++", "haskel", "php", "ruby"];

for (let i = 0; i < langses.length - 1; i += 1) {
  if (langses[i][0] > langses[i + 1][0]) {
    let aux = langsess[i];
    langses[i] = langsess[i + 1];
    langses[j] = aux;
  }
}

console.log(langses);

// - exercitiul-2 -
console.log(`- exercitiul-2 -`);

/*
Example 8 - Search for an element

Write a script to find the smallest number in an array. The code should work 
for any array of numbers. Use a loop to solve problems.
*/

const numberse = [2, 17, 94, -8, 1, 23, -2, 37];
let min;
let small = numberse[0];
for (let i = 0; i < numberse.length; i++) {
  const element = numberse[i];
  if (element < small) {
    min = element;
  }
}
console.log(min); // 1

// varianta-2
console.log(`varianta-2`);

const numberses = [2, 17, 94, 1, 23, -6, 37, 0, -1, -3];
let smallest = numberses[0];
let elements;
for (let i = 0; i < numberses.length; i++) {
  elements = numberses[i];
  if (elements < small) {
  }
}

console.log(elements);
