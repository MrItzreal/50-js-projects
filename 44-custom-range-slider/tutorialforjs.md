Roadmap To Rewrite The JavaScript Yourself:

**1. Select Elements:**

- Use `document.getElementById("range")` to find the element with the ID "range". Store it in a variable named `range`.

**2. Add Event Listener:**

- Attach an "input" event listener to the `range` element.

**3. Inside the Event Listener:**

    * Get the current value of the range element and convert it to a number using `+e.target.value`. Store it in `value`.
    * Get the element that is the next sibling of the `range` element using `e.target.nextElementSibling`. Store it in `label` (assuming this is the label element that should follow the range bar).

**4. Get Widths:**

    * Use `getComputedStyle(e.target).getPropertyValue("width")` to get the current width of the `range` element (including the "px" unit). Store it in `range_width`.
    * Use `getComputedStyle(label).getPropertyValue("width")` to get the current width of the `label` element (including the "px" unit). Store it in `label_width`.

**5. Extract Numeric Widths:**

    * Extract the numeric value from `range_width` by removing the last two characters ("px") using `substring` and convert it to a number using `+`. Store it in `num_width`.
    * Do the same for `label_width` and store it in `num_label_width`.

**6. Get Range Limits:**

    * Get the minimum value of the range element using `+e.target.min` and store it in `min`.
    * Get the maximum value of the range element using `+e.target.max` and store it in `max`.

**7. Calculate Label Position:**

    * Define a function named `scale` (implementation details provided later).
    * Calculate the desired left position for the label using the following formula:

      ```javascript
      const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
      ```

      * This formula considers the current value (`value`), the width of the range (`num_width`), the width of the label (`num_label_width`), and uses the `scale` function for additional adjustments (explained later).

**8. Set Label Position:**

    * Set the `left` style property of the `label` element to the calculated `left` value using `label.style.left = `${left}px`;`. This positions the label horizontally based on the calculation.

**9. Update Label Text:**

    * Set the innerHTML of the `label` element to the current value (`value`) using `label.innerHTML = value;`. This displays the numeric value on the label.

**10. `scale` Function Implementation:**

    * Define a function named `scale` that takes five arguments:
        * `number`: The value to be scaled.
        * `inMin`: The minimum value in the input range.
        * `inMax`: The maximum value in the input range.
        * `outMin`: The desired minimum value in the output range.
        * `outMax`: The desired maximum value in the output range.

    * The function performs linear scaling based on the provided input and output ranges. You can find the implementation details online or in documentation for linear scaling functions.
