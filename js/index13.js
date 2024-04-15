// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Event propagation     -----
console.log(`-------       Event propagation       -------`);

// -----     Event Bubbling     -----
console.log(`-------       Event Bubbling       -------`);

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  console.log("Parent click handler");
});

child.addEventListener("click", () => {
  console.log("Child click handler");
});

descendant.addEventListener("click", () => {
  console.log("Descendant click handler");
});

// ---   Proprietatea event.target   ---
console.log(`---   Proprietatea event.target   ---`);

const parent0 = document.querySelector("#parent0");

parent0.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});

// ---   Încetarea fazei de bubbling   ---
console.log(`---   Încetarea fazei de bubbling   ---`);

const parent1 = document.querySelector("#parent1");
const child1 = document.querySelector("#child1");
const descendant1 = document.querySelector("#descendant1");

parent1.addEventListener("click", () => {
  alert(
    "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

child1.addEventListener("click", () => {
  alert(
    "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

descendant1.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Descendant click handler");
});

// -----     Event delegation     -----
console.log(`-------       Event delegation       -------`);

// ---   Paleta de culori   ---
console.log(`---   Paleta de culori   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

const div = document.getElementById("mydiv");
const button = document.getElementById("mybutton");

div.addEventListener("click", (event) => {
  console.log("div currentTarget", event.currentTarget);
  console.log("div target", event.target);
  console.log("div");
});

button.addEventListener("dblclick", (e) => {
  console.log("double click");
});

button.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Click right on the mouse = context menu");
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button1 currentTarget", event.currentTarget);
  console.log("button1 target", event.target);
  console.log("button1");
});

button.addEventListener("click", (event) => {
  console.log("button2 currentTarget", event.currentTarget);
  console.log("button2 target", event.target);
  console.log("button2");
});

// -----  exercitiu 1 Color Palette  ----
console.log("-----  exercitiu 1 Color Palette  ----");

const colorPalette0 = document.querySelector(".criscolor-palette");
const colorOutput = document.querySelector("#color-output");

const onClick = (e) => {
  if (!e.target.hasAttribute("data-color")) {
    return;
  }
  colorOutput.textContent = "Selected color: " + e.target.dataset.color;
  colorOutput.style.color = e.target.dataset.color;
};

colorPalette0.addEventListener("click", onClick);

const colorElems = [];
for (let i = 0; i < 60; i++) {
  const color = document.createElement("button");
  color.classList.add("color-elem");

  const hexColor = generateHexColor();
  //   color.setAttribute("data-color", hexColor);
  color.dataset.color = hexColor;
  color.style.backgroundColor = hexColor;
  colorElems.push(color);
}

colorPalette0.append(...colorElems);

function generateHexColor() {
  const hexChars = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randIndex = Math.round(Math.random() * 15);

    color += hexChars[randIndex];
  }

  return color;
}

// -----  exercitiu 2 My Color Palette  ----
console.log("-----  exercitiu 2 My Color Palette  ----");

const myOutput = document.querySelector(".myoutput");
const mySpan = document.querySelector("#myspan");
const myColorPalette = document.querySelector(".mycolor-palette");
const colors = [];

for (let index = 0; index < 60; index++) {
  const btn = `<button class="mybtn">asd</button>`;

  colors.push(btn);
}
colors.map((color) => {
  myColorPalette.innerHTML += color;
});

const myGetRandomHexColor = () => {
  let hexaLetters = "012345679ABCDEF";
  let randomColor = "#";

  for (let index = 0; index < 6; index++) {
    const randomIndex = Math.floor(Math.random() * 15);
    randomColor += hexaLetters[randomIndex];
  }
  console.log(randomColor);

  return randomColor;
};

const myButton = myColorPalette.querySelectorAll(".mybtn");
myButton.forEach((but) => {
  const btnBgColor = myGetRandomHexColor();
  but.style.backgroundColor = btnBgColor;
  // alternativa la setAttribute !!!
  but.dataset.color = btnBgColor;
  //   but.setAttribute("data-color", `${btnBgColor}`);
  but.textContent = btnBgColor;
});

function onMyButtonClick(event) {
  if (!event.target.hasAttribute("data-color")) {
    return;
  }
  mySpan.textContent = event.target.textContent;
  myOutput.style.backgroundColor = event.target.textContent;

  console.log(event.target.dataset.color);
  console.log(event.target);
}

myColorPalette.addEventListener("click", onMyButtonClick);

// -----  exercitiu 3 task 10 tema 1 js  ----
console.log("-----  exercitiu 3 task 10 tema 1 js  ----");

const boxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("#control-input");
const errorMessage = document.querySelector("#error-message");

createButton.addEventListener("click", (e) => {
  const amount = input.value;
  if (!amount) {
    return;
  }

  if (amount <= 0 || amount > 100) {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Amount must be between 1 and 100";
    input.value = "";

    return;
  }

  input.value = "";

  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
  errorMessage.style.color = "";
  errorMessage.textContent = "";
}

function createBoxes(amount) {
  let dimensions = 30;

  const boxElems = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${dimensions}px`;
    box.style.height = `${dimensions}px`;
    box.style.backgroundColor = getRandomHexColor();
    dimensions += 10;
    boxElems.push(box);
    console.log(box);
    console.log(boxElems);
  }

  destroyBoxes();
  boxes.append(...boxElems);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
