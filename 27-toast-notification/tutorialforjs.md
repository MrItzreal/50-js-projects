Roadmap To Rewrite The JavaScript Yourself:

**1. Select Elements:**

- Use `document.getElementById` to target two elements:
  - The button element with the ID "button".
  - The container element with the ID "toasts" where notifications will be displayed.

**2. Define Notification Messages:**

- Create an array named `messages` containing the text content for each notification.

**3. Define Notification Types:**

- Create an array named `types` containing the different notification types (e.g., "info", "success", "error").

**4. Add Event Listener to Button:**

- Attach a click event listener to the button element.
- Inside the event listener function, call a function named `createNotification`.

**5. Create Notification Function (createNotification):**

- This function takes optional arguments for `message` and `type`.
  - If no arguments are provided, the function will generate a random message and type.
- Inside the function:
  - Create a new DOM element (`div`) and store it in a variable named `notif`.
  - Add the class "toast" to `notif` using `classList.add`.
  - Based on the provided or generated `type`, add the corresponding class name to `notif` (e.g., `notif.classList.add("info")`).
  - Set the inner text of `notif` to the provided or generated `message`.
  - Append the `notif` element to the `toasts` container element using `appendChild`.
  - Use `setTimeout` to schedule the removal of `notif` after a specific delay (e.g., 2500 milliseconds).

**6. Generate Random Message Function (getRandomMessage):**

- This function doesn't take any arguments.
- Inside the function:
  - Use `Math.floor(Math.random() * messages.length)` to generate a random index within the `messages` array.
  - Return the message at the generated index from the `messages` array.

**7. Generate Random Type Function (getRandomType):**

- This function doesn't take any arguments.
- Inside the function:
  - Use `Math.floor(Math.random() * types.length)` to generate a random index within the `types` array.
  - Return the type at the generated index from the `types` array.
