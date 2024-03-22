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

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = console.log(makePizza());
const pointer = console.log(makePizza);
