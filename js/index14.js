// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Throttle și Debounce     -----
console.log(`-------       Throttle și Debounce       -------`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
  scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
});

// ---   Conectarea bibliotecii   ---
console.log(`---   Conectarea bibliotecii   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const example = document.querySelector(".con");

const result = _.add(2, 3);
console.log(result); // 5

const addResult = `Rezultatul adunarii "2+3" este: ${result}`;

example.after(addResult);

// ---   Throttle   ---
console.log(`---   Throttle   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

document.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log("Scroll handler call every 2000ms");
  }, 2000)
);

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
};

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);

// ---   Debounce   ---
console.log(`---   Debounce   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

document.addEventListener(
  "scroll",
  _.debounce(() => {
    console.log("Scroll handler call after 3000ms pause");
  }, 3000)
);

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const vanillaOutput1 = document.querySelector(".output1.vanilla1");
const throttledOutput1 = document.querySelector(".output1.throttled1");
const debouncedOutput1 = document.querySelector(".output1.debounced1");
const eventCounter1 = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
};

document.addEventListener("scroll", () => {
  eventCounter1.vanilla += 1;
  vanillaOutput1.textContent = eventCounter1.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter1.throttled += 1;
    throttledOutput1.textContent = eventCounter1.throttled;
  }, 500)
);

document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter1.debounced += 1;
    debouncedOutput1.textContent = eventCounter1.debounced;
  }, 1000)
);

// ---   Modurile metodei debounce   ---
console.log(`---   Modurile metodei debounce   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 ({leading: true, trailing: false,}) -`);

document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      console.log("Scroll handler call on every event stream start");
    },
    1000,
    {
      leading: true,
      trailing: false,
    }
  )
);

// - exemplu 2 -
console.log(`- exemplu 2 -`);

const vanillaOutput2 = document.querySelector(".output2.vanilla2");
const throttledOutput2 = document.querySelector(".output2.throttled2");
const trailingOutput2 = document.querySelector(".output2.trailing2");
const leadingOutput2 = document.querySelector(".output2.leading2");
const eventCounter2 = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
};

// Trailing debounce
document.addEventListener(
  "scroll",
  _.debounce(() => {
    eventCounter2.trailing += 1;
    trailingOutput2.textContent = eventCounter2.trailing;
  }, 300)
);

// Leading debounce
document.addEventListener(
  "scroll",
  _.debounce(
    () => {
      eventCounter2.leading += 1;
      leadingOutput2.textContent = eventCounter2.leading;
    },
    300,
    { trailing: false, leading: true }
  )
);

document.addEventListener("scroll", () => {
  eventCounter2.vanilla += 1;
  vanillaOutput2.textContent = eventCounter2.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter2.throttled += 1;
    throttledOutput2.textContent = eventCounter2.throttled;
  }, 300)
);

// -----     Lazy load     -----
console.log(`-------       Lazy load       -------`);

// ---   Atributul loading   ---
console.log(`---   Atributul loading   ---`);

// ---   Librăria lazysizes   ---
console.log(`---   Librăria lazysizes   ---`);

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// -----  folosire Regex  ----
console.log("-----  folosire Regex  ----");

let regex = new RegExp(`[a-s]`);
console.log(regex.test("e"));
console.log(regex.test("z"));
console.log(regex.test("1"));

let regex0 = new RegExp(`^lesson [1-4]`);
console.log(regex0.test("lesson 4"));
console.log(regex0.test("lesson 9"));
console.log(regex0.test("Lesson 4"));

const outputNo = document.querySelector("#no");
let noEvents = 0;

document.addEventListener("mousemove", () => {
  noEvents++;
  outputNo.textContent = noEvents;
});

const outputThrottle = document.querySelector("#throttle");
let throttleEvents = 0;
const eventHandlerThrottle = () => {
  throttleEvents++;
  outputThrottle.textContent = throttleEvents;
};

const delayInMiliseconds = 300;
document.addEventListener(
  "mousemove",
  _.throttle(eventHandlerThrottle, delayInMiliseconds)
);

const outputDebounce = document.querySelector("#debounce");
let debounceEvents = 0;
const eventHandlerDebounce = () => {
  debounceEvents++;
  outputDebounce.textContent = debounceEvents;
};

const options = {
  leading: true,
  trailing: false,
};
document.addEventListener(
  "mousemove",
  _.debounce(eventHandlerDebounce, delayInMiliseconds, options)
);

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
