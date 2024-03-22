Roadmap To Rewrite The JavaScript Yourself:

1. **Select elements:**

   - Use `document.querySelectorAll` to find all elements with the class ".toggle". Store this selection in a variable named `toggles`.
   - Use `document.querySelector` to find the element with the id "good". Store this element in a variable named `good`.
   - Repeat the same step for elements with id "cheap" and "fast", storing them in variables named `cheap` and `fast` respectively.

2. **Add event listeners:**

   - Loop through each element in the `toggles` variable using a loop (e.g., `forEach`).
   - Inside the loop, attach a "change" event listener to the current toggle element.
   - When the event listener is triggered (i.e., a checkbox is clicked), it should call a function named `doTheTrick`, passing the clicked element (`e.target`) as an argument.

3. **Define `doTheTrick` function:**
   - This function takes one argument, `theClickedOne`, which represents the checkbox that was clicked.
   - Inside the function, check if all three checkboxes (`good`, `cheap`, and `fast`) are checked.
   - If all three are checked, use a series of `if` statements to determine which checkbox was clicked (`theClickedOne`).
     - If `good` was clicked, set `fast.checked` to `false`.
     - If `cheap` was clicked, set `good.checked` to `false`.
     - If `fast` was clicked, set `cheap.checked` to `false`.
