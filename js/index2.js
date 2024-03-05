// ------     Conspect      ------
console.log(`------     Conspect      ------`);

// ----    if    ----
console.log(`----    if    ----`);

let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100

// ori

let costs = 0;

const subscriptions = "free";

if (subscriptions === "pro") {
  cost = 100;
}

console.log(costs); // 0

// ----    if...else    ----
console.log(`----    if...else    ----`);

let cost1;
const subscription1 = "free";

if (subscription1 === "pro") {
  cost1 = 100;
} else {
  cost1 = 0;
}

console.log(cost1); // 0

let costs1;
const subscriptions1 = "pro";

if (subscriptions1 === "pro") {
  costs1 = 100;
} else {
  cost = 0;
}

console.log(costs1); // 100

// ----    else...if    ----
console.log(`----    else...if    ----`);

let cost2;
const subscription2 = "premium";

if (subscription2 === "free") {
  cost2 = 0;
} else if (subscription2 === "pro") {
  cost2 = 100;
} else if (subscription2 === "premium") {
  cost2 = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost2); // 500

// ----    Operatorul ternar (ternary operator)    ----
console.log(`----    Operatorul ternar (ternary operator)    ----`);

console.log(`----    exemplu 1    ----`);
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

// ori :

const ages = 17;
const types = ages >= 18 ? "adult" : "child";
console.log(types); // "adult"

console.log(`----    exemplu 2    ----`);
const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

// ori

const nums1 = 8;
const nums2 = 11;
const biggerNumbers = nums1 > nums2 ? nums1 : nums2;

console.log(biggerNumbers); // 10

// ----    Instrucțiunea condițională switch    ----
console.log(`----    Instrucțiunea condițională switch    ----`);

let cost3;
const subscription3 = "premium";

switch (subscription3) {
  case "free":
    cost3 = 0;
    break;

  case "pro":
    cost3 = 100;
    break;

  case "premium":
    cost3 = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost3); // 500

// ----   Scope    ----
console.log(`----   Scope    ----`);

console.log(`--  exemplu 1  --`);
console.log(`--  variabila in afara declaratiei if  --`);
const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5

console.log(`--  variabila inauntrul declaratiei if  --`);
console.log(`--  exemplu 1  --`);

if (true) {
  let values = 5;
  console.log("Block scopes: ", values); // 5
}

let values = 4;
console.log("Global scopes: ", values); // 4

console.log(`--  exemplu 2 :declarare cu "var"  --`);

if (true) {
  var val = 2;
  let values = 5;
  console.log("Block scopes: ", values); // 5
}

console.log("Global scopes: ", val); // 2

console.log(`--  exemplu 3  --`);
const global = "global";

if (true) {
  const blockA = "block A";

  // Avem acces la scope-ul global + local A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Variabilele blockB și blockC nu au fost găsite în scope-ul disponibil.
  // Va apărea o eroare la accesarea variabilelor.
  //   console.log(blockB); // ReferenceError: blockB is not defined
  //   console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // Avem acces la scope-ul global + exterior local A + local B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Variabilele blockB n-a fost găsită în scope-ul disponibil.
    // Va apărea o eroare la accesarea variabilei.
    // console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // Avem acces la scope-ul global + local C
  console.log(global); // global
  console.log(blockC); // block C

  // Variabilele blockA și blockB nu au fost găsite în scope-ul disponibil.
  // Va apărea o eroare la accesarea variabilei.
  //   console.log(blockA); // ReferenceError: blockA is not defined
  //   console.log(blockB); // ReferenceError: blockB is not defined
}

// Avem acces doar la scope-ul global
console.log(global); // global

// Variabilele blockA, blockB și blockC nu au fost găsite în scope-ul disponibil.
// Va apărea o eroare la accesarea variabilei.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// ----    Iterații    ----
console.log(`----    Iterații    ----`);

// --  while  --
console.log(`---  while  ---`);

console.log(`--  exemplu 1 : counter  --`);
let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

console.log(
  `--  exemplu 2 : numărul de clienți este egal cu cel maxim admis  --`
);
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// ----    Ciclul do...while    ----
console.log(`----    Ciclul do...while    ----`);

let password = "";

do {
  password = prompt(
    "Vă rugăm să introduceți o parolă de cel puțin 4 caractere",
    ""
  );
} while (password.length < 4);

console.log("Parola introdusă: ", password);

// ----    Ciclul for    ----
console.log(`----    Ciclul for    ----`);

console.log(`--  exemplu 1 : Variabilele de contor sunt denumite de obicei i, j și k.
`);
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

console.log(
  `--  exemplu 1 : Să calculăm suma numerelor până la o anumită valoare.`
);
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum = i + target;
}

console.log(sum);

console.log(
  `--  exemplu 1 : Să ne reamintim operația a % b și să scoatem restul împărțirii, folosind o buclă.`
);
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// ----    Operatorul break    ----
console.log(`----    Operatorul break    ----`);

console.log(`--  Să căutăm numărul 3. De îndată ce condiția if este îndeplinită, execuția buclei va fi întreruptă.
  --`);
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Am găsit numărul 3, întrerupem bucla");
    break;
  }
}

console.log("Log după buclă");

// ----    Operatorul continue    ----
console.log(`----    Operatorul continue    ----`);

console.log(`--  exemplu numere impare  --!`);
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Numărul impar i: ", i); // 1, 3, 5, 7, 9
}

// ------     Cristi Socaci      ------
console.log(`------     Cristi Socaci      ------`);

// ---   switch   ---
console.log(`---   switch   ---`);

const subscription4 = "platinum";
let bonus;

switch (subscription4) {
  case `regular`:
    bonus = 0;
    break;
  case `silver`:
    bonus = 10;
    break;
  case `gold`:
    bonus = 100;
    break;
  case "platinum":
  case `platinumPlus`:
  case `diamond`:
    bonus = 1000;
    break;
  default:
    bonus = `none`;
}
console.log(`Bonus is :`, bonus);
console.log(`Bonus is : ${bonus}`);
