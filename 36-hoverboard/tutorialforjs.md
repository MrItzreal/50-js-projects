Roadmap To Rewrite The JavaScript Yourself:

**1. Grabbing References:**

- Use `document.getElementById` to get a reference to the container element with the ID "container".

**2. Setting Up Variables:**

- Create a constant variable named `colors` and assign it an array containing the desired colors for the squares (e.g., `["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]`).
- Create a constant variable named `SQUARES` and assign it the desired number of squares (e.g., 500).

**3. Creating Squares:**

- Use a `for` loop to iterate `SQUARES` number of times.
- Inside the loop, use `document.createElement("div")` to create a new square element.
- Add the class name "square" to the newly created element using `classList.add`.

**4. Adding Event Listeners:**

- Attach two event listeners to each square element:
  - `mouseover`: When the mouse hovers over a square, call the `setColor` function, passing the square element as an argument.
  - `mouseout`: When the mouse leaves a square, call the `removeColor` function, passing the square element as an argument.

**5. Appending Squares:**

- After creating and adding event listeners to a square, use `container.appendChild(square)` to add the square element as a child of the container element.

**6. The `setColor` Function:**

- This function takes a square element as an argument.
- Inside the function, call `getRandomColor` to get a random color from the defined color list.
- Set the `backgroundColor` style property of the square element to the retrieved color.
- Set the `boxShadow` style property of the square element to create a shadow using the same color.

**7. The `removeColor` Function:**

- This function takes a square element as an argument.
- Inside the function, set the `backgroundColor` style property of the square element to an empty string (removes color).
- Set the `boxShadow` style property of the square element to an empty string (removes shadow).

**8. The `getRandomColor` Function:**

- This function retrieves a random color from the predefined list of colors stored in the `colors` constant.
  - It uses `Math.floor(Math.random() * colors.length)` to generate a random index within the range of the color array.
  - It uses the random index to access a color from the `colors` array and returns it.
