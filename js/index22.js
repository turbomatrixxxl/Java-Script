// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Funcții asincrone     -----
console.log(`-------       Funcții asincrone       -------`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchFriends = () => {
  return fetch("my-api.com/me").then((token) => {
    console.log(token);
  });
};

fetchFriends()
  .then((res) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 1 -");
    console.log(res);
  })
  .catch((er) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 1 -");
    console.log(er);
  });

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const fetchFriends0 = () => {
  return fetch("my-api.com/me")
    .then((token) => {
      return fetch(`my-api.com/profile?token=${token}`);
    })
    .then((user) => {
      console.log(user.id);
    });
};

fetchFriends0()
  .then((res) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 2 -");
    console.log(res);
  })
  .catch((er) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 2 -");
    console.log(er);
  });

// - exemplu 3 -
console.log(`- exemplu 3 -`);

const fetchFriends1 = () => {
  return fetch("my-api.com/me")
    .then((token) => {
      return fetch(`my-api.com/profile?token=${token}`);
    })
    .then((user) => {
      return fetch(`my-api.com/users/${user.id}/friends`);
    });
};

fetchFriends1()
  .then((friends) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 3 -");
    console.log(friends);
  })
  .catch((error) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 3 -");
    console.error(error);
  });

// - exemplu 4 -
console.log(`- exemplu 4 -`);

const fetchFriends2 = async () => {
  const token = await fetch("my-api.com/me");
  const user = await fetch(`my-api.com/profile?token=${token}`);
  const friends = await fetch(`my-api.com/users/${user.id}/friends`);
  return friends;
};

fetchFriends2()
  .then((friends) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 4 -");
    console.log(friends);
  })
  .catch((error) => {
    console.log("-------       Funcții asincrone       -------");
    console.log("- exemplu 4 -");
    console.error(error);
  });

// ---   Sintaxa async/await   ---
console.log(`---   Sintaxa async/await   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchUsers5 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

fetchUsers5().then((users) => {
  console.log("---   Sintaxa async/await   ---");
  console.log("- exemplu 1 -");
  console.log(users);
});

// ---   Prelucrarea erorilor   ---
console.log(`---   Prelucrarea erorilor   ---`);

// - exemplu 1a -
console.log(`- exemplu 1a -`);

const fetchUsers6 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log("rezultatul nu este utilizat în codul extern");
    console.log("- exemplu 1a-pe try -");
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

fetchUsers6();

// - exemplu 1b -
console.log(`- exemplu 1b-cu eroare pr catch -`);

const fetchUsers7 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicodes.com/users");
    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log("rezultatul nu este utilizat în codul extern");
    console.log("- exemplu 1b-cu eroare pe catch -");
    console.log(error.message);
  }
};

fetchUsers7();

// - exemplu 2a -
console.log(`- exemplu 2a-cu eroare pe catch -`);

const fetchUsers8 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

fetchUsers8()
  .then((users) => {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log("rezultatul unei funcții asincrone este folosit în cod extern");
    console.log("- exemplu 2a-cu then -");
    console.log(users);
  })
  .catch((error) => {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log("- exemplu 2a-cu eroare pe catch -");
    console.log(error);
  });

// - exemplu 2b -
console.log(`- exemplu 2b-cu eroare pe catch -`);

const fetchUsers9 = async () => {
  const response = await fetch("https://jsonplaceholder.typicodes.com/users");
  const users = await response.json();
  return users;
};

fetchUsers9()
  .then((users) => {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log("- exemplu 2b-cu then -");
    console.log(users);
  })
  .catch((error) => {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log("rezultatul unei funcții asincrone este folosit în cod extern");
    console.log("- exemplu 2b-cu eroare pe catch -");
    console.log(error);
  });

// - exemplu 3 -
console.log(
  `- exemplu 3-cu eroare(folosire await in afara functiei asincrone) -`
);

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// // ❌ SyntaxError: await is only valid in async function
// const users = await fetchUsers();

// - exemplu 4a -
console.log(
  `- exemplu 4a-cu try(folosire rezultat functie asincrona într-o altă funcție
      asincronă) -`
);

const fetchUsers11 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers11();
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log(`- exemplu 4a-cu try(folosire rezultat functie asincrona într-o altă funcție
      asincronă) -`);
    console.log(users);
  } catch (error) {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log(`- exemplu 4a-cu catch(folosire rezultat functie asincrona într-o altă funcție
      asincronă) -`);
    console.log(error.message);
  }
};

doStuff();

// - exemplu 4b -
console.log(
  `- exemplu 4b-cu catch(folosire rezultat functie asincrona într-o altă funcție
      asincronă) -`
);

const fetchUsers12 = async () => {
  const response = await fetch("https://jsonplaceholder.typicodes.com/users");
  const users = await response.json();
  return users;
};

const doStuff0 = async () => {
  try {
    const users = await fetchUsers12();
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log(`- exemplu 4b-cu try(folosire rezultat functie asincrona într-o altă funcție
      asincronă) -`);
    console.log(users);
  } catch (error) {
    console.log(`---   Prelucrarea erorilor   ---`);
    console.log(`- exemplu 4b-cu catch(folosire rezultat functie asincrona într-o altă funcție
      asincronă) -`);
    console.log(error.message);
  }
};

doStuff0();

// ---   Request-uri paralele   ---
console.log(`---   Request-uri paralele   ---`);

// - exemplu 1 -
console.log(`- exemplu 1-functii asincrone una dupa alta -`);

const fetchUsers13 = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(`---   Request-uri paralele   ---`);
  console.log(`- exemplu 1-functii asincrone una dupa alta -`);
  console.log(firstUser);
  console.log(`secondUser = {${JSON.stringify(secondUser)}}`);
  console.log(thirdUser);
};

fetchUsers13();

// - exemplu 2a -
console.log(`- exemplu 2a-functii asincrone paralele cu Promise.all() -`);

const fetchUsers14 = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Creăm o matrice de promisuri
  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Rulăm toate promisurile în paralel și așteptăm ca acestea să se finalizeze
  const users = await Promise.all(arrayOfPromises);

  return users;
};

fetchUsers14()
  .then((res) => {
    console.log(`---   Request-uri paralele   ---`);
    console.log(
      `- exemplu 2a- succes then functii asincrone paralele cu Promise.all() -`
    );
    console.log(res);
  })
  .catch((err) => {
    console.log(`---   Request-uri paralele   ---`);
    console.log(
      `- exemplu 2a- eroare catch functii asincrone paralele cu Promise.all() -`
    );
    console.log(err);
  });

// - exemplu 2b -
console.log(`- exemplu 2b-functii asincrone paralele cu Promise.all() -`);

const fetchUsers15 = async () => {
  const baseUrl = "https://jsonplaceholder.typicodess.com";
  const userIds = [1, 2, 3];

  // 1. Creăm o matrice de promisuri
  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Rulăm toate promisurile în paralel și așteptăm ca acestea să se finalizeze
  const users = await Promise.all(arrayOfPromises);
  return users;
};

fetchUsers15()
  .then((res) => {
    console.log(`---   Request-uri paralele   ---`);
    console.log(
      `- exemplu 2b- succes then functii asincrone paralele cu Promise.all() -`
    );
    console.log(res);
  })
  .catch((err) => {
    console.log(`---   Request-uri paralele   ---`);
    console.log(
      `- exemplu 2b- eroare catch functii asincrone paralele cu Promise.all() -`
    );
    console.log(err);
  });

// - exemplu 3 -
console.log(`- exemplu 3-functii asincrone paralele cu Promise.all() -`);

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers16();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers16() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}
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
