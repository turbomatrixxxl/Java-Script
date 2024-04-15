// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Events     -----
console.log(`-------       Events       -------`);

// ---   Metoda addEventListener()   ---
console.log(`---   Metoda addEventListener()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 (functia callback inclusa in addEventListener) -`);

const button = document.querySelector(".my-button");
button.style.cssText = `color: red;`;
button.style.padding = "10px";
button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

button.addEventListener("click", () => {
  console.log("Button was clicked");
});

// - exemplu 2 -
console.log(`- exemplu 2 (functia callback "handleClick" declarata separat) -`);

const button0 = document.querySelector("#my-button");
button0.style.padding = "12px";
button0.style.backgroundColor = "orange";
button0.style.fontSize = "24px";
button0.style.marginLeft = "auto";
button0.style.color = "blue";
button0.style.textAlign = "center";

const handleClick = () => {
  console.log("Click me more");
};

button0.addEventListener("click", handleClick);

// - exemplu 3 -
console.log(
  `- exemplu 3 (functii callback "handleClick" multiple incluse in addEventListener) -`
);

const singleBtn = document.querySelector("#single");
singleBtn.style.padding = "10px";
singleBtn.style.backgroundColor = "teal";
singleBtn.style.fontSize = "24px";
singleBtn.style.textAlign = "center";

const handleClick0 = () => {
  console.log("Click single callback");
};

singleBtn.addEventListener("click", handleClick0);

// ===============================================
const multiBtn = document.querySelector("#multiple");
multiBtn.style.padding = "12px";
multiBtn.style.backgroundColor = "orange";
multiBtn.style.fontSize = "30px";
multiBtn.style.marginLeft = "auto";
multiBtn.style.color = "blue";
multiBtn.style.textAlign = "center";

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

// ---   Metoda removeEventListener()   ---
console.log(`---   Metoda removeEventListener()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const addListenerBtn = document.querySelector(".js-add");
addListenerBtn.style.padding = "10px";
addListenerBtn.style.backgroundColor = "aquamarine";
addListenerBtn.style.fontSize = "24px";
addListenerBtn.style.textAlign = "center";

const removeListenerBtn = document.querySelector(".js-remove");
removeListenerBtn.style.padding = "10px";
removeListenerBtn.style.backgroundColor = "teal";
removeListenerBtn.style.fontSize = "24px";
removeListenerBtn.style.textAlign = "center";

const btn = document.querySelector(".target-btn");
btn.style.padding = "10px";
btn.style.backgroundColor = "orange";
btn.style.fontSize = "24px";
btn.style.textAlign = "center";

const handleClick1 = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick1);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick1);
  console.log("click event listener was removed from btn");
});

// ---   Keyword-ul this   ---
console.log(`---   Keyword-ul this   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn0 = document.querySelector(".js-btn");
btn0.style.padding = "12px";
btn0.style.backgroundColor = "orange";
btn0.style.fontSize = "30px";
btn0.style.marginLeft = "auto";
btn0.style.color = "blue";
btn0.style.textAlign = "center";

// ✅ Funcționează
mango.showUsername();

// ❌ this se va referi la button, dacă showUsername este folosit ca callback
btn0.addEventListener("click", mango.showUsername); // nu funcționează

// ✅ Să nu uităm să legăm contextul metodelor obiectului
btn0.addEventListener("click", mango.showUsername.bind(mango));

// -----     Event object     -----
console.log(`-------       Event object       -------`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const button1 = document.querySelector(".btn1");
button1.style.padding = "12px";
button1.style.backgroundColor = "brown";
button1.style.fontSize = "24px";
button1.style.marginLeft = "100px";
button1.style.color = "black";
button1.style.textAlign = "center";

const handleClick2 = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button1.addEventListener("click", handleClick2);

// ---   Acțiuni implicite ale browserului   ---
console.log(`---   Acțiuni implicite ale browserului   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const form2 = document.querySelector(".register-form");
console.log(form2);

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
  form2.reset();
});

// -----     Keyboard event     -----
console.log(`-------       Keyboard event       -------`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const key = document.querySelector("#key");
key.style.padding = "12px";
key.style.backgroundColor = "yellowgreen";
key.style.fontSize = "24px";
key.style.marginLeft = "100px";
key.style.color = "blue";
key.style.textAlign = "center";
key.style.textWrap = "wrap";

key.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});

key.addEventListener("keyup", (event) => {
  console.log("Keyup: ", event);
});

// ---   Proprietatea key și code   ---
console.log(`---   Proprietatea key și code   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const type = document.querySelector("#type");
type.style.padding = "12px";
type.style.backgroundColor = "green";
type.style.fontSize = "24px";
type.style.marginLeft = "100px";
type.style.color = "red";
type.style.textWrap = "wrap";
type.style.textAlign = "center";

type.addEventListener("keyup", (event) => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const pad = document.querySelector(".pad");
pad.style.marginBottom = "10px";
pad.style.width = "100%";

const inp = document.querySelector(".inp");
inp.style.width = "100%";

const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

console.log(clearLogBtn);

inp.addEventListener("keydown", logMessage);
inp.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  if (keypressCounter <= 5) {
    logList.insertAdjacentHTML("afterbegin", markup);

    if (type === "keyup") {
      incrementKeypressCounter();
    }
  }
  if (keypressCounter > 5) {
    return console.log(
      `Numbers of tryout is ${
        keypressCounter - 1
      } ! You reached maximum output please press "Clear output" button`
    );
  }
  return;
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
  pad.reset();
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}

// ---   Taste modificatoare   ---
console.log(`---   Taste modificatoare   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const but = document.querySelector(".but");
but.style.padding = "12px";
but.style.backgroundColor = "yellow";
but.style.fontSize = "24px";
but.style.marginLeft = "100px";
but.style.color = "red";
but.style.textWrap = "wrap";
but.style.textAlign = "center";

but.addEventListener("keydown", (event) => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
});

// -----     Form events     -----
console.log(`-------       Form events       -------`);

// ---   Evenimentul de submit   ---
console.log(`---   Evenimentul de submit   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const registerForm = document.querySelector(".form0");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login0.value;
  const password = form.elements.password0.value;

  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

// ---   Evenimentul de change   ---
console.log(`---   Evenimentul de change   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  console.log(selectedOptionValue);

  const selectedOptionIndex = event.currentTarget.selectedIndex;
  console.log(selectedOptionIndex);

  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;
  console.log(selectedOptionText);

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

// ---   Evenimentul de input   ---
console.log(`---   Evenimentul de input   ---`);

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

// ---   Evenimentul de focus și blur   ---
console.log(`---   Evenimentul de focus și blur   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);
const div9 = document.querySelector(".div9");

const textInput4 = document.querySelector(".text-input4");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput4.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput4.blur();
});

textInput4.addEventListener("focus", () => {
  textInput4.setAttribute("placeholder", "This input has focus");
});

textInput4.addEventListener("blur", () => {
  textInput4.setAttribute("placeholder", "This input has no focus");
});

// - exemplu 2 -
console.log(`- exemplu 2 -`);
console.log(`document.activeElement`);

const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);

function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.innerHTML = activeTextarea.id;
  outputText.innerHTML = selection;
}

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

console.log("---------------- event listener -------------");

const mybutton = document.querySelector("#mybutton");
mybutton.style.padding = "20px";
mybutton.style.fontSize = "20px";

function onMyButtonClick() {
  console.log("Hello world!");
}

function onMyButtonClick2(event) {
  console.log(event);
  console.log("Hi there!");
}

mybutton.addEventListener("click", onMyButtonClick);
mybutton.addEventListener("click", onMyButtonClick2);

mybutton.removeEventListener("click", onMyButtonClick);

const obj = {
  counter: 0,
  increment() {
    console.log(this);
    this.counter += 1;
  },
};

mybutton.addEventListener("click", obj.increment);

mybutton.addEventListener("click", obj.increment.bind(obj));

console.log("----------------mouse events -------------------");

const mydiv = document.querySelector("#mydiv");
mydiv.style.maxHeight = "100px";
mydiv.style.display = "flex";
mydiv.style.justifyContent = "center";
mydiv.style.marginBottom = "20px";

mydiv.addEventListener("click", () => {
  console.log("click on document");
});

mydiv.addEventListener("mousedown", () => {
  console.log("mouse down on document");
});

mydiv.addEventListener("mouseup", () => {
  console.log("mouse up on document");
});

mydiv.addEventListener("mousemove", () => {
  console.log("mouse move on document");
});

mybutton.addEventListener("mouseenter", () => {
  mybutton.style.backgroundColor = "red";
  console.log("mouse enter button");
});

mybutton.addEventListener("mouseleave", () => {
  mybutton.style.backgroundColor = "yellow";

  console.log("mouse leave button");
});

mybutton.addEventListener("mouseover", () => console.log("mouse over button"));

console.log("----------------keyboard events------------------------------");

mydiv.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "KeyS" && (event.ctrlKey || event.metaKey)) {
    console.log("s");
  }
  console.log(event.altKey);
  console.log(event.shiftKey);
});

console.log(`---  Forms  ---`);
const myform = document.querySelector("#myform");
myform.style.display = "flex";
myform.style.flexDirection = "column";
myform.style.gap = "10px";
myform.style.marginBottom = "20px";

const submitResult = document.createElement(`p`);
const completeWarning = document.createTextNode("Please fill all fields !");
console.log(submitResult);
myform.prepend(submitResult);

myform.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const login = formElements.login1.value;
  const password = formElements.password1.value;

  if (login === "" || password === "") {
    submitResult.appendChild(completeWarning);
    return console.log(`Please fill all fields !`);
  }

  submitResult.textContent = `login: ${login}; password: ${password} `;
  console.log(submitResult);
  console.log("login:", login);
  console.log("password:", password);

  event.target.reset();
});

const loginInput = myform.querySelector('[name="login1"]');

loginInput.addEventListener("input", (event) => {
  console.log("input", event.target.value);
});

loginInput.addEventListener("change", (event) => {
  console.log("change", event.target.value);
});

const selectInput = myform.querySelector("#myselect");

const myspan = document.querySelector(".myspan");

selectInput.addEventListener("change", (event) => {
  const selectedIndex = event.currentTarget.selectedIndex;
  const selectedText = event.currentTarget.options[selectedIndex].text;

  console.log(myspan);

  //   const node = document.createTextNode(selectedText);

  //   myspan.appendChild(node);

  myspan.innerHTML = `${selectedText}`;

  console.log(selectedText);

  console.log(event.target.value);

  console.log(event.target.selectedIndex);
});

loginInput.addEventListener("focus", () => {
  console.log("focus");
});

loginInput.addEventListener("blur", () => {
  console.log("blur");
});

const mydiv0 = document.querySelector("#div0");

mydiv0.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
