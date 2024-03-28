// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Pure function     -----
console.log(`-------       Pure function       -------`);

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Datele matricei numbers s-au modificat
console.log(numbers); // [2, 4, 6, 8, 10]

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers0 = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers0, 2);

// Nu a existat nici o mutație a datelor inițiale
console.log(numbers0); // [1, 2, 3, 4, 5]
// Funcția a returnat o nouă matrice cu date modificate
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// -----     Metodele de sortare a unui Array     -----
console.log(`-------       Metodele de sortare a unui Array       -------`);

// -----     Metoda map()     -----
console.log(`-------       Metoda map()       -------`);

const planets = ["Pământ", "Marte", "Venus", "Jupiter"];
console.log(planets);

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['PĂMÂNT', 'MARTE', 'VENUS', 'JUPITER']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['pământ', 'marte', 'venus', 'jupiter']

// Matricea originală nu a fost modificată
console.log(planets); // ['Pământ', 'Marte', 'Venus', 'Jupiter']

// ---   Array of objects   ---
console.log(`---   Array of objects   ---`);

const students = [
  { name: "Mango", score: 83 },
  { name: "Radu", score: 59 },
  { name: "Alex", score: 37 },
  { name: "Andrei", score: 94 },
  { name: "Ion", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ['Mango', 'Radu', 'Alex', 'Andrei', 'Ion']

// -----     Metoda flatMap()     -----
console.log(`-------       Metoda flatMap()       -------`);

const students0 = [
  { name: "Vasile", courses: ["matematică", "fizică"] },
  { name: "Ion", courses: ["informatică", "matematică"] },
  { name: "Andreea", courses: ["fizică", "biologie"] },
];

students0.map((student) => student.courses);
// [['matematică', 'fizică'], ['informatică', 'matematică'], ['fizică', 'biologie']]

students0.flatMap((student) => student.courses);
// ['matematică', 'fizică', 'informatică', 'matematică', 'fizică', 'biologie'];

// -----     Metoda filter()     -----
console.log(`-------       Metoda filter()       -------`);

const values = [51, -3, 27, 21, -68, 42, -37];
console.log(values);

console.log(`-value >= 0-`);

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

console.log(`-value < 0-`);

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]

console.log(`-value > 1000-`);

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []

// Matricea inițială nu s-a modificat.
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// ---   Filtrarea elementelor unice   ---
console.log(`---   Filtrarea elementelor unice   ---`);

const students1 = [
  { name: "Vasile", courses: ["matematică", "fizică"] },
  { name: "Ion", courses: ["informatică", "matematică"] },
  { name: "Andreea", courses: ["fizică", "biologie"] },
];

const allCourses = students1.flatMap((student) => student.courses);
console.log(allCourses);
// ['matematică', 'fizică', 'informatică', 'matematică', 'fizică', 'biologie'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(uniqueCourses);

// ---   Array of objects   ---
console.log(`---   Array of objects   ---`);

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students2 = [
  { name: "Mango", score: 83 },
  { name: "Radu", score: 59 },
  { name: "Alex", score: 37 },
  { name: "Andrei", score: 94 },
  { name: "Ion", score: 64 },
];

const best = students2.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // O matrice cu obiectele: Mango și Andrei

const worst = students2.filter((student) => student.score < LOW_SCORE);
console.log(worst); // O matrice cu un singur obiect Alex

// Într-o funcție callback este comod să destructurăm proprietățile unui obiect
const average = students2.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // O matrice cu obiectele: Radu și Ion

// -----     Metoda find()     -----
console.log(`-------       Metoda find()       -------`);

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: 'blue', color: '#2196F3' }

console.log(colorPickerOptions.find((option) => option.label === "pink")); // { label: 'pink', color: '#E91E63' }
console.log(colorPickerOptions.find((option) => option.label === "white")); // undefined

// -----     Metoda findIndex()     -----
console.log(`-------       Metoda findIndex()       -------`);

const colorPickerOptions0 = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions0.findIndex((option) => option.label === "blue")); // 2
console.log(colorPickerOptions0.findIndex((option) => option.label === "pink")); // 3
console.log(
  colorPickerOptions0.findIndex((option) => option.label === "white")
); // -1

// -----     Metoda every() și some()     -----
console.log(`-------       Metoda every() și some()       -------`);

// ---  Metoda every()   ---
console.log(`---   Metoda every()   ---`);

// Toate elementele sunt mai mari sau egale cu zero? - da
console.log([1, 2, 3, 4, 5].every((value) => value >= 0)); // true

// Toate elementele sunt mai mari sau egale cu zero? - nu
console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));
// false

// ---  Metoda some()   ---
console.log(`---   Metoda some()   ---`);

// Există cel puțin un element mai mare sau egal cu zero? - da
console.log([1, 2, 3, 4, 5].some((value) => value >= 0));
// true

// există cel puțin un element mai mare sau egal cu zero? - da
console.log([-7, -20, 3, -10, -14].some((value) => value >= 0));
// true

// Există cel puțin un element mai mic decât zero? - da
console.log([1, 2, 3, 4, 5].some((value) => value < 0));
// false

// Există cel puțin un element mai mic decât zero? - da
console.log([1, 2, 3, -10, 4, 5].some((value) => value < 0));
// true

// ---   Array of objects   ---
console.log(`---   Array of objects   ---`);

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every() va returna true numai dacă toate fructele sunt disponibile
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some() va returna true dacă cel puțin un fruct este disponibil
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// -----     Metoda reduce()     -----
console.log(`-------       Metoda reduce()       -------`);

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

// ---   Array of objects   ---
console.log(`---   Array of objects   ---`);

const students3 = [
  { name: "Andrei", score: 83 },
  { name: "Cozmina", score: 59 },
  { name: "George", score: 37 },
  { name: "Nicolae", score: 94 },
  { name: "Ioana", score: 64 },
];

// Numele acumulatorului poate fi orice, este doar un parametru de funcție
const totalScore = students3.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;
console.log(averageScore);

// ---   Advanced reduce   ---
console.log(`---   Advanced reduce   ---`);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Parcurge toate elementele colecției și adună valorea din proprietatea likes
// la acumulator, a cărui valoare inițială este 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Dacă numărarea aprecierilor este o operație repetitivă, vom scrie o funcție
// pentru a număra aprecierile dintr-o colecție
const countLikes = (tweetss) => {
  return tweetss.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const tweets0 = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Parcurgem toate elementele colecției și adăugăm valorile proprietății tags
// la acumulator, a cărui valoare inițială va fi specificată printr-o matrice goală [].
// La fiecare iterație, apelăm metoda push() pentru a adăuga toate elementele din tweet.tags
// în acumulator și-l vom returna.
const tags = tweets0.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Dacă colectarea tagurilor este o operație repetitivă, vom scrie sub forma unei funcții
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets0));

// - exemplu 3 -
console.log(`- exemplu 3 -`);

// reducere la obiecte cu nr. de tag-uri unice
console.log(`-reducere la obiecte cu nr. de tag-uri unice-`);

const tweets1 = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags1 = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags1 = getTags1(tweets1);
console.log(tags1);

// Declarăm separat funcția callback, iar în reduce, parsăm o referință la ea.
// Aceasta este o practică standard, dacă funcția callback este destul de mare.

// Dacă obiectul acumulator acc nu are propria sa proprietate cu cheia tag
// îl vom creaa și stoca apoi valoarea 0.
// În caz contrar, mărim valoarea cu 1.
const getTagCount = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;

  return acc;
};

// Valoarea inițială a acumulatorului este un obiect gol {}
const countTags = (tags) => tags.reduce(getTagCount, {});

const tagCount = countTags(tags1);
console.log(tagCount);

// exemplu acc[tag]
console.log(`-exemplu acc[tag]-`);

const num = [3, 2, 8, 4, 7, 8, 8, 2, 0];
console.log(num);
console.log(num[2]);
const numCount = countTags(num);
console.log(numCount);

// -----     Metoda sort()     -----
console.log(`-------       Metoda sort()       -------`);

// - exemplu 1 -
console.log(`- exemplu 1-sortare numere crescator -`);

const scores = [61, 19, 74, 35, 92, 56];
console.log(scores);
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

// - exemplu 2 -
console.log(`- exemplu 2-sortare numere crescator -`);

const scores0 = [27, 2, 41, 4, 7, 3, 75];
console.log(scores0);
scores0.sort();
console.log(scores0); // [2, 27, 3, 4, 41, 7, 75]

// - exemplu 3 -
console.log(`- exemplu 3-matrice stringuri sortata alfabetic -`);

const students4 = ["Ion", "Georgiana", "Diana", "George", "Andrei", "Ioana"];
console.log(students4);
students.sort();
console.log(students); // ["Andrei", "Diana", "George", "Georgiana", "Ioana", "Ion"]

// - exemplu 4 -
console.log(`- exemplu 4-majuscule inainte litere mici -`);

const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters);
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// - exemplu 5 -
console.log(`- exemplu 5-sortare cu copiere initiala matrice -`);

const scores1 = [61, 19, 74, 35, 92, 56, 0, 11, 21, 7, 6, 4];
const ascendingScores = [...scores1].sort();

console.log(scores1); // [61, 19, 74, 35, 92, 56, 0, 11, 21, 7, 6, 4]
console.log(ascendingScores); // [0, 11, 19, 21, 35, 4, 56, 6, 61, 7, 74, 92]

// ---   Ordinea de sortare "custom" a numerelor   ---
console.log(`---   Ordinea de sortare "custom" a numerelor   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-sortare crescatoare -`);

const scores2 = [61, 19, 74, 35, 92, 56, 4, 7, 9, 1, -4, -1];
console.log(scores2);
const ascendingScores0 = [...scores2].sort((a, b) => a - b);
console.log(ascendingScores0); // [-4, -1, 1, 4, 7, 9, 19, 35, 56, 61, 74, 92]

// - exemplu 2 -
console.log(`- exemplu 2-sortare descrescatoare si cu a=b -`);

const scores3 = [61, 19, 74, 9, 3, -4, 35, 92, 56, 4, 7, 9, 1, -4, -1];
console.log(scores3);
const descendingScores1 = [...scores3].sort((a, b) => b - a);
console.log(descendingScores1); // [92, 74, 61, 56, 35, 19, 9, 9, 7, 4, 3, 1, -1, -4, -4]

// ---   Ordinea de sortare "custom" pentru string-uri   ---
console.log(`---   Ordinea de sortare "custom" pentru string-uri   ---`);

const students5 = ["Valentin", "Andrei", "Popescu", "Ana", "Diana", "Mihaela"];

const inAlphabetOrder = [...students5].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ["Ana", "Andrei", "Diana", "Mihaela", "Popescu", "Valentin"]

const inReversedOrder = [...students5].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ["Valentin", "Popescu", "Mihaela", "Diana", "Andrei", "Ana"]

// ---   Sortarea obiectelor   ---
console.log(`---   Sortarea obiectelor   ---`);

const students6 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

console.log(students6);

// inAscendingScoreOrder
console.log(`-inAscendingScoreOrder-`);

const students60 = [...students6];
// console.log(students60);
const inAscendingScoreOrder = students60.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

// inDescendingScoreOrder
console.log(`-inDescendingScoreOrder-`);

const students61 = [...students6];
// console.log(students61);
const inDescendingScoreOrder = students61.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);

// inAlphabeticalOrder
console.log(`-inAlphabeticalOrder-`);

const students62 = [...students6];
// console.log(students62);
const inAlphabeticalOrder = students62.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAlphabeticalOrder);

// -----     Înlănțuirea metodelor     -----
console.log(`-------       Înlănțuirea metodelor       -------`);

const students7 = [
  { name: "Alex", score: 83, courses: ["matematică", "fizică"] },
  { name: "Vasile", score: 59, courses: ["informatică", "matematică"] },
  { name: "Andrei", score: 37, courses: ["fizică", "biologie"] },
  { name: "Georgiana", score: 94, courses: ["limba engleză", "informatică"] },
];

console.log(students7);

// studenti in ordine alfabetica
console.log(`-studenti in ordine alfabetica dupa scor-`);

const sortedByAscendingScore = [...students7].sort((a, b) => a.score - b.score);
console.log(sortedByAscendingScore);
const names0 = sortedByAscendingScore.map((student) => student.name);

console.log(names0); // ['Andrei', 'Vasile', 'Alex', 'Georgiana']

// metoda 2-inlantuite functiile=>scapam de variabile intermediare
console.log(
  `-metoda 2-inlantuite functiile=>scapam de variabile intermediare-`
);

const names1 = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names1); // ['Andrei', 'Vasile', 'Alex', 'Georgiana']

// - exemplu 2 -
console.log(`- exemplu 2-lista cursuri frecventate care nu repeta cursurile -`);

// extragere cursuri cu flatMap
console.log(`-extragere cursuri cu flatMap-`);

console.log(students7.flatMap((student) => student.courses)); //['matematică', 'fizică', 'informatică', 'matematică', 'fizică', 'biologie', 'limba engleză', 'informatică']

// extragere dubluri cursuri cu filter
console.log(`-extragere dubluri cursuri cu filter-`);

console.log(
  students7
    .flatMap((student) => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
); //['matematică', 'fizică', 'informatică', 'biologie', 'limba engleză']

// aranjare alfabetica cu sort(a, b)/localeCompare
console.log(`-aranjare alfabetica cu sort(a, b)/localeCompare-`);

const uniqueSortedCourses = students7
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['biologie', 'informatică', 'limba engleză', 'matematică', 'fizică']

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

console.log("------------ pure functions ----------------");
function test(arr) {
  const arr2 = [...arr];

  arr2[0] = 1;

  return arr2;
}

const arr = [2, 3, 4];

console.log(test(arr));

console.log(arr);

console.log("--------------------- map ------------------");
console.log(`-nu modifica matricea initiala doar la matrice de obiecte...!!!-`);

const arr1 = [1, 2, 3, 4];

console.log(arr1.map((x) => x * 2));

console.log(arr1);

const componente = [
  {
    id: "asdf",
    name: "monitor",
    price: 1200,
  },
  {
    id: "lkjd",
    name: "laptop",
    price: 5500,
  },
  {
    id: "vnka",
    name: "keyboard",
    price: 500,
  },
];

console.log(
  componente.map((componenta) => {
    const updated = {
      ...componenta,
      name: componenta.name + "asd",
    };
    return updated;
  })
);

console.log(componente);

console.log(`-adunam preturile-`);

const prices = componente.map((x) => x.price);
console.log(prices);

function priceSum(params) {
  let totalPrice = 0;

  prices.forEach((price) => {
    totalPrice += price;
  });
  console.log(totalPrice);
  return totalPrice;
}

priceSum(prices);

console.log(`-adaugam string la numele obiectelor-`);

console.log(componente);

const objectName = componente.map((comp) => {
  const objectNameMaped = {
    ...comp,
    name: comp.name + "asd",
  };

  return objectNameMaped;
});

console.log(objectName);

console.log("------------------------------flat & flatMap -------------------");

const asd = [1, 2, 3, [4, 8, 9, [7, 10, 11, [12, 13, 17]]]];
console.log(asd);

const asdFlatNormal = asd.flat();
console.log(asdFlatNormal);

const asdFlat2 = asd.flat(2);
console.log(asdFlat2);

const asdFlat3 = asd.flat(3);
console.log(asdFlat3);

const asdFlatInfinity = asd.flat(Infinity);
console.log(asdFlatInfinity);

console.log(asd);

console.log(`-"+" daca vrem sa adaugam ceva la inceput sau sfarsit de string-`);

let asc = "asc";
let ddd = "edt";
let resulte = ddd + asc + asc + ddd;
console.log(resulte);

console.log(`-sau "concat" -`);

console.log(ddd.concat(asc.concat(asc.concat(ddd))));

console.log(
  `-sau "padStart"/"padEnd" (cifra reprezinta numarul total de caractere adaugate in string) -`
);

console.log(asc.padStart(5, ddd).padEnd(7, asc).padEnd(11, ddd));

console.log("Cristi".padEnd(14, "...!"));

console.log(`-flatMap explicit-`);

const arr3 = [1, 2, 3, [4, 9, 8]];

const flatMap = (params) => {
  console.log(params.flatMap((x) => (x % 2 === 0 ? [x * 2, x * 4, x * 6] : x)));
  return [...params].flatMap((x) =>
    x % 2 === 0 ? [x * 2, x * 4, x * 6] : [x, 5]
  );
};

flatMap(arr3);
console.log(flatMap(arr3));

console.log(`-Cristi's flatMap-`);

const multiArr = [
  [[1], 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(multiArr.flat());
console.log(multiArr.flat(Infinity));

console.log(multiArr.map((x) => x).flat());
console.log(multiArr.flatMap((x) => x));

const flatArr = [1, 2, 3];

const flatArrResult = flatArr.flatMap((x) => (x === 2 ? [2, 2] : x));

console.log(flatArrResult);

console.log("--------------------------- filter ----------------------");
console.log(
  `-daca nu gaseste nimic returneaza array gol si daca ai metoda chain pusa nu iti da eroare deoarece nu returneaza undefined ca si "find-`
);

const filterArr = [51, -3, 27, 21, -68, 42, -37];

console.log(filterArr.filter((x) => x > 0));
console.log(filterArr.filter((x) => x > 100));

const componenteFiltrate = componente
  .filter((x) => x.price > 1000)
  .map((x) => x.name);
console.log(componenteFiltrate);

console.log("------------------ find & findIndex -------------------------");
console.log(filterArr.find((x) => x < 0));

const component = componente.find((componenta) => componenta.id === "asdf");

if (component === undefined) {
  console.log("Component not found");
}

// acelasi if scris altfel !!!!!!
console.log(`-acelasi if scris altfel !!!!!!-`);

const component0 = componente.find((componenta) => componenta.id === "asdf1");

if (!component0) {
  console.log("Component not found");
}

console.log(component);

const componentIndex = componente.findIndex(
  (componenta) => componenta.id === "asdf"
);

console.log(componentIndex);

console.log("-------------------- every & some -------------------");

console.log(filterArr.every((x) => x > -1000));

console.log(filterArr.some((x) => x > 1000));

console.log("------------------ reduce -----------------------");

const result1 = filterArr.reduce((acc, value) => {
  acc += value;
  return acc;
}, 0);

console.log(result1);

const words = [
  "calculator",
  "laptop",
  "monitor",
  "calculator",
  "monitor",
  "mouse",
  "monitor",
];

console.log(`-metoda 1-"hasOwnProperty cu acc de la 0"(mai curat...!!!)`);

const restul2 = words.reduce((acc, value) => {
  if (!acc.hasOwnProperty(value)) {
    acc[value] = 0;
  }
  acc[value]++;

  return acc;
}, {});

console.log(restul2);

console.log(`-metoda 2-"hasOwnProperty cu acc de la 1"`);

const restul3 = words.reduce((acc, value) => {
  if (!acc.hasOwnProperty(value)) {
    acc[value] = 1;
    return acc;
  }
  acc[value]++;
  return acc;
}, {});
console.log(restul3);

console.log(`-metoda 3-"=== undefined"`);

const restul4 = words.reduce((acc, value) => {
  const numbeOfRepetitions = acc[value];
  if (numbeOfRepetitions === undefined) {
    acc[value] = 0;
  }
  acc[value]++;
  return acc;
}, {});

console.log(restul4);

console.log(`-metoda 4-"!"`);

const restul5 = words.reduce((acc, value) => {
  const numbeOfRepetitions = acc[value];
  if (!numbeOfRepetitions) {
    acc[value] = 0;
  }
  acc[value]++;
  return acc;
}, {});

console.log(restul5);

console.log("------------------ sort ----------------------");
console.log(`-!!! Atentie...!!! Modifica array-ul Original...!!!-`);

const sortArr = [-51, 3, 27, 21, -68, 42, -37, 27];

const arrCopy = [...sortArr];
console.log(arrCopy.sort((a, b) => a - b));

console.log(sortArr);

// ------     Exercitii tema optional     ------
console.log(`---------        Exercitii tema optional `);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

/*
Implement the following methods using a for loop:
 - map
 - filter
 - find
 - every
 - some
*/

console.log(`Implement the following methods using a for loop:
 - map`);

const radu = [0, 3, 23, 48, 78, 8, 9, 7];

function getMap(array, callback) {
  let newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}
const add = (value) => value + 2;

console.log(radu);

console.log(getMap(radu, add));

console.log(`Implement the following methods using a for loop:
 - filter`);

function getFilter(array, callback) {
  let newArray = [];
  for (let arr of array) {
    if (callback(arr) === true) {
      newArray.push(arr);
    } else if (callback(arr) === false) {
      continue;
    }
  }
  return newArray;
}
const add0 = (value) => {
  if (value > 100) {
    return true;
  }
  return false;
};

console.log(add0(7));
console.log(add0(71));
console.log(add0(71) === true);

console.log(radu);

console.log(getFilter(radu, add0));

console.log(`Implement the following methods using a for loop:
 - find`);

console.log(`Implement the following methods using a for loop:
 - every`);

console.log(`Implement the following methods using a for loop:
 - some`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);
console.log(`- Collection of objects for all examples with cars -`);

/*
Collection of objects for all examples with cars
*/

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
Example 1 - Map method
Let the `getModels` function return an array of models (model field) of all
cars.
*/

console.log(`-Example 1 - Map method-`);

const getModels = (cars) => {
  return cars.map((x) => x.model);
};

console.table(getModels(cars));

/*
Example 2 - Map method
Let the `makeCarsWithDiscount` function return a new array of objects with a changed
value of the `price` property depending on the discount passed.
*/

console.log(`-Example 2 - Map method-`);

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map((x) => x.price - discount * x.price);
};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));

/*
Example 3 -Filter method
Let the `filterByPrice` function return an array of cars whose price is less
than the value of the `threshold` parameter.
*/

console.log(`-Example 3 - Filter method-`);

const filterByPrice = (cars, threshold) => {
  return cars.filter((x) => x.price < threshold);
};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));

/*
Example 4 - Filter method
Let the `getCarsWithDiscount` function return an array of cars whose
onSale property is true.
*/

console.log(`-Example 4 - Filter method-`);

const getCarsWithDiscount = (cars) => {
  return cars.filter((x) => x.onSale === true);
};

console.table(getCarsWithDiscount(cars));

/*
Example 5 - Filter method
Let the `getCarsWithType` function return an array of cars whose type
coincide with the value of the `type` parameter.
*/

console.log(`-Example 5 - Filter method-`);

const getCarsWithType = (cars, type) => {
  return cars.filter((x) => x.type === type);
};

console.table(getCarsWithType(cars, "suv"));
console.table(getCarsWithType(cars, "sedan"));

/*
Example 6 - The find method
*/

console.log(`-Example 6 - The find method
-`);

const getCarByModel = (cars, model) => {
  return cars.find((x) => x.model === model);
};

console.log(getCarByModel(cars, "F-150"));
console.log(getCarByModel(cars, "CX-9"));

/*
Example 7 - Sort method
Let the `sortByAscendingAmount` function return a new array of cars
sorted in ascending order by the value of the `amount` property.
*/

console.log(`-Example 7 - Sort method
-`);

const sortByAscendingAmount = (cars) => {
  return [...cars].sort((x, y) => x.amount - y.amount);
};

console.table(sortByAscendingAmount(cars));

/*
Example 8 - Sort method
Let the `sortByDescendingPrice` function return a new array of cars
sorted in descending order by the value of the `price` property.
*/

console.log(`-Example 8 - Sort method
-`);

const sortByDescendingPrice = (cars) => {
  return [...cars].sort((x, y) => y.price - x.price);
};

console.table(sortByDescendingPrice(cars));

/*
Example 9 - Sort method
Let the `sortByModel` function return a new array of cars sorted
by model name in alphabetical and reverse alphabetical order, depending on
the value of the `order` parameter.
*/

console.log(`-Example 9 - Sort method
-`);

const sortByModel = (cars, order) => {
  // return a.sortValue?.[1].localeCompare(b.sortValue?.[1]);
  let newCars;
  if (order === "asc") {
    newCars = [...cars].sort((x, y) => x.make.localeCompare(y.make));
  } else if (order === "desc") {
    newCars = [...cars].sort((x, y) => y.make.localeCompare(x.make));
  }

  return newCars;
};

console.table(sortByModel(cars, "asc"));
console.table(sortByModel(cars, "desc"));

/*
Example 10 - Reduce method
Let the `getTotalAmount` function return the total number of cars (the value
of the `amount` properties).
*/

console.log(`-Example 10 - Reduce method
-`);

// const countLikes = (tweetss) => {
//   return tweetss.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

const getTotalAmount = (cars) => {
  return cars.reduce((acc, value) => acc + value.amount, 0);
};

console.log(getTotalAmount(cars));

/*
Example 11 - Method chains
Let the `getAvailableCarNames` function return an array of car models, but 
only those that are currently for sale.
*/

console.log(`-Example 11 - Method chains
-`);

const getModelsOnSale = (cars) => {
  let carModel;
  carModel = cars.filter((x) => x.onSale === true).map((x) => x.model);
  return carModel;
};
console.table(getModelsOnSale(cars));

/*
Example 12 - Method chains
Let the `getSortedCarsOnSale` function return an array of cars for sale 
(onSale property), sorted by price ascending.
*/

console.log(`-Example 12 - Method chains
-`);

const getSortedCarsOnSale = (cars) => {
  return cars
    .filter((x) => x.onSale === true)
    .sort((a, b) => a.price - b.price);
};

console.table(getSortedCarsOnSale(cars));

// ------     Exercitii autoverificare 3     ------
console.log(`---------        Exercitii autoverificare 3        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result3 = console.log(makePizza());
const pointer = console.log(makePizza);

// - exercitiul-2 -
console.log(`- exercitiul-2 -`);

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSucces, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      console.log(
        onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
      );
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
    console.log(onSucces(pizzaName));
    return onSucces(pizzaName);
  },
};

// console.log(!pizzaPalace.pizzas.includes("Vienna"));

// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// - exercitiul-3 -
console.log(`- exercitiul-3-forEach + ArrowFunction -`);

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  orderedItems.forEach((params) => {
    totalPrice += params;
  });

  // Change code above this line
  console.log(totalPrice);
  return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

// - exercitiul-4 -
console.log(`- exercitiul-4-forEach + ArrowFunction -`);

function changeEven(numbers, value) {
  // Change code below this line
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  let newNumbers = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      // number = number + value;
      newNumbers.push(number + value);
    } else if (number % 2 !== 0) {
      newNumbers.push(number);
    }
  });
  console.log(newNumbers);
  return newNumbers;

  // Change code above this line
  // console.log(numbers);
}

changeEven([1, 2, 3, 4, 5], 10);
changeEven([2, 8, 3, 7, 4, 6], 10);
changeEven([17, 24, 68, 31, 42], 100);
changeEven([44, 13, 81, 92, 36, 54], 100);
changeEven([5, 9, 21, 20, 10, 19, 11, 24, 8, 8, 18, 18, 14, 23], 14);
changeEven([14, 18, 23, 21, 12, 8, 15, 14, 10, 17, 6, 6, 12, 14, 21, 11], 16);

// metoda 2
console.log(`-metoda 2-`);

const changeEven0 = (numbers, value) => {
  // Change code below this line

  let newNumbers = [...numbers];
  for (let i = 0; i < newNumbers.length; i += 1) {
    if (newNumbers[i] % 2 === 0) {
      newNumbers[i] += value;
    }
  }

  console.log(newNumbers);

  return newNumbers;
};

changeEven0([1, 2, 3, 4, 5], 10);
changeEven0([2, 8, 3, 7, 4, 6], 10);
changeEven0([17, 24, 68, 31, 42], 100);
changeEven0([44, 13, 81, 92, 36, 54], 100);
changeEven0([5, 9, 21, 20, 10, 19, 11, 24, 8, 8, 18, 18, 14, 23], 14);
changeEven0([14, 18, 23, 21, 12, 8, 15, 14, 10, 17, 6, 6, 12, 14, 21, 11], 16);

// - exercitiul-5 -
console.log(`- exercitiul-5-flatMap -`);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap((book) => book.genres);
console.log(genres);

// - exercitiul-6 -
console.log(`- exercitiul-6-filter -`);

const books0 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books0.filter((book) => book.rating >= MIN_RATING);
console.log(topRatedBooks);

const booksByAuthor = books0.filter((book) => book.author === AUTHOR);
console.log(booksByAuthor);

// - exercitiul-7 -
console.log(`- exercitiul-7-filter -`);

let users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// Change code below this line
const getUsersWithEyeColor = (users, color) => {
  console.log(users.filter((user) => user.eyeColor === color));
  return users.filter((user) => user.eyeColor === color);
};
// Change code above this line

getUsersWithEyeColor(users, "blue");
getUsersWithEyeColor(users, "green");
getUsersWithEyeColor(users, "brown");
getUsersWithEyeColor(users, "yellow");

// - exercitiul-8 -
console.log(`- exercitiul-8-flatMap+filter+array -`);

// Change code below this line
const getFriends = (users) => {
  console.log(
    users
      .flatMap((user) => user.friends)
      .filter((friend, index, array) => array.indexOf(friend) === index)
  );
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
// Change code above this line
getFriends(users);

// - exercitiul-9 -
console.log(
  `- exercitiul-9-find+array(primul obiect care satisface conditia) -`
);

const books1 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR1 = "Robert Sheckley";
// Change code below this line

const bookWithTitle = books1.find((book) => book.title === BOOK_TITLE);
console.log(bookWithTitle);

const bookByAuthor = books1.find((book) => book.author === AUTHOR1);
console.log(bookByAuthor);

// - exercitiul-10 -
console.log(
  `- exercitiul-10-every+array(toate obiectele trebuie sa satisfaca conditia => true) -`
);

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
console.log(eachElementInFirstIsEven);

const eachElementInFirstIsOdd = firstArray.every((number) => number % 2 !== 0);
console.log(eachElementInFirstIsOdd);

const eachElementInSecondIsEven = secondArray.every(
  (number) => number % 2 === 0
);
console.log(eachElementInSecondIsEven);

const eachElementInSecondIsOdd = secondArray.every(
  (number) => number % 2 !== 0
);
console.log(eachElementInSecondIsOdd);

const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
console.log(eachElementInThirdIsEven);

const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2 !== 0);
console.log(eachElementInThirdIsOdd);

// - exercitiul-11 -
console.log(
  `- exercitiul-11-some+array(cel putin un obiect trebuie sa satisfaca conditia => true) -`
);

const firstArray1 = [26, 94, 36, 18];
const secondArray1 = [17, 61, 23];
const thirdArray1 = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray1.some((number) => number % 2 === 0);
console.log(anyElementInFirstIsEven);

const anyElementInFirstIsOdd = firstArray1.some((number) => number % 2 !== 0);
console.log(anyElementInFirstIsOdd);

const anyElementInSecondIsEven = secondArray1.some(
  (number) => number % 2 === 0
);
console.log(anyElementInSecondIsEven);

const anyElementInSecondIsOdd = secondArray1.some((number) => number % 2 !== 0);
console.log(anyElementInSecondIsOdd);

const anyElementInThirdIsEven = thirdArray1.some((number) => number % 2 === 0);
console.log(anyElementInThirdIsEven);

const anyElementInThirdIsOdd = thirdArray1.some((number) => number % 2 !== 0);
console.log(anyElementInThirdIsOdd);

// - exercitiul-12 -
console.log(`- exercitiul-12-reduce+array(face suma timpilor de joc) -`);

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((int, val) => {
  return int + val;
}, 0);
console.log(totalPlayTime);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);

// - exercitiul-13 -
console.log(
  `- exercitiul-13-reduce+array(face suma balance de la toti users) -`
);

// Change code below this line
const calculateTotalBalance = (users) => {
  const balance = users.reduce((acc, user) => {
    // console.log(acc + user.balance);
    return acc + user.balance;
  }, 0);
  console.log(balance);
  return balance;
};
// Change code above this line

calculateTotalBalance(users);

// - exercitiul-14 -
console.log(
  `- exercitiul-14-reduce+array(face suma friends de la toti users) -`
);

// Change code below this line
const getTotalFriendCount = (users) => {
  const friends = users.reduce((acc, user) => {
    return acc + user.friends.length;
  }, 0);
  console.log(friends);
  return friends;
};
// Change code above this line

getTotalFriendCount(users);

// - exercitiul-15 -
console.log(
  `- exercitiul-15-sort+array(ordonare string crescator/descrescator alfabetic) -`
);

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
console.log(authors);
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder);

// - exercitiul-15 -
console.log(
  `- exercitiul-15-sort+array(ordonare valoare balance la users descrescator ) -`
);

// Change code below this line
const sortByDescendingFriendCount = (users) => {
  console.log([...users].sort((x, y) => y.balance - x.balance));
  return [...users].sort((x, y) => y.balance - x.balance);
};
// Change code above this line
sortByDescendingFriendCount(users);

// - exercitiul-16 -
console.log(
  `- exercitiul-16-map+filter+sort+array(metode combinate de extragere in ordine alfabetica a numelor autorilor a caror carti au un rating > MIN_BOOK_RATING ) -`
);

const books2 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8.4;
// Change code below this line

const names2 = [...books2]
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

console.log(names2);

// - exercitiul-17 -
console.log(
  `- exercitiul-17-sort+map+array(metode combinate de extragere din users a numelor utilizatorilor sortați după numărul de prieteni în ordine crescătoare (proprietatea friends)) -`
);

// Change code below this line
const getNamesSortedByFriendCount = (users) => {
  console.log(
    [...users]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map((user) => user.name)
  );
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
// Change code above this line

getNamesSortedByFriendCount(users);

// - exercitiul-18 -
console.log(
  `- exercitiul-18-flatMap+filter+sort+array(metode combinate de extragere din users a numelor  de prieteni în ordine alfabetica si fara sa se repete (proprietatea friends)) -`
);

// Change code below this line
const getSortedFriends = (users) => {
  console.log(
    users
      .flatMap((user) => user.friends)
      .filter((friend, index, array) => array.indexOf(friend) === index)
      .sort((x, y) => x.localeCompare(y))
  );
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((x, y) => x.localeCompare(y));
};
// Change code above this line

getSortedFriends(users);

// - exercitiul-19 -
console.log(
  `- exercitiul-19-filter+reduce+array(metode combinate de extragere din users a sumei  de balance în functie de gen (male/female)) -`
);

// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
  console.log(
    users
      .filter((user) => user.gender === gender)
      .reduce((acc, user) => {
        return acc + user.balance;
      }, 0)
  );
  return users
    .filter((user) => user.gender === gender)
    .reduce((acc, user) => {
      return acc + user.balance;
    }, 0);
};
// Change code above this line

getTotalBalanceByGender(users, "male");
getTotalBalanceByGender(users, "female");
