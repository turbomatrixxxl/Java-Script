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

// ---   spread: transmiterea argumentelor   ---
console.log(`---   spread: transmiterea argumentelor   ---`);

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
