Roadmap To Rewrite The JavaScript Yourself:

1. **Grab the background element:**

   - Use `document.getElementById("background")` to select the element with the ID "background" and store it in a variable named `background`. This element will be blurred.

2. **Grab the password input field:**

   - Use `document.getElementById("password")` to select the password input element with the ID "password" and store it in a variable named `password`. This is where you'll listen for user input.

3. **Listen for password changes:**

   - Attach an event listener to the `password` element for the "input" event. This event fires whenever the user types something in the password field.

4. **Inside the event listener:**
   - **Get the current password value:**
     - Use `e.target.value` to get the current text entered in the password field and store it in a variable named `input`.
   - **Calculate the password length:**
     - Use `input.length` to count the number of characters in the password and store the count in a variable named `length`.
   - **Set the blur strength:**
     - Calculate the appropriate blur strength using the formula `20 - length * 2`. This makes the blur stronger for shorter passwords and weaker for longer passwords.
     - Apply the calculated blur effect to the background element's style using `background.style.filter = `blur(${blurStrength}px)`. This updates the visual blur.

\*\*NOTE: I added the version of the instructor showing his implementation using variables.
