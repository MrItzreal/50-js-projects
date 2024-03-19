Roadmap To Rewrite The JavaScript Yourself:

**1. Setup:**

- Define a base URL for the GitHub API (`APIURL`).
- Use `document.getElementById` to grab references to the form (`form`), search input (`search`), and the main content area (`main`) in the HTML.

**2. User Data Fetching:**

- Create an `async function getUser(username)`.
  - Inside the function:
    - Try-catch block to handle errors.
    - On success (`try` block):
      - Use `axios` to make a GET request to the API URL with the username appended.
      - Extract the data from the response and pass it to `createUserCard` function.
      - Call `getRepos` function to fetch user's repositories (optional).
    - On error (`catch` block):
      - Check for specific error code (e.g., 404 for "Not Found") and display an error card using `createErrorCard`.

**3. Repository Data Fetching:**

- Create an `async function getRepos(username)`.
  - Inside the function:
    - Try-catch block to handle errors.
    - On success (`try` block):
      - Use `axios` to make a GET request to the API URL with username and "/repos?sort=created" appended for sorted repos.
      - Extract the data from the response and pass it to `addReposToCard` function.
    - On error (`catch` block):
      - Display an error card using `createErrorCard`.

**4. Creating User Card:**

- Create a function `createUserCard(user)`.
  - Inside the function:
    - Use template literals to construct HTML for the user card with user information (name, avatar, bio, follower/following count, public repos count).
    - Include a container element with the ID "repos" where repositories will be added later.
    - Set the inner HTML of the `main` element to the constructed card HTML.

**5. Creating Error Card:**

- Create a function `createErrorCard(msg)`.
  - Inside the function:
    - Use template literals to construct a simple HTML card displaying the provided error message.
    - Set the inner HTML of the `main` element to the error card HTML.

**6. Adding Repositories to Card:**

- Create a function `addReposToCard(repos)`.
  - Inside the function:
    - Get a reference to the element with ID "repos" from the document.
    - Use `.slice()` on the `repos` array to limit the number displayed (optional).
    - Loop through the limited `repos` array using `forEach`.
      - For each repository:
        - Create an anchor element (`<a>`) and add a class ("repo").
        - Set the `href` attribute to the repository's URL.
        - Set the `target` attribute to "\_blank" to open the link in a new tab/window.
        - Set the inner text of the anchor element to the repository name.
        - Append the anchor element (representing the repository) to the "repos" container element.

**7. Event Listener:**

- Add an event listener to the `form` element for the "submit" event.
  - Inside the event listener function:
    - Prevent default form submission behavior (`e.preventDefault`).
    - Get the username value from the `search` input field.
    - If the username has a value:
      - Call the `getUser` function with the username to initiate the user data fetch.
      - Clear the `search` input field.
