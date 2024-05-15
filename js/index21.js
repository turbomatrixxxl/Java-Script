// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     CRUD     -----
console.log(`-------       CRUD       -------`);

// ---   Read   ---
console.log(`---   Read   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-toata lista -`);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((post) => {
    console.log("---   Read   ---");
    console.log(`- exemplu 1-toata lista -`);
    console.log(post);
  })
  .catch((error) => console.log(error));

// - exemplu 2 -
console.log(`- exemplu 2-dupa Id -`);

// Change this number to fetch different post
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    console.log("---   Read   ---");
    console.log(`- exemplu 2-dupa Id -`);
    console.log(post);
  })
  .catch((error) => console.log(error));

// ---   Create   ---
console.log(`---   Create   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const postToAdd = {
  author: "Mango",
  body: "CRUD is awesome",
};
console.log(JSON.stringify(postToAdd));

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const radu = {
  aBoss: "Radu Bogdan Naramzoiu",
  body: "HE is GodOnEarth...!",
};
const headers = {
  method: "POST",
  body: JSON.stringify([radu, postToAdd]),
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((post) => {
    console.log("---   Create   ---");
    console.log(post);
  })
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts", headers)
  .then((response) => response.json())
  .then((post) => {
    console.log("---   Create   ---");
    console.log(post);
  })
  .catch((error) => console.log(error));

// ---   Update   ---
console.log(`---   Update   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// Change value of id property to update different post
const postToUpdate = {
  id: 1,
  //   aBoss: "Radu Bogdan Naramzoiu",
  //   author: "Mango",
  body: "CRUD is really awesome",
};

const options0 = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options0)
  .then((response) => response.json())
  .then((post) => {
    console.log("---   Update   ---");
    console.log(post);
    return post;
  })
  .catch((error) => console.log("ERROR" + error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((post) => {
    console.log("---   Update   ---");
    console.log(post);
  })
  .catch((error) => console.log(error));

// ---   Delete   ---
console.log(`---   Delete   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then((post) => {
    console.log(`---   Delete   ---`);
    console.log("Post deleted");
    console.log(post);
  })
  .catch((error) => console.log("Error:", error));

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
