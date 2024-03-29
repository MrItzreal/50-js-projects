Roadmap To Rewrite The JavaScript Yourself:

1. **Get References:**

   - Use `document.getElementById` to grab a reference to the element with the ID "boxes" (assuming it's a container element). Store this reference in a variable named `boxesContainer`.
   - Similarly, use `document.getElementById` to get a reference to the element with the ID "btn" (assuming it's a button). Store this reference in a variable named `btn`.

2. **Create Boxes Function:**

   - Define a function named `createBoxes`.

3. **Nested Loops for Boxes:**

   - Inside the `createBoxes` function, use two nested `for` loops:
     - Outer loop: Iterate `4` times (i from 0 to 3) to create 4 rows of boxes.
     - Inner loop: Iterate `4` times (j from 0 to 3)to create 4 boxes in each row.

4. **Create and Style Boxes:**

   - Inside the nested loops:
     - Create a new `div` element using `document.createElement("div")`. Store this in a variable like `box`.
     - Add the class "box" to the newly created box element using `box.classList.add("box")`.
     - Set the `backgroundPosition` style of the box element dynamically using string interpolation:
       ```javascript
       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
       ```
       - This calculates the background position based on the loop counters (`i` and `j`) and a desired offset (e.g., 125px).
     - Append the created box element (`box`) to the `boxesContainer` element using `boxesContainer.appendChild(box)`.

5. **Call Create Boxes Function:**

   - Outside of any function, call the `createBoxes` function to actually create and add the boxes to the container.

6. **Button Click Event Listener:**

   - Add an event listener to the `btn` element using `btn.addEventListener("click", () => { ... })`.
   - Inside the event listener toggle the class "big" on the `boxesContainer` element whenever the button is clicked.
