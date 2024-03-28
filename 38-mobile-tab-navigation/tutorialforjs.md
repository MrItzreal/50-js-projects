Roadmap To Rewrite The JavaScript Yourself:

1. **Select Elements:**

   - Use `document.querySelectorAll` to target all elements with the class ".content" and store them in a variable called `contents`.
   - Use `document.querySelectorAll` to target all `<li>` elements within a `<ul>` element inside the `<nav>` tag and store them in a variable called `listItems`.

2. **Add Click Event Listener to List Items:**

   - Loop through each `listItem` using `forEach`.
   - Inside the loop, add a click event listener to the current `listItem`. When clicked, it will run a function.

3. **Hide All Content and List Items (Initial State):**

   - Define a function named `hideAllContents`.
   - Inside `hideAllContents`, loop through each `content` element using `forEach`.
   - For each `content` element, remove the class "show" using `classList.remove("show")`. This will likely hide the content visually (depends on your CSS).
   - Define another function named `hideAllItems`.
   - Inside `hideAllItems`, loop through each `listItem` using `forEach`.
   - For each `listItem`, remove the class "active" using `classList.remove("active")`. This will likely remove any visual styling associated with the active state.

4. **Show Specific Content and Activate List Item on Click:**
   - Inside the click event listener function (from step 2), call the `hideAllContents` function to hide all content initially.
   - Call the `hideAllItems` function to remove the active state from all list items.
   - On the currently clicked `listItem`, add the class "active" using `classList.add("active")`. This will likely apply visual styles for the active state.
   - Get the index of the clicked `listItem` using the `idx` parameter from the `forEach` loop.
   - Use the retrieved index to access the corresponding content element from the `contents` array (`contents[idx]`).
   - On the corresponding content element, add the class "show" using `classList.add("show")`. This will likely make the specific content visible.
