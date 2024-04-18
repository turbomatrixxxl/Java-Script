// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Node.js     -----
console.log(`-------       Node.js       -------`);

// ---   Instalare   ---
console.log(`---   Instalare   ---`);

// ---   JavaScript în afara browserului   ---
console.log(`---   JavaScript în afara browserului   ---`);

// -----     Node Package Manager     -----
console.log(`-------       Node Package Manager       -------`);

// ---   Comanda NPM   ---
console.log(`---   Comanda NPM   ---`);

// ---   Inițializarea unui proiect   ---
console.log(`---   Inițializarea unui proiect   ---`);

// ---   Scripturi npm   ---
console.log(`---   Scripturi npm   ---`);

// ---   Instalarea pachetelor   ---
console.log(`---   Instalarea pachetelor   ---`);

// ---   Ștergerea pachetelor   ---
console.log(`---   Ștergerea pachetelor   ---`);

// ---   Instalarea unei versiuni specifice a unui pachet   ---
console.log(`---   Instalarea unei versiuni specifice a unui pachet   ---`);

// ---   Tipuri de dependințe   ---
console.log(`---   Tipuri de dependințe   ---`);

// ---   Package versioning   ---
console.log(`---   Package versioning   ---`);

// ---   Cache management   ---
console.log(`---   Cache management   ---`);

// -----     Code Modularity     -----
console.log(`-------       Code Modularity       -------`);

// ---   Module bundling   ---
console.log(`---   Module bundling   ---`);

// ---   ECMAScript Modules (ESM)   ---
console.log(`---   ECMAScript Modules (ESM)   ---`);

// ---   Named export   ---
console.log(`---   Named export   ---`);

// ---   Default export   ---
console.log(`---   Default export   ---`);

// -----     Introducere în Webpack     -----
console.log(`-------       Introducere în Webpack       -------`);

// ---   Principiul de lucru   ---
console.log(`---   Principiul de lucru   ---`);

// ---   Configurare   ---
console.log(`---   Configurare   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// import { validator } from "module";
// // const validator = require("validator");
// console.log(validator.isEmail("tre4511111@dfhdh.com"));
// console.log(validator.isEmail("tre"));
// console.log(validator.isEmail("tre4511111@dfhdh.com111"));
// console.log(validator.isEmail("tre4511111@dfhdh"));

// ---   Import-export js   ---
console.log(`---   Import-export js   ---`);

console.log(`-import functii si constante mai multe simplu {}-`);

import { logSomething, logSomething0, RADU_NAME } from "./test.js";
logSomething();
logSomething0();
console.log(RADU_NAME);

console.log(`-import functie simplu-`);

import { mainFunction } from "./test.js";
mainFunction();

console.log(`-- import functie cu sintagma "default" adica fara {} --`);

import secondFunction from "./test.js";
secondFunction();

console.log(
  `-- import total cu declarare specifica a constantei  ca la obiect cu sintagma "."--`
);

import * as test from "./total-test.js";
console.log(test.square(11)); // 121
console.log(test.diag(4, 3)); // 5

console.log(`-- import total compilat intr-o expresie"--`);

import birthDate, { doMe, age, weight } from "./compiled.js";
doMe();
console.log(age);
console.log(weight);
birthDate();

// const validator = require("validator");

// console.log(validator.isEmail("cristi@marius.com"));

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
