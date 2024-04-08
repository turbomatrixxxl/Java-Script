// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Document Object Model     -----
console.log(`-------       Document Object Model       -------`);

// ---   HTML-document și DOM   ---
console.log(`---   HTML-document și DOM   ---`);

// ---   DOM-tree   ---
console.log(`---   DOM-tree   ---`);

// -----     Navigarea prin DOM     -----
console.log(`-------       Navigarea prin DOM       -------`);

console.log(`-Exemplul 1-`);

console.log(`document`);
console.log(document);

console.log(`document.body`);
const body = document.body;
console.log(body);

console.log(`ul cu clasa "list"`);
const list = document.querySelector(".list");
list.style.color = "green";
console.log(list);

console.log(`parentNode`);
console.log(list.parentNode);

console.log(`childNodes`);
console.log(list.childNodes);

console.log(`firstChild`);
console.log(list.firstChild);

console.log(`lastChild`);
console.log(list.lastChild);

console.log(`children`);
const listItems = list.children;
console.log(listItems);

console.log(`previousSibling`);
console.log(list.previousSibling);

console.log(`nextSibling`);
console.log(list.nextSibling);

console.log(`firstElementChild`);
const firstListItem = list.firstElementChild;
firstListItem.style.color = "violet";
console.log(firstListItem);

console.log(`lastElementChild`);
const lastListItem = list.lastElementChild;
console.log(lastListItem);

console.log(`previousElementSibling`);
console.log(list.lastElementChild.previousElementSibling);

console.log(`nextElementSibling`);
list.firstElementChild.nextElementSibling.style.backgroundColor = "greenyellow";
console.log(list.firstElementChild.nextElementSibling);

// -----     Localizarea elementelor     -----
console.log(`-------       Localizarea elementelor       -------`);

console.log(`-Exemplul 1-`);

const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log(listWithId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("ul");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
firstMenuItem.style.backgroundColor = "aquamarine";

console.log(firstMenuItem);
console.log(firstMenuItem.textContent);

const allList = document.querySelector(".menu");
console.log(allList);
allList.style.color = "blue";
allList.style.backgroundColor = "yellow";
console.log(allList.textContent);

// -----     Proprietăți și atribute     -----
console.log(`-------       Proprietăți și atribute       -------`);

console.log(`-Exemplul 1-`);

const image = document.querySelector(".image");
console.log(image);
console.log(image.src); // https://picsum.photos/id/9/320/240
console.log(image.alt); // A laptop

image.src = "https://picsum.photos/id/13/640/480";
image.alt = "River bank";
image.height = "400";

console.log(image);
console.log(image.src);
console.log(image.alt);
console.log(image.height);

// ---   Proprietatea textContent   ---
console.log(`---   Proprietatea textContent   ---`);

console.log(`-Exemplul 1-`);

const textEl = document.querySelector(".article-text");
textEl.textContent = "ciuciu de 1 aprilie ! :)))";
console.log(textEl.textContent); // text inside p.article-text

const titleEl = document.querySelector(".article-title");
titleEl.textContent = "Welcome to Bahamas!";

// ---   Proprietatea classList   ---
console.log(`---   Proprietatea classList   ---`);

console.log(`-Exemplul 1-`);

const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass = ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList);

// ---   Proprietatea style   ---
console.log(`---   Proprietatea style   ---`);

console.log(`-Exemplul 1-`);

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";
button.style.heigt = "40px";
button.style.weight = "80px";
button.style.padding = "10px";

console.log(button.style); // inline styles object

// ---   Atributele   ---
console.log(`---   Atributele   ---`);

console.log(`-Exemplul 1-`);

const image0 = document.querySelector(".image0");

console.log(image0.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}

console.log(image0.hasAttribute("src")); // true

console.log(image0.getAttribute("alt")); // "Rocks and waterfall"

image0.setAttribute("alt", "Amazing nature");

console.log(image0.getAttribute("alt")); // Amazing nature

image0.height = "400";
image0.setAttribute("height", "500");
console.log(image0.hasAttribute("height"));
console.log(image0.height);
console.log(image0.attributes);

// ---   data attributes   ---
console.log(`---   data attributes   ---`);

console.log(`-Exemplul 1-`);

const saveBtn = document.querySelector('button[data-action="save"]');
saveBtn.style.backgroundColor = "teal";
saveBtn.style.fontSize = "24px";
saveBtn.style.textAlign = "center";
saveBtn.style.heigt = "40px";
saveBtn.style.weight = "80px";
saveBtn.style.padding = "10px";

console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
closeBtn.style.backgroundColor = "red";
closeBtn.style.fontSize = "24px";
closeBtn.style.textAlign = "center";
closeBtn.style.heigt = "40px";
closeBtn.style.weight = "80px";
closeBtn.style.padding = "10px";
closeBtn.style.marginLeft = "100px";

console.log(closeBtn.dataset.action); // "close"

// -----     Crearea și ștergerea elementelor     -----
console.log(`-------       Crearea și ștergerea elementelor       -------`);

// ---   Creare   ---
console.log(`---   Creare   ---`);

console.log(`-Exemplul 1-`);

const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image1 = document.createElement("img");
image1.src = "https://placeimg.com/640/480/nature";
image1.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// ---   Adăugare   ---
console.log(`---   Adăugare   ---`);

console.log(`-Exemplul 1-`);

const list2 = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list2.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list2.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list2.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list2.after(text);

// ---   Eliminare   ---
console.log(`---   Eliminare   ---`);

console.log(`-Exemplul 1-`);

const text0 = document.querySelector(".text0");
text0.remove();

// ---   Optimizarea DOM-ului   ---
console.log(`---   Optimizarea DOM-ului   ---`);

// -----     Proprietatea innerHTML     -----
console.log(`-------       Proprietatea innerHTML       -------`);

// ---   Citirea   ---
console.log(`---   Citirea   ---`);

console.log(`-Exemplul 1-`);

const article1 = document.querySelector(".article1");
console.log(article1.innerHTML);

const title1 = document.querySelector(".article1 .title1");
console.log(title1.innerHTML);

const text1 = document.querySelector(".article1 .text1");
console.log(text1.innerHTML);

const link1 = document.querySelector(".article1 .link1");
console.log(link1.innerHTML);

// ---   Modificarea   ---
console.log(`---   Modificarea   ---`);

console.log(`-Exemplul 1-`);

const title2 = document.querySelector(".article2 .title2");
title2.innerHTML = 'New and <span class="accent">improved</span> title';
console.log(title2);

console.log(`-Exemplul 2-`);

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list3 = document.querySelector(".list3");

const markup = technologies
  .map((technology) => `<li class="list3-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

const link3 = document.createElement("a");
link3.textContent = "More";
link3.href = "";
console.log(link3);
list3.style.marginBottom = " 30px";
list3.after(link3);

// Adding all the markup in one operation
list3.innerHTML = markup;

// ---   Adăugarea   ---
console.log(`---   Adăugarea   ---`);

console.log(`-Exemplul 1-`);

const article3 = document.querySelector(".article3");
const htmlString = `<p class="article3-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link3" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article3.innerHTML += htmlString;
console.log(article3.textContent);
console.log(article3.children);

// ---   Metoda insertAdjacentHTML()   ---
console.log(`---   Metoda insertAdjacentHTML()   ---`);

console.log(`-Exemplul 1-`);

const list4 = document.querySelector(".list4");

const newTechnologies4 = ["React", "TypeScript", "Node.js"];
const markup4 = newTechnologies4
  .map((technology) => `<li class="list4-item new">${technology}</li>`)
  .join("");

list4.insertAdjacentHTML("beforeend", markup4);
list4.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

const lista = document.querySelector("#lista");

console.log("------------------ ierarhia dom -----------------");

console.log(`-children (returneaza doar html = un array cu toti copiii) -`);
console.log(lista.children);

console.log(
  `-childNodes (returneaza si "text" = un array cu "text" si copiii intre "text") -`
);
console.log(lista.childNodes);

console.log(lista.firstElementChild); // lista.children[0]
console.log(lista.lastElementChild); // lista.children[lista.length - 1]

console.log(`-firstChild si lastChild returneaza "text"-`);
console.log(lista.firstChild); // lista.childNodes[0]
console.log(lista.lastChild); // lista.childNodes[lista.length - 1]

console.log(`-firstElementChild si lastElementChild returneaza html-`);
console.log(lista.firstElementChild); //lista.children[0]
console.log(lista.lastElementChild); //lista.children[lista.length - 1]

const secondListItem = lista.children[1];

console.log(`-previousElementSibling si nextElementSibling returneaza html-`);
console.log(secondListItem.previousElementSibling); // lista.children[0]
console.log(secondListItem.nextElementSibling); // lista.children[2]

console.log(`-previousSibling si nextSibling returneaza "text"-`);
console.log(secondListItem.previousSibling); // lista.childNodes[0]
console.log(secondListItem.nextSibling); // lista.childNodes[2]

console.log(`-parentNode returneaza parintele html-`);
console.log(secondListItem.parentNode);

console.log("------------------querySelector-------------------");

const list5 = document.querySelector("#lista");
console.log(list5);

console.log(`metoda 1`);
const listElements = document.querySelectorAll(".list5-item");
console.log(listElements);

console.log(`metoda 2`);
const listElements1 = document.querySelectorAll("#lista li");
console.log(listElements1);

console.log(`metoda 3`);
const listElements2 = document.querySelectorAll("#lista>li");
console.log(listElements2);

console.log(`metoda 4`);
const listElements3 = document.querySelector("#lista").children;
console.log(listElements3);

console.log(
  `-deoarece querySelector  returneaza array => folosim metode array pe el de ex. for(let i...)-`
);
for (let index = 0; index < listElements3.length; index++) {
  console.log(listElements3[index]);
}

console.log(
  `-deoarece querySelector  returneaza array => folosim metode array pe el de ex. forEach-`
);

listElements1.forEach((x) => {
  console.log(x);
});

console.log(
  `-!!! mai exista si functia getElementBy...() getElementBySelection() este important !!!-`
);
console.log(document.getElementById("lista"));

console.log("-------------------textContent----------------");

const firstListElement = list5.firstElementChild;

console.log(firstListElement.textContent);

firstListElement.textContent = "item from js";

console.log("-------------------classList----------------");

console.log(`-classList = clasele-`);
console.log(firstListElement.classList);

console.log(`-classList.contains("") = true/false-`);
console.log(firstListElement.classList.contains("list5-item"));
console.log(firstListElement.classList.contains("item-list"));

console.log(`-classList.add("")-`);
firstListElement.classList.add("list-item-special", "list0");

console.log(firstListElement.classList);

console.log(`-classList.remove("")-`);
firstListElement.classList.remove("list0");
console.log(firstListElement.classList);

console.log(`-classList.replace("")-`);
firstListElement.classList.replace("list5-item", "list1-item-special");
console.log(firstListElement.classList);

console.log(`-classList.toggle("")-part 1 -`);
firstListElement.classList.toggle("list-item-special");
console.log(firstListElement.classList);

console.log(`-classList.toggle("")-part 2 -`);
firstListElement.classList.toggle("list-item-special");
firstListElement.classList.toggle("list1-item-special");
firstListElement.classList.toggle("list5-item");
console.log(firstListElement.classList);

console.log("----------------style-----------------");

firstListElement.style.color = "red";
firstListElement.style.fontSize = "20px";
console.log(firstListElement);

console.log("----------------attributes------------");

const facebook = document.querySelector("#facebook");

console.log(facebook);

console.log(`-elem.attributes-`);
console.log(facebook.attributes);

console.log(`-elem.hasAttribute("...") => true/false -`);
console.log(facebook.hasAttribute("href"));
console.log(facebook.hasAttribute("src"));

console.log(`-elem.setAttribute("...")modifica un atribut-`);
facebook.setAttribute("href", "https://instagram.com");

console.log(`-elem.setAttribute("...")+elem.getAttribute("...")-`);
console.log(
  `-!!! Atentie data-name nu poate fi returnat cu elem.getAttribute("..."), ci doar cu elem.dataset["name"] sau elem.dataset.name -`
);
console.log(facebook.getAttribute("href"));

console.log(`-elem.removeAttribute("...")-`);
console.log(facebook.hasAttribute("data-asd"));
console.log(facebook.hasAttribute(["data-asd"]));
facebook.removeAttribute(["data-asd"]);

console.log(facebook.attributes);

console.log(`-elem.setAttribute("name", "value")-`);
console.log(
  `-pentru elem.setAttribute("data-name", "value" se returneaza pe html data-name = "value" iar pe consola "name": "value" -`
);
facebook.setAttribute("data-testid", "mytestid");
console.log(facebook.attributes);
console.log(facebook.dataset);

console.log(
  `-elem.dataset sau pe particular elem.dataset["name"] sau elem.dataset.name-`
);
console.log(facebook.dataset);
console.log(facebook.dataset["testid"]);
console.log(facebook.dataset.testid);

console.log("------------- create/delete elements ------------");

console.log(`-Exemplul 2-`);

console.log(`-document.createElement("...")-`);
const item4 = document.createElement("li");
item4.textContent = "item4";
console.log(item4);
const item0 = document.createElement("li");
item0.textContent = "item0";
console.log(item0);

// add as child
console.log(`add as child`);
lista0.append(item4);
lista0.prepend(item0);
console.log(lista0);

const divelem = document.createElement("div");
divelem.textContent = "this is a div";
const divelem0 = document.createElement("div");
divelem0.textContent = "this is a div0";

// add as sibling
const ex2 = document.querySelector(".ex2");
console.log(`add as sibling`);
lista0.after(divelem);
lista0.before(divelem0);
console.log(ex2);

// remove
console.log(`remove`);
const facebook0 = document.querySelector("#facebook0");
facebook0.remove();
console.log(ex2);

const ex1 = document.querySelector("#ex1");
facebook.remove();
console.log(ex1);

console.log("------------ innerHTML ------------------");

console.log(
  `console.log(elem.innerHTML) = arata in consola continutul html al elem`
);
console.log(lista.innerHTML);

console.log(
  `console.log(elem.innerText) = arata in consola continutul text al elem`
);
console.log(lista.innerHTML);

const innerHTMLDiv = document.querySelector("#innerHTML");

console.log(
  `elem.innerText = "$}data{"/"string" modifica continutul text al elem`
);
const data = prompt("Enter data here:");

innerHTMLDiv.innerText = `${data}`;
console.log(innerHTMLDiv.innerText);

console.log(`cuprins initial`);

console.log(`array nou declarat`);
const l = [
  "1",
  "2",
  '<a href="https://facebook.com" target="_blank">Press here</a>',
];
console.log(l);

console.log(`cuprins inlocuit cu array(metoda reduce)`);
lista00.innerHTML = l.reduce((acc, x) => {
  acc += `<li>${x}</li>`;
  return acc;
}, "");
console.log(lista00);

console.log(`cuprins adaugat cu array(metoda map)`);
console.log(`array nou creat din "l"`);
lista001 = l.map((x) => {
  return `<li>${x}</li>`;
});

console.log(lista001);
console.log(
  `cuprins adaugat cu array-ul nou creat(metoda for(let i..)+elem.insertAdjacentHTML("position", element))`
);
for (let index = 0; index < lista001.length; index++) {
  const element = lista001[index];
  lista00.insertAdjacentHTML("beforeend", element);
}

console.log(lista00);

console.log(
  `cuprins adaugat cu array-ul nou creat(metoda forEach()+elem.insertAdjacentHTML("position", element))`
);
lista001.forEach((element) => lista00.insertAdjacentHTML("beforeend", element));

console.log(lista00);

const ex20 = document.querySelector(".ex20");

// add as child
console.log(
  `add as child cu insertAdjacentHTML("afterbegin"/"beforeend", element(function)/"html element")`
);
lista00.insertAdjacentHTML("afterbegin", "<li>item0</li>");
lista00.insertAdjacentHTML("beforeend", "<li>item4</li>");
console.log(ex20);

// add as sibling
console.log(
  `add as child cu insertAdjacentHTML("beforebegin"/"afterend", element(function)/"html element")`
);
lista00.insertAdjacentHTML("beforebegin", "<div>div0</div>");
lista00.insertAdjacentHTML("afterend", "<div>div1</div>");
console.log(ex20);
