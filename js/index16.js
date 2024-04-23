// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     JSON format     -----
console.log(`-------       JSON format       -------`);

// ---   Metoda JSON.stringify()   ---
console.log(`---   Metoda JSON.stringify()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-obiect => JSON -`);

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// - exemplu 2 -
console.log(`- exemplu 2-cu metoda inclusa in obiect(nu apare metoda) -`);

const dog0 = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

const dogJSON0 = JSON.stringify(dog0);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

dog0.bark();

// - exemplu 3 -
console.log(`- exemplu 3-functie => JSON(nu functioneaza) -`);

const logWell = () => console.log("Well, this is awkward");

const funcJSON = JSON.stringify(logWell); // undefined

console.log(funcJSON);

// ---   Metoda JSON.parse()   ---
console.log(`---   Metoda JSON.parse()   ---`);

const json = '{"name":"Mango","age":3,"isHappy":true}';

const dog1 = JSON.parse(json);
console.log(dog1); // {name: "Mango", age: 3, isHappy: true}
console.log(dog1.name); // "Mango"

// ---   Prelucrarea erorilor   ---
console.log(`---   Prelucrarea erorilor   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-parse incorect blocheaza scriptul -`);

// Script will crash during parse
// const data = JSON.parse("Well, this is awkward");
console.log("❌ You won't see this log");

// - exemplu 2 -
console.log(`- exemplu 2-try...catch rezolva problema -`);

try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error);
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parse error in try...catch");

// - exemplu 3 -
console.log(`- exemplu 3-try...catch rezolva problema -`);

try {
  const data = JSON.parse('{username: "Mango"}');
} catch (error) {
  console.log(error);
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Unexpected token u in JSON at position 1"
}

console.log("✅ This is fine, we handled parse error in try...catch");

// ---   Etapele de execuție a codului   ---
console.log(`---   Etapele de execuție a codului   ---`);

// -----     Web Storage     -----
console.log(`-------       Web Storage       -------`);

// ---   Web Storage API   ---
console.log(`---   Web Storage API
   ---`);

// ---   Local storage   ---
console.log(`---   Local storage   ---`);

// --  Salvarea datelor  --
console.log(` --  Salvarea datelor  --`);

// - exemplu 1 -
console.log(
  `- exemplu 1-schimbari  localStorage una cate una cu localStorage.setItem("key", "value")-`
);

localStorage.setItem("ui-theme", "dark");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");

const notifLevel = localStorage.getItem("notification-level");
console.log(notifLevel);

const sidebar = localStorage.getItem("sidebar");
console.log(sidebar);

const theme = localStorage.getItem("ui-theme");
console.log(theme);

console.log(localStorage);
// localStorage.clear();

// - exemplu 2 -
console.log(`- exemplu 2-schimbari  localStorage prin implementare obiect-`);

const settings = {
  theme: "light",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

console.log(localStorage);

// --  Citirea datelor  --
console.log(` --  Citirea datelor  --`);

// - exemplu 1 -
console.log(
  `- exemplu 1-parsare obiect localStorage pentru obtinere date stocate cu try..catch pentru prevenirea erorilor-`
);

const localItems = localStorage.getItem("settings");
console.log(localItems);

try {
  const localItemsParsed = JSON.parse(localItems);
} catch (error) {
  console.log(error);
}

const localItemsParsed = JSON.parse(localItems);
console.log(localItemsParsed);

console.log(localItemsParsed.theme);

// --  Ștergerea datelor  --
console.log(` --  Ștergerea datelor  --`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

localStorage.removeItem("settings");
console.log(localStorage);
console.log(localStorage.getItem("settings"));

// --  Curățarea storage-ului  --
console.log(` --  Curățarea storage-ului  --`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");
console.log(localStorage.getItem("ui-theme")); // "light"
console.log(localStorage.getItem("sidebar")); // "expanded"
console.log(localStorage.getItem("notification-level")); // "mute"

console.log(localStorage);

localStorage.removeItem("sidebar");
localStorage.removeItem("notification-level");

console.log(localStorage.getItem("ui-theme")); // null
console.log(localStorage.getItem("sidebar")); // null
console.log(localStorage.getItem("notification-level")); // null

console.log(localStorage);

// ---   Salvarea unui mesaj   ---
console.log(`---   Salvarea unui mesaj   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

console.log(form.elements.message.value);

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
  console.log(localStorage);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
  console.log(localStorage);
});

// ---   Service pentru localStorage   ---
console.log(`---   Service pentru localStorage   ---`);

// - exemplu 1 -
console.log(
  `- exemplu 1-functii cu try...catch pentru "save", "load" si "remove" -`
);

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const remove = (key) => {
  try {
    const serializedState = localStorage.removeItem(key);
    return serializedState === null
      ? undefined
      : JSON.stringify(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

save("ui-theme", "light");
console.log(localStorage);

const ui = load("ui-theme");
console.log(ui);

remove("ui-theme");
console.log(localStorage);

// export default {
//   save,
//   load,
// };

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const myForm = document.querySelector(".my-feedback-form");
const myLocalStorageKey = "goit0-example-message";

console.log(myForm.elements.message);
myForm.elements.message.value = localStorage.getItem(myLocalStorageKey) ?? "";

myForm.addEventListener("input", (evt) => {
  console.log(evt.target.value);
  localStorage.setItem(myLocalStorageKey, evt.target.value);
});

myForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(myLocalStorageKey);
  myForm.reset();
});

// - exemplu 2 -
console.log(`- exemplu 2-Web Storage -`);

const input = document.getElementById("input");
const button = document.getElementById("submit");
const show = document.getElementById("show");
const deletee = document.getElementById("delete");

const SAVED_VALUE_KEY = "savedValue";

button.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem(SAVED_VALUE_KEY, input.value);
});

show.addEventListener("click", () => {
  const savedValue = localStorage.getItem(SAVED_VALUE_KEY);
  console.log(savedValue);
});

deletee.addEventListener("click", () => {
  localStorage.removeItem(SAVED_VALUE_KEY);
});

console.log(localStorage.length);

// localStorage.clear();

const user = {
  name: "cristi",
  secondName: "marius",
  age: 25,
};

const userJson = JSON.stringify(user);

const USER_KEY = "user";

localStorage.setItem(USER_KEY, userJson);

const userFromLocalstorage = localStorage.getItem(USER_KEY);
console.log(userFromLocalstorage);

const userFromLocalstorageParsed = JSON.parse(userFromLocalstorage);
console.log(userFromLocalstorageParsed);
