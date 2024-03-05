// ---------   Conspect   ----------
console.log(`---------   Conspect   ----------`);

// ---   Strict mode   ---
("use strict");

// ---   Proprietăți   ---
console.log(`---   Proprietăți   ---`);

"JavaScript is awesome".length;
console.log("JavaScript is awesome".length);

// ---   Metode   ---
console.log(`---   Metode   ---`);
"JavaScript is awesome".toUpperCase();
console.log("JavaScript is awesome".toUpperCase());

//---    Declararea variabilelor   ---
console.log(`---    Declararea variabilelor   ---`);
// Variabilele declarate cu const, treabuie neapărat să fie
// inițializate cu o valoare, în caz contrar va apărea o eroare.
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

// Dacă o variabilă este declarată ca const, valoarea ei nu poate fi suprascrisă.
// Dacă, totuși, încercăm să atribuim o nouă valoare, vom obține o eroare de execuție a scriptului.
// yearOfBirth = 2020; // ❌ Incorect, va apărea o eroare.

// Variabilelor declarate cu let nu trebuie să li se atribuie neapărat o valoare la inițializare.
let age;

// Dacă unei variabile declarate ca let nu i se atribuie inițial o valoare,
// va fi inițializată cu valoarea undefined.
console.log(age); // undefined

// console.log() este o metodă pentru printarea datelor în consola browserului,
// vom face cunoştință, mai în detaliu, cu aceasta un pic mai târziu.

// Dacă o variabilă este declarată ca let, valoarea ei poate fi suprascrisă.
age = 14;
console.log(age); // 14

// ---   constant și CONSTANT   ---
console.log(`---   constant și CONSTANT   ---`);
// Constanta ce menține valoarea culorii
const COLOR_TEAL = "#009688";

// Constanta ce menține un mesaj de log in
const LOGIN_SUCCESS_MESSAGE = "Bine ai venit!";

// ---   Operatorul typeof   ---
console.log(`---   Operatorul typeof   ---`);
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

// ---   Printarea datelor   ---
console.log(`---   Printarea datelor   ---`);
const messages = "JavaScript is awesome!";
console.log(messages); // JavaScript is awesome!

const usernames = "Mango";
console.log("Username is ", usernames); // Username is Mango

const messagess = "JavaScript is awesome!";
// alert(messagess);

// ---  Obținerea datelor   ---
console.log(`---  Obținerea datelor   ---`);

// Solicităm clientului să confirme rezervarea la hotel
// și salvăm rezultatul execuției confirm într-o variabilă.
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Întrebăm numele hotelului în care clientul ar dori să stea
// și salvăm rezultatul apelului prompt într-o variabilă.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
const value = "Please enter a number!";
console.log(typeof value); // "string"
console.log(value); // "5"

//---   Operatorii aritmetici   ---
console.log(`---   Operatorii aritmetici   ---`);
const x = 10;
const y = 5;

// Adunarea
console.log(`Adunarea`);
console.log(x + y); // 15

// Scăderea
console.log(`Scăderea`);
console.log(x - y); // 5

// Înmulțirea
console.log(`Înmulțirea`);
console.log(x * y); // 50

// Împărțirea
console.log(`Împărțirea`);
console.log(x / y); // 2

// Restul împărțirii
console.log(`Restul împărțirii`);
console.log(x % y); // 0

// Adunarea cu înlocuire (disponibilă și pentru toți ceilalți operatori)
console.log(
  `Adunarea cu înlocuire (disponibilă și pentru toți ceilalți operatori)`
);
let values = 5;

// Anotare similară: value = value + 10;
console.log(`Anotare similară: value = value + 10;`);
values += 10;
console.log(values); // 15

//---   Operatori de comparare   ---
console.log(`---   Operatori de comparare   ---`);
const x1 = 5;
const y1 = 10;
const z = 5;

console.log("x1 > y1:", x1 > y1); // false
console.log("x1 < y1:", x1 < y1); // true
console.log("x1 < z:", x1 < z); // false
console.log("x1 <= z:", x1 <= z); // true
console.log("x1 === y1:", x1 === y1); // false
console.log("x1 === z:", x === z); // true
console.log("x1 !== y1:", x1 !== y1); // true
console.log("x1 !== z:", x1 !== z); // false

//---   Operatorii de egalitate   ---
console.log(`---   Operatorii de egalitate   ---`);
// ❌ Incorect, se compară doar valoarea boolean
console.log(`❌ Incorect, se compară doar valoarea boolean`);
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

// ✅ Corect, se compară atât valoarea cât și tipul
console.log(`✅ Corect, se compară atât valoarea cât și tipul`);
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

//---   Convertirea către un număr   ---
console.log(`---   Convertirea către un număr   ---`);
const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

//---   Metoda Number.parseInt() și Number.parseFloat()   ---
console.log(`---   Metoda Number.parseInt() și Number.parseFloat()   ---`);
console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN

//---   Verificarea unui număr   ---
console.log(`---   Verificarea unui număr   ---`);
const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

//---   Adunarea numerelor zecimale   ---
console.log(`---   Adunarea numerelor zecimale   ---`);
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

//---   Clasa Math   ---
console.log(`---   Clasa Math   ---`);
// Math.floor(num) - returnează valoarea rotunjită în jos
// la cel mai apropiat număr întreg
console.log(`Math.floor(num)`);
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - returnează valoarea rotunjită în sus
// la cel mai apropiat număr întreg
console.log(`Math.ceil(num)`);
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - returnează cel mai apropiat număr întreg
console.log(`Math.round(num)`);
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - returnează cel mai mare număr
// dintr-un set de numere
console.log(`Math.max(num1, num2, ...)`);
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - returnează cel mai mic număr
// dintr-un set de numere
console.log(`Math.min(num1, num2, ...)`);
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - ridicare la putere
console.log(`Math.pow(base, exponent)`);
console.log(Math.pow(2, 4)); // 16

// Math.random() - returnează un număr aleatoriu în intervalul [0, 1)
console.log(`Math.random()`);
console.log(Math.random()); // un număr aleatoriu între 0 și 1

console.log(`returnează un număr aleatoriu de la 1 la 10`);
console.log(Math.random() * (10 - 1) + 1); // returnează un număr aleatoriu de la 1 la 10

//---   Concatenarea (combinarea) șirurilor de caractere   ---
console.log(`---   Concatenarea (combinarea) șirurilor de caractere   ---`);
const messagesss = "Mango " + "is" + " happy";
console.log(messagesss); // Mango is happy

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

//---   Șiruri de șabloane   ---
console.log(`---   Șiruri de șabloane   ---`);
// Folosind variabile, trebuie să compunem un șir cu valori de înlocuit
const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"

const guestNames = "Mango";
const roomNumbers = 207;
const greetings = `Welcome ${guestNames}, your room number is ${roomNumbers}!`;
console.log(greetings); // "Welcome Mango, your room number is 207!"

//---   Proprietatea length   ---
console.log(`--   Proprietatea length   ---`);
const messagessss = "Welcome to Bahamas!";
console.log(messagessss.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

//---   Metodele toLowerCase() și toUpperCase()   ---
console.log(`---   Metodele toLowerCase() și toUpperCase()   ---`);
const messagesssss = "Welcome to Bahamas!";
console.log(messagesssss.toLowerCase()); // "welcome to bahamas!"
console.log(messagesssss.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(messagesssss); // "Welcome to Bahamas!"

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//---   Metoda indexOf()   ---
console.log(`---   Metoda indexOf()   ---`);
const messagessssss = "Welcome to Bahamas!";
console.log(messagessssss.indexOf("to")); // 8
console.log(messagessssss.indexOf("hello")); // -1

//---   Metoda includes()   ---
console.log(`---   Metoda includes()   ---`);
const productName = "Lego castle";

console.log(productName.includes("l")); // true
console.log(productName.includes("L")); // true
console.log(productName.includes("E")); // false
console.log(productName.includes("castle")); // true
console.log(productName.includes("Castle")); // false
console.log(productName.includes("Lego")); // true
console.log(productName.includes("lego")); // false

//---   Metoda endsWith()   ---
console.log(`---   Metoda endsWith()   ---`);
const jsFileNames = "script.js";
console.log(jsFileNames.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

//---   Metodele replace() și replaceAll()   ---
console.log(`---   Metodele replace() și replaceAll()   ---`);
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//---   Metoda slice()   ---
console.log(`---   Metoda slice()   ---`);
const productNamess = "Repair droid";
console.log(productNamess.slice(0, 4)); // "Repa"
console.log(productNamess.slice(3, 9)); // "air dr"
console.log(productNamess.slice(0, productNamess.length)); // "Repair droid"
console.log(productNamess.slice(7, productNamess.length)); // "droid"

//---   "ȘI" (and)   ---
console.log(`---   "ȘI" (and)   ---`);
const ages = 20;
console.log(ages > 10 && ages < 30); // true && true -> true

const agess = 50;
console.log(agess > 10 && agess < 30); // true && false -> false
console.log(agess > 80 && agess < 120); // false && true -> false

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ""
console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"
console.log("Poly" && "Mango"); // true && true -> "Mango"

//---   "SAU" (or)   ---
console.log(`---   "SAU" (or)   ---`);
const agesss = 5;
console.log(agesss < 10 || agesss > 30); // true || false -> true

const agessss = 40;
console.log(agessss < 10 || agessss > 30); // false || true -> true

const agesssss = 20;
console.log(agesssss < 10 || agesssss > 30); // false || false -> false

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

//---  "NU" (not)   ---
console.log(`---  "NU" (not)   ---`);
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

// -----------   Cristi Socaci    ------------
console.log(`-----------   Cristi Socaci    ------------`);
/**
 * comentariu multiline
 */

// comentariu singleline
let surname = "radu";
let name1 = "naramzoiu";

let fullName = `${surname} ${name1} hello`;
console.log(fullName);
// sau mai complicat
fullName = `${surname} + " " + ${name1} + " " + hello`;
console.log(fullName);

const radu = {
  names: `naramzoiu`,
  surname1: `raduu`,
  surname2: `bogdan`,
};
console.log(radu.surname2);

// messaje pe web cu alert---confirm---prompt !!! daca ii dai console.log apare in consola raspunsul userului

// concatenare
const namee = "raul";
const surname3 = `bulacel`;
const fullNamee = namee + surname3;
const fullNamee2 = namee + " " + surname3;
console.log(fullNamee);
console.log(fullNamee2);
// sau poti baga un spatiu la stringul namee dupa nume `raul `
console.log("Length :", fullNamee2.length);
// la o functie avem in interior paranteze argumente despartite prin virgule si spatiu
// !!! orice functie are la sfarsit: ()
console.log("replace :", fullNamee2.replace("a", "i"));
console.log("replace all :", fullNamee2.replaceAll("a", "i"));

// const aa = Number(prompt("Enter first number"));
// const bb = Number(prompt("Enter second number"));
// console.log(prompt("sum =", aa + bb));
// console.log("sum =", aa + bb);

// Parsare
console.log("----    Parsare    ----");
let valuee = "123.48dgdf213";

console.log("number", Number(valuee));
console.log("parseint", Number.parseInt(valuee));
console.log("parsefloat", Number.parseFloat(valuee));

// Math
console.log(
  `-------'math' sistem de integrare 'random' intre numere propuse-----`
);
let min = 10;
let max = 50;
const randomm = Math.random() * (max - min) + min;

console.log(randomm);
