Roadmap To Rewrite The JavaScript Yourself:

**1. Grabbing References:**

- Use `document.getElementById` to get references to the container element with the ID "imgs" and the left and right buttons with IDs "left" and "right".
- Use `document.querySelectorAll` to select all `<img>` elements that are children of the element with the ID "imgs".

**2. Setting Up Variables:**

- Create a variable `idx` (index) and initialize it to 0 to keep track of the currently displayed image.
- Use `setInterval` to create an interval that calls a function named `run` every 2000 milliseconds (2 seconds). Store the interval ID in a variable named `interval`.

**3. The `run` Function:**

- This function is called automatically at the set interval.
- Inside this function, increment the `idx` variable by 1.
- Call another function named `changeImage` to update the displayed image.

**4. The `changeImage` Function:**

- This function handles the logic for showing the correct image.
- Check if `idx` is greater than the total number of images (`img.length - 1`).
  - If it is, reset `idx` to 0 to start from the beginning.
- Otherwise, check if `idx` is less than 0 (meaning it went below the first image).
  - If it is, set `idx` to the last image index (`img.length - 1`).
- Use CSS `transform: translateX()` to move the container element (`imgs`) horizontally. The amount of movement depends on the current `idx` multiplied by a value representing the width of each image (e.g., 500px).

**5. Button Event Listeners:**

- Add event listeners to both the left and right buttons.
- Inside each event listener, increment or decrement the `idx` variable depending on the button clicked (left or right).
- Call the `changeImage` function to update the displayed image based on the new `idx`.
- Call the `resetInterval` function to clear the existing interval and restart it to ensure smooth transitions after user interaction.

**6. The `resetInterval` Function (Optional):**

- This function is called when the user interacts with the buttons.
- It clears the existing interval using `clearInterval`.
- It creates a new interval using `setInterval` with the same settings as before and stores the new interval ID in the `interval` variable.
