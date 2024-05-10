// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Promises     -----
console.log(`-------       Promises       -------`);

// ---   Crearea lor   ---
console.log(`---   Crearea lor   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// Change value of isSuccess variable to call resolve or reject
const isSuccess = Math.random() > 0.5;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(console.log(`Success! Value passed to resolve function`));
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 200);
});

console.log(promise);

// ---   Metoda then()   ---
console.log(`---   Metoda then()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// Change value of isSuccess variable to call resolve or reject
const isSuccess0 = Math.random() > 0.5;

const promise0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess0) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log(promise0);

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise0.then(
  // onResolve will run third or not at all
  (value) => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  (error) => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Will run second
console.log("After promise.then()");

// ---   Metoda catch()   ---
console.log(`---   Metoda catch()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// Change value of isSuccess variable to call resolve or reject
const isSuccess1 = Math.random() > 0.5;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess1) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// ---   Metoda finally()   ---
console.log(`---   Metoda finally()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// Change value of isSuccess variable to call resolve or reject
const isSuccess2 = Math.random() > 0.5;

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess2) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise2
  .then((value) => console.log(value)) // "Success! Value passed to resolve function"
  .catch((error) => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

// ---   Promises chaining   ---
console.log(`---   Promises chaining   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise3
  .then((value) => {
    console.log(value); // 5
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });

// ---   Promisification   ---
console.log(`---   Promisification   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

const onFetchSuccess = (user) => {
  console.log(user);
};

const onFetchError = (error) => {
  console.error(error);
};

fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const fetchUserFromServer0 = (username) => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer0("Mango")
  .then((user) => console.log(user))
  .catch((error) => console.error(error));

// -----     Metodele clasei Promise     -----
console.log(`-------       Metodele clasei Promise       -------`);

// ---   Promise.all()   ---
console.log(`---   Promise.all()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const makePromise = (text, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() < 0.7;
    if (shouldResolve) {
      setTimeout(() => resolve(text + " " + "delay" + ":" + delay), delay);
    } else {
      reject(`error` + " " + "delay" + ":" + delay);
    }
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then((res) => console.log(res)) //["promiseA value", "promiseB value"]
  .catch((error) => console.log(error))
  .finally(() => {
    console.log(`Problem solved...!`);
  });

// ---   Promise.race()   ---
console.log(`---   Promise.race()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const makePromise0 = (text, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() < 0.7;
    if (shouldResolve) {
      setTimeout(() => resolve(text + " " + "delay" + ":" + delay), delay);
    } else {
      reject(`error` + " " + "delay" + ":" + delay);
    }
  });
};

const promiseA0 = makePromise0("promiseA value", 1000);
const promiseB0 = makePromise0("promiseB value", 3000);

Promise.race([promiseA0, promiseB0])
  .then((value) => console.log(value)) // "promiseA0 value"
  .catch((error) => console.log(error));

// ---   Promise.resolve() și Promise.reject()   ---
console.log(`---   Promise.resolve() și Promise.reject()   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

// Fulfilled promise
new Promise((resolve) => resolve("success value")).then((value) =>
  console.log(value)
);

Promise.resolve("success value1").then((value) => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject("error")).catch((error) =>
  console.error(error)
);

Promise.reject("error1").catch((error) => console.error(error));

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const makeGreeting = (guestName) => {
  if (guestName === "" || guestName === undefined) {
    return {
      success: false,
      message: "Guest name must not be empty",
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const result = makeGreeting("Mango");

if (result.success) {
  console.log(result.message);
} else {
  console.error(result.message);
}

const example = makeGreeting("");
console.log(example);
if (example.success) {
  console.log(example.message);
} else {
  console.log(example.message);
}

// - exemplu 3 -
console.log(`- exemplu 3 -`);

const makeGreeting1 = (guestName, onSuccess, onError) => {
  if (guestName === "" || guestName === undefined) {
    return onError("Guest name must not be empty");
  }
  onSuccess(`Welcome ${guestName}`);
};

makeGreeting1(
  "Mango",
  (greeting) => console.log(greeting),
  (error) => console.error(error)
);

makeGreeting1(
  "",
  (welcome) => console.log(welcome),
  (empty) => console.log(empty)
);

// - exemplu 4 -
console.log(`- exemplu 4 -`);

const makeGreeting2 = (guestName) => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting2("Mango")
  .then((greeting) => console.log(greeting))
  .catch((error) => console.error(error));

makeGreeting2(undefined)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// -----     Event Loop     -----
console.log(`-------       Event Loop       -------`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

//  ------------- Sync ------------------

function simulateRequest() {
  // Takes 1 second to return
  //   const asd = JSON.parse("asd");
  return Math.random() > 0.3 ? "success" : "error";
}

try {
  const res = simulateRequest();
  console.log(res);
} catch {
  console.log("Error");
}

// ----------------- simulate async ------------------

function simulateRequestAsync() {
  return new Promise((resolve) => {
    resolve(simulateRequest());
  });
}

const resAsync = simulateRequestAsync()
  .then((res) => {
    console.log("Fullfiled", res);
  })
  .catch(() => {
    console.log("Error async");
  })
  .finally(() => {
    console.log("finally first async");
  });

console.log(resAsync);

// ------------------ simulate async 2 ------------------

function simulateRequestAsync2() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.3 ? resolve("success") : reject("error");
  }).then((res) => {
    console.log("first then");
    return res;
  });
}

const resAsync2 = simulateRequestAsync2()
  .then((res) => {
    console.log(res);
    return "then 1";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("finally");
  });

// ------------------ simulate get users ------------------

const usersDiv = document.getElementById("users");

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve(["Radu Bogdan", "Naramzoiu"])
        : reject("Connection error");
    }, 2000);
  });
}

getUsers()
  .then((res) => {
    res.forEach((user) => {
      const userElem = document.createElement("div");
      userElem.textContent = user;
      usersDiv.appendChild(userElem);
    });
  })
  .catch((err) => {
    const userElem = document.createElement("div");
    userElem.textContent = err;
    userElem.style.color = "red";
    usersDiv.appendChild(userElem);
  })
  .finally(() => {
    const userElem = document.createElement("div");
    userElem.textContent = "This is a users list";
    usersDiv.prepend(userElem);
  });

// ------------------ Promise methods ------------------

function simulateRequest3(succesMessage, errorMessage) {
  // Takes 1 second to return
  return Math.random() > 0.3
    ? Promise.resolve(succesMessage)
    : Promise.reject(errorMessage);
}

simulateRequest3()
  .then((res) => res)
  .catch((err) => err);

const promise6 = simulateRequest3("succes5", "error5");
const promise7 = simulateRequest3("succes6", "error6");

Promise.all([promise6, promise7])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const promise5 = simulateRequest3("succes5", "error5");
const promise4 = simulateRequest3("succes4", "error4");

Promise.race([promise5, promise4])
  .then((res) => console.log(res, [promise5, promise4]))
  .catch((err) => console.error(err, [promise5, promise4]));

Notiflix.Notify.success("Sol lucet omnibus");
