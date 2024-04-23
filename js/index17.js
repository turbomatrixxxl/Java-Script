// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Async     -----
console.log(`-------       Async       -------`);

// ---   Codul asincron   ---
console.log(`---   Codul asincron   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-sincron -`);

console.log("First log");
console.log("Second log");
console.log("Third log");

// - exemplu 2 -
console.log(`- exemplu 1-asincron -`);

// Will run first
console.log(`// Will run first`);
console.log("First a log");

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log(`// Will run last, after 2000 milliseconds`);
  console.log("Second a log");
}, 2000);

// Will run second
console.log(`// Will run second`);
console.log("Third a log");

// ---   Multithreading   ---
console.log(`---   Multithreading   ---`);

// -----     Timer     -----
console.log(`-------       Timer       -------`);

// ---   Timeout   ---
console.log(`---   Timeout   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const button = document.querySelector("button");

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log("I love async JS!");
  }, 2000);

  console.log(`id of the timer`);
  console.log(timerId);
};

button.addEventListener("click", onClick);

// - exemplu 2 -
console.log(`- exemplu 2-anulare timer cu clearTimeout(func_name) -`);

const greet = () => {
  console.log("Hello!");
};

const timerId0 = setTimeout(greet, 3000);
console.log(`id of the cancelled timer`);
console.log(timerId0);

clearTimeout(timerId0);

// ---   Interval   ---
console.log(`---   Interval   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// ---   Frecvența declanșării contorului   ---
console.log(`---   Frecvența declanșării contorului   ---`);

// -----     Date & time     -----
console.log(`-------       Date & time       -------`);

// ---   Crearea unei date   ---
console.log(`---   Crearea unei date   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-new date()-fara argument -`);

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

try {
  console.log(JSON.parse(date.toString()));
} catch (error) {
  console.log(error.message);
}

// ---   Unix time   ---
console.log(`---   Unix time   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-new date()-cu argument -`);

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// - exemplu 1 -
console.log(`- exemplu 1-new date()-fara argument si cu metoda getTime() -`);

const date1 = new Date();
console.log(date1.getTime()); // 1624021654154

// ---   Setarea unei date   ---
console.log(`---   Setarea unei date   ---`);

// - exemplu 1 -
console.log(
  `- exemplu 1-data setata in viitor fara/cu timp exact si milisecunde pana atunci de la timpul unix -`
);

const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(preciseTeamMeetingDate.getTime());

// - exemplu 2 -
console.log(`- exemplu 2-mai multe expresii de declarare data -`);

console.log(new Date("2030-03-16"));

console.log(new Date("2030-03"));

console.log(new Date("2030"));

console.log(new Date("03/16/2030"));

console.log(new Date("2030/03/16"));

console.log(new Date("2030/3/16"));

console.log(new Date("March 16, 2030"));

console.log(new Date("March 16, 2030 14:25:00"));

console.log(new Date("2030-03-16 14:25:00"));

const testDate = new Date("2030-03-16T14:25:00");
console.log(testDate);

console.log(new Date("16 March 2030"));

// - exemplu 3 -
console.log(`- exemplu 3-șapte numere
      care descriu anul, luna (începând cu 0), ziua, ora, minutul, secunda și
      milisecunda -`);

const date2 = new Date(2030, 0, 16, 14, 25, 0, 0);
console.log(date2);
// Sat Jan 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

const date3 = new Date(2025, 5, 15);
console.log(date3);

console.log(new Date("2025-06-15T04:15:00"));

// ---   Metode   ---
console.log(`---   Metode   ---`);

// --  Getter  --
console.log(`--  Getter  --`);

// - exemplu 1 -
console.log(`- exemplu 1-ora n -`);

const date4 = new Date();

console.log(`date //returneaza data completa`);
console.log("Date: ", date4);

console.log(`// Returnează ziua dintr-o lună de la 1 la 31`);
console.log("getDate(): ", date4.getDate());

console.log(`// Returnează ziua săptămânii de la 0 la 6 (0 = Duminica)
`);
console.log("getDay(): ", date4.getDay());

console.log(`// Returnează luna de la 0 la 11
`);
console.log("getMonth(): ", date4.getMonth());

console.log(`// Returnează un an format din 4 cifre
`);
console.log("getFullYear(): ", date4.getFullYear());

console.log(`// Returnează ora
`);
console.log("getHours(): ", date4.getHours());

console.log(`// Returnează minutele
`);
console.log("getMinutes(): ", date4.getMinutes());

console.log(`// Returnează secundele
`);
console.log("getSeconds(): ", date4.getSeconds());

console.log(`// Returnează milisecundele
`);
console.log("getMilliseconds(): ", date4.getMilliseconds());

// - exemplu 2 -
console.log(`- exemplu 2-ora UTC (Coordinated Universal Time) -`);

//  Returnează ziua dintr-o lună de la 1 la 31
console.log("getUTCDate(): ", date4.getUTCDate());

// Returnează ziua săptămânii de la 0 la 6
console.log("getUTCDay(): ", date4.getUTCDay());

// Returnează luna de la 0 la 11
console.log("getUTCMonth(): ", date4.getUTCMonth());

// Returnează un an format din 4 cifre
console.log("getUTCFullYear(): ", date4.getUTCFullYear());

// Returnează ora
console.log("getUTCHours(): ", date4.getUTCHours());

// Returnează minutele
console.log("getUTCMinutes(): ", date4.getUTCMinutes());

// Returnează secundele
console.log("getUTCSeconds(): ", date4.getUTCSeconds());

// Returnează milisecundele
console.log("getUTCMilliseconds(): ", date4.getUTCMilliseconds());

// --  Setter  --
console.log(`--  Setter  --`);

// - exemplu 1 -
console.log(`- exemplu 1-setMinutes(),date5.setFullYear(year, month, day)  -`);

const date5 = new Date("March 16, 2030 14:25:00");
console.log(date5);

date5.setMinutes(50);
console.log(date5);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date5.setFullYear(2040, 4, 8);
console.log(date5);
// "Tue May 08 2040 14:50:00 GMT+0300"

// ---   Formatarea datei   ---
console.log(`---   Formatarea datei   ---`);

const date5Tostring = date5.toString();
console.log("date5.toString() :", date5Tostring);

console.log(`date5.toDateString() :`, date5.toDateString());
console.log(`date5.toTimeString() :`, date5.toTimeString());

console.log(`date5.toLocaleTimeString() :`, date5.toLocaleTimeString());
// "2:25:00 PM"

console.log(`   date5.toUTCString():`, date5.toUTCString());
// "Sat, 16 Mar 2030 12:25:00 GMT"

console.log(`date5.toISOString() :`, date5.toISOString());
// "2030-03-16T12:25:00.000Z"

console.log(`date5.toLocaleString() :`, date5.toLocaleString());
// "3/16/2030, 2:25:00 PM"

console.log(`date5.getTime() :`, date5.getTime());
// 1899894300000

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

// ------     Exercitii tema     ------
console.log(`---------        Exercitii autoverificare 3        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1 -`);
