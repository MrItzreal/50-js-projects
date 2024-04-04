Roadmap To Rewrite The JavaScript Yourself:

**1. Select Container Element:**

- Use `document.querySelector` to grab the element with the class `.container`. This will hold all the images.

**2. Define Unsplash Random Image URL:**

- Create a constant variable `unsplashURL` and set it to the base URL for Unsplash's random image generator "[https://source.unsplash.com/random/](https://source.unsplash.com/random/)".

**3. Determine Number of Images:**

- Create a constant variable `rows` and set it to the desired number of image rows you want to display (e.g., 10).

**4. Loop and Create Images:**

- Use a `for` loop to iterate a specific number of times based on the number of rows.
  - Inside the loop:
    - Create a new image element using `document.createElement("img")`.
    - Set the `src` attribute of the image element to the `unsplashURL` concatenated with the result of the function `getRandomSize()`. This will build the final URL for the random image with specific dimensions.
    - Append the newly created image element to the container element using `container.appendChild(img)`.

**5. Generate Random Image Size Function:**

- Define a function named `getRandomSize`.
- Inside the function:
  - Generate a random number between 300 and 399 (inclusive) using `Math.floor(Math.random() * 10) + 300`. This will be one dimension of the image.
  - Use template literals (backticks) to create a string with two random numbers separated by an "x" (e.g., "350x388"). This represents the width and height of the image.
  - Return the generated image size string.

**6. Generate Random Number Function (Optional):**

- Define a function named `getRandomNr` (Nr stands for number). This function is used within `getRandomSize` and can be included if you want more control over the random number generation.
- Inside the function (if included):
  - Use `Math.floor(Math.random() * 10)` to generate a random decimal number between 0 and 9 (exclusive).
  - Multiply the random number by 10 to get a range of 0 to 90.
  - Add 300 to the result to get a range of 300 to 390.
  - Use `Math.floor` to round down to the nearest whole number (inclusive).
  - Return the random number.
