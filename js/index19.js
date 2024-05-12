// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Protocolul HTTP     -----
console.log(`-------       Protocolul HTTP       -------`);

// ---   Protocolul HTTPS    ---
console.log(`---   Protocolul HTTPS    ---`);

// ---   Materiale suplimentare   ---
console.log(`---   Materiale suplimentare   ---`);

// -----     REST API     -----
console.log(`-------       REST API       -------`);

// ---   Forma cererii   ---
console.log(`---   Forma cererii   ---`);

// ---   Metode HTTP   ---
console.log(`---   Metode HTTP   ---`);

// ---   HTTP-headers   ---
console.log(`---   HTTP-headers   ---`);

// ---   Paths   ---
console.log(`---   Paths   ---`);

// ---   Status code   ---
console.log(`---   Status code   ---`);

// ---   Cerere-Răspuns   ---
console.log(`---   Cerere-Răspuns   ---`);

// -----     AJAX     -----
console.log(`-------       AJAX       -------`);

// ---   Fetch API   ---
console.log(`---   Fetch API   ---`);

// ---   Verificarea răspunsului   ---
console.log(`---   Verificarea răspunsului   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Data handling
    console.log(`Verificarea răspunsului`);
    console.log(`exemplu 1`);

    console.log(data);
  })
  .catch((error) => {
    // Error handling
    console.log(error);
  });

// ---   Tab-ul Network   ---
console.log(`---   Tab-ul Network   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.insertAdjacentHTML("beforeend", markup);
}

// ---   Greșelile începătorului   ---
console.log(`---   Greșelile începătorului   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

let globalVariable; // undefined

// Initializing data fetching
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("Greșelile începătorului");
    console.log("exemplu 1");
    console.log("users inside then callback: ", users);

    // Writing the result to a global variable
    globalVariable = users;

    // Everything is ok here, the data is in the variable
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// No async data here
console.log("globalVariable outside fetch: ", globalVariable); // undefined

// ---   Parametrii query string   ---
console.log(`---   Parametrii query string
   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchUsersBtn0 = document.querySelector(".btn0");
const userList0 = document.querySelector(".user-list0");

fetchUsersBtn0.addEventListener("click", () => {
  fetchUsers0()
    .then((users) => renderUsers0(users))
    .catch((error) => console.log(error));
});

function fetchUsers0() {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers0(users) {
  const markup = users
    .map((user) => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join("");
  userList0.insertAdjacentHTML("beforeend", markup);
}

// --  Class URLSearchParams  --
console.log(`--  Class URLSearchParams  --`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams);

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// ---   HTTP headers   ---
console.log(`---   HTTP headers   ---`);

const headers = new Headers({
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
});
console.log(headers.get("Content-Type"));
console.log(headers.get("X-Custom-Header"));

headers.append("Content-Type", "text/bash");
headers.append("X-Custom-Header", "custom value2");
console.log(headers.get("Content-Type"));
console.log(headers.has("Content-Type"));
console.log(headers.get("X-Custom-Header"));

headers.set("Content-Type", "application/json");
console.log(headers.get("Content-Type"));

headers.delete("X-Custom-Header");
console.log(headers.get("X-Custom-Header"));

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const querryParams = new URLSearchParams({
  _limit: 4,
  _sort: name,
});

fetch(`https://jsonplaceholder.typicode.com/users?${querryParams.toString()}`, {
  headers: {
    Accept: "application/json",
    "X-My-Header": "Hellouuu...!!!",
  },
})
  .then((response) => {
    // ...
    console.log("HTTP headers");
    console.log("exemplu 1");
    console.log(response);
    if (!response.ok) {
      throw new Error(console.log(`error happened: ${response.status}`));
    }
    return response.json();
  })
  .then((res) => {
    const username = res.map((un) => {
      return un.username;
    });
    console.log(res);

    const email = [];
    for (const iterator of res) {
      email.push(iterator.email);
      console.log(iterator.email);
      //   return email;
    }
    console.log(email.join(" , "));
    console.log(res[0].address);

    console.log(username);
  })
  .catch((er) => {
    console.log(er);
  });

// - exemplu 3 -
console.log(`- exemplu 3(cu eroare) -`);

fetch("https://jsonplaceholder.typicode.com/userss", {
  headers: {
    Accept: "application/json",
    "X-My-Header": "Hellouuu...!!!",
  },
})
  .then((response) => {
    // ...
    console.log("HTTP headers");
    console.log("exemplu 3(cu eroare)");
    if (!response.ok) {
      throw new Error(console.log(`error happened: ${response.status}`));
    }
    return response.json();
  })
  .then((res) => {
    const username = res.map((un) => {
      return un.username;
    });
    console.log(username);
  })
  .catch((er) => {
    console.log(er);
  });

// -----     Cross-Origin Resource Sharing     -----
console.log(`-------       Cross-Origin Resource Sharing       -------`);

// ---   spread   ---
console.log(`---   spread   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

const queryStrings = new URLSearchParams({
  _limit: 7,
  _sort: "name",
});

console.log(queryStrings);
console.log(queryStrings.toString());

const headers0 = new Headers({
  "Content-Type": "application/json",
  "X-My-Header": "Salut",
});

const responsePromise = fetch(`${JSON_PLACEHOLDER_URL}/users?${queryStrings}`, {
  headers: headers0,
});

responsePromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then((data) => {
    console.log("Cristi Socaci Example");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

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
