Roadmap To Rewrite The JavaScript Yourself:

**1. Select Elements:**

- Use `document.querySelectorAll` to find all elements with the class ".rating". Store them in a variable named `ratings`.
- Use `document.querySelector` to find the element with the class ".ratings-container". Store it in `ratingsContainer`.
- Use `document.querySelector` to find the element with the ID "#send". Store it in `sendBtn`.
- Use `document.querySelector` to find the element with the ID "#panel". Store it in `panel`.

**2. Set up initial state:**

- Create a variable named `selectedRating` and set it to a default value (e.g., "Satisfied").

**3. Add Click Event Listener to Ratings Container:**

- Attach a click event listener to the `ratingsContainer`.
- Inside the event listener function, check if the clicked element's parent node has the class "rating" using `e.target.parentNode.classList.contains("rating")`.
  - If it does:
    - Call a function named `removeActive` (defined later) to remove the "active" class from all ratings.
    - Add the "active" class to the clicked element's parent node.
    - Update the `selectedRating` variable to the text content of the clicked element's next sibling (assuming the rating value is stored there).

**4. Add Click Event Listener to Send Button:**

- Attach a click event listener to the `sendBtn`.
- Inside the event listener function, update the innerHTML of the `panel` element with a string containing:
  - An icon (you'll need to include the font awesome library for the icon class "fas fa-heart").
  - Thank you message.
  - The selected rating retrieved from `selectedRating`.
  - A feedback message.

**5. Define `removeActive` function:**

- Create a function named `removeActive`.
- Inside the function, loop through the `ratings` array and use a loop to remove the "active" class from each element using `classList.remove("active")`.
