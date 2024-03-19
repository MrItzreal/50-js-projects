const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  //repos?sort=created gives us the latest repos
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem Fetching Repo");
  }
}

function createUserCard(user) {
  // Refactored HTML into JS templates.
  // user is the parameter and the attached properties
  // come from the api: https://api.github.com/users/mritzreal
  const cardHTML = `
  <div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>

  <div class="user-info">
    <h2>${user.name}</h2>
    <p>
    ${user.bio}
    </p>

    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>

    <div id="repos"></div>
  </div>
</div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  //we inserted this html so when we search for
  //a non existing profile the err msg will show on screen
  const cardHTML = `
  <div class="card">
  <h1>${msg}</h1>
  </div>
  
  `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  //.slice() helps us reduce the number of repos that would appear.The number (e.g.,5) specifies how many repos appear If you use 10, it will show 10.
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url; //adds link
    repoEl.target = "_blank"; //opens new window
    repoEl.innerText = repo.name; //inserts repo's name

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  // Listens for form submissions, grabs the username, fetches user data (if provided), and clears the input.
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
