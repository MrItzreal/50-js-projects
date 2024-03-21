Roadmap To Rewrite The JavaScript Yourself:

NOTE: I made this roadmap based on what was made first! So do not get confused when you see the final JS code if things do not follow the same order as this roadmap. You can always sort it out at the end to mimic final code. So please follow this roadmap and once done you can move the code around.

**1. Grabbing Elements:**

- Use `document.getElementById` to grab references to HTML elements like the result box, input fields (length, checkboxes), generate button, and copy button.

**2. Random Character Functions:**

- Define functions to generate random lowercase, uppercase, number, and symbol characters. These functions can use `Math.random` to get a random number and convert it to the desired character code using `String.fromCharCode`.

**3. Random Function Object:**

- Create an object named `randomFunc` that stores the functions for generating random characters (lowercase, uppercase, number, and symbol) as key-value pairs.

**4. Generate Button Event Listener:**

- Add an event listener to the generate button. Inside the listener:
  - Get the desired password length by converting the length input value to a number (using `+`).
  - Check the state of the checkbox elements for lowercase, uppercase, numbers, and symbols.
  - resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length); - This line calls the function named generatePassword. It passes five arguments to the function.

**5. Generate Password Function:**

- Define a function `generatePassword` that takes arguments for including lowercase, uppercase, numbers, symbols, and desired password length.
- Initialize an empty string `generatedPassword` to store the password.
- Count the number of checked character types.
- Filter an array containing objects for each character type to only include the checked ones.
- If no character types are checked, return an empty string.
- Use a loop that iterates based on the number of character types. Inside the loop:
  - Loop through the filtered character type objects.
  - Get the function name for the current character type and use it to call the corresponding function from the `randomFunc` object.
  - Add the generated character to the `generatedPassword` string.
- Slice the generated password to ensure it's the desired length.
- Return the final password string.

**6. Copy Button Event Listener:**

- Add an event listener to the copy button. Inside the listener:
  - Create a temporary textarea element.
  - Get the password text from the result element.
  - If there's no password, return.
  - Set the textarea's value to the password.
  - Append the textarea to the document body (hidden).
  - Select the textarea content.
  - Use `document.execCommand("copy")` to copy the content to the clipboard.
  - Remove the temporary textarea element.
  - Display an alert message indicating successful copying.
