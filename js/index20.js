// ------     Conspect     ------
console.log(`---------        Conspect        ---------`);

// -----     Paginarea     -----
console.log(`-------       Paginarea       -------`);

// ---   Numărul de elemente în răspuns   ---
console.log(`---   Numărul de elemente în răspuns   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchPostsBtn = document.querySelector(".btn");
console.log(fetchPostsBtn);
const postList = document.querySelector(".posts");
console.log(postList);

fetchPostsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  // Change the number of items in the group here
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=2"
  );
  console.log(response.data);
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join("");
  postList.innerHTML = markup;
}

// ---   Numărul grupului de elemente   ---
console.log(`---   Numărul grupului de elemente   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchPostsBtn0 = document.querySelector(".btn0");
const postList0 = document.querySelector(".posts0");

fetchPostsBtn0.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts0();
    renderPosts0(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts0() {
  const params = new URLSearchParams({
    _limit: 5,
    // Change the group number here
    _page: 2,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts0(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList0.innerHTML = markup;
}

// ---   Technica "Load more"   ---
console.log(`---   Technica "Load more"   ---`);

// - exemplu 1 -
console.log(`- exemplu 1 -`);

const fetchPostsBtn1 = document.querySelector(".btn1");
const postList1 = document.querySelector(".posts1");

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 50;

fetchPostsBtn1.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts1();
    renderPosts1(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn1.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts1() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts1(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList1.insertAdjacentHTML("beforeend", markup);
}

// ------     Cristi Socaci     ------
console.log(`---------        Cristi Socaci        ---------`);

// - exercitiul-1 -
console.log(`- exercitiul-1-axios -`);

const querySelector = new URLSearchParams({
  _limit: 2,
  _page: 1,
});

const JSON_PLACEHOLDER_URL = "https://jsonplaceholder.typicode.com";

fetch(`${JSON_PLACEHOLDER_URL}/users`)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .get(`${JSON_PLACEHOLDER_URL}/users`)
  .then((response) => {
    console.log(response);

    console.log(response.data);
  })
  .catch((err) => console.log(err));

// - exercitiul-2 -
console.log(`- exercitiul-2-Paginare -`);

const fetchPostsButton3 = document.querySelector(".btn3");
const loader = document.querySelector(".loader");
const postsUl = document.querySelector(".posts3");

let pageNumber = 1;

// fetchPosts0();

fetchPostsButton3.addEventListener("click", () => {
  fetchPosts0();
});

const renderPost0 = (post) => {
  const liElem = document.createElement("li");

  const titleElem = document.createElement("h2");
  titleElem.textContent = post.title;

  const postNbElem = document.createElement("h3");
  postNbElem.textContent = `Post #${post.id}`;

  const userElem = document.createElement("h4");
  userElem.textContent = `User: ${post.userId}`;

  const descriptionElem = document.createElement("p");
  descriptionElem.textContent = post.body;

  liElem.append(titleElem, postNbElem, userElem, descriptionElem);

  return liElem;
};

function fetchPosts0() {
  const queryParams = new URLSearchParams({
    _limit: 50,
    _page: pageNumber,
  });

  axios
    .get(`${JSON_PLACEHOLDER_URL}/posts?${queryParams}`)
    .then((response) => {
      if (response.data.length === 0) {
        fetchPostsButton3.style.visibility = "hidden";
      }
      if (response.data.length === 0) {
        loader.style.visibility = "hidden";
      }
      console.log(response.data);
      const postsListItems = response.data.map((post) => renderPost0(post));
      //   console.log(postsListItems);

      postsUl.append(...postsListItems);
      fetchPostsButton3.textContent = "Fetch more posts";
      pageNumber++;
    })
    .catch((err) => console.log(err));
}

window.addEventListener(
  "scroll",
  _.debounce(() => {
    const scrolledTo = window.scrollY + window.innerHeight;
    // console.log(document.body.scrollHeight);

    const isReachBottom = document.body.scrollHeight <= scrolledTo;

    if (isReachBottom) {
      fetchPosts0();
    }
  }, 300)
);

// console.log(mockData);
