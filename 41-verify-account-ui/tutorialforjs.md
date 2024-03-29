Roadmap To Rewrite The JavaScript Yourself:

**1. Select Code Inputs:**

- Use `document.querySelectorAll(".code")` to select all elements with the class "code" and store them in a variable named `codes`. This will be an array containing references to each input element.

**2. Focus on First Input:**

- Use `codes[0].focus()` to set focus on the first element in the `codes` array (which is the first input element). This ensures interaction starts on the first input.

**3. Loop Through Input Elements:**

- Use a `forEach` loop to iterate through each element (`code`) and its index (`idx`) within the `codes` array.

**4. Add Keydown Event Listener:**

- Inside the `forEach` loop, for each `code` element:
  - Add a `keydown` event listener using `code.addEventListener("keydown", (e) => { ... })`. This listener will be triggered whenever a key is pressed down on the current input element.

**5. Handle Key Presses:**

- Inside the event listener function (`(e) => { ... }`):
  - Check if the pressed key is a digit (0-9) using `e.key >= 0 && e.key <= 9`:
    - If it's a digit:
      - Clear the value of the current input element using `codes[idx].value = ""`.
      - Use `setTimeout(() => { codes[idx + 1].focus(); }, 10)` to:
        - Delay focus change for 10 milliseconds using `setTimeout`.
        - Set focus to the next input element (`codes[idx + 1].focus()`) after the delay.
  - Else if the pressed key is Backspace (`e.key === "Backspace"`):
    - Use `setTimeout(() => { codes[idx - 1].focus(); }, 10)` to:
      - Delay focus change for 10 milliseconds using `setTimeout`.
      - Set focus to the previous input element (`codes[idx - 1].focus()`) after the delay.
