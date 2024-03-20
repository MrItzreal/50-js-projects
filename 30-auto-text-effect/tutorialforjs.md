Roadmap To Rewrite The JavaScript Yourself:

**1. Select Elements:**

- Use `document.getElementById("text")` to select the element with the ID "text" and store it in a variable called `textEl`. This element will display the typing text.
- Use `document.getElementById("speed")` to select the element with the ID "speed" and store it in a variable called `speedEl`. This element will allow the user to control the typing speed.

**2. Define Variables:**

- Create a variable called `text` and assign it a string value, for example, "We Love Programming!". This is the text that will be typed out.
- Create a variable named `idx` and initialize it to `1`. This variable will keep track of the current character index in the text string.
- Create a variable named `speed` and initialize it with a value calculated based on the initial value of the `speedEl` element. You can use a formula like `speed = 300 / speedEl.value;` where 300 is a constant representing the base speed (adjust as needed) and `speedEl.value` is the user-defined speed value.

**3. Initial Text Display:**

- Call a function named `writeText()` to display the initial portion of the text.

**4. writeText Function:**

- Define a function called `writeText()`.
- Inside the function:
  - Update the content of the `textEl` element using `textEl.innerText = text.slice(0, idx)`. The `slice` method extracts a portion of the `text` string from the beginning (index 0) up to, but not including, the character at index `idx`. This effectively displays the characters up to the current index.
  - Increment the `idx` variable by 1 to move to the next character in the text.
  - Check if `idx` is greater than the length of the `text` string using an `if` statement:
    - If `idx` exceeds the text length, reset it to 1 to start the typing animation again from the beginning.
  - Use `setTimeout` to schedule the next execution of the `writeText` function after a delay:
    - Pass an arrow function as the first argument to `setTimeout`. This function doesn't take any arguments as it simply calls `writeText()` again.
    - Set the delay to the `speed` variable in milliseconds (obtained earlier) as the second argument to `setTimeout`. This determines the typing speed.

**5. Event Listener for Speed Control:**

- Attach an event listener to the `speedEl` element using `speedEl.addEventListener("input", (e) => { ... })`. The "input" event fires whenever the value of the element changes due to user interaction.
- Inside the callback function:
  - The function receives the event object (`e`) as an argument.
  - Calculate the new typing speed based on the updated value of the `speedEl` element. You can use the same formula as before: `speed = 300 / e.target.value;`.
    **Note:** In this specific case, you only need `e.target.value` to access the updated speed value. However, the event object provides additional information about the event if needed in other scenarios.
