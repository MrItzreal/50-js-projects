Roadmap To Rewrite The JavaScript Yourself:

**1. Select DOM Elements:**

- Use `document.querySelector` to target the following elements by their class names:
  - `.slider-container`
  - `.right-slide`
  - `.left-slide`
  - `.up-button`
  - `.down-button`
- Store these references in variables for easier manipulation.

**2. Get Number of Slides:**

- Use `slideRight.querySelectorAll("div").length` to count the number of child `div` elements within the `.right-slide` element.
- Store this value in a variable named `slidesLength`.

**3. Initialize Active Slide Index:**

- Create a variable named `activeSlideIndex` and set it to `0` to represent the initially active slide.

**4. Position Initial Slide (Optional):**

- This line sets the initial position of `.slideLeft` using JavaScript:

```javascript
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
```

**5. Add Event Listeners to Buttons:**

- Use `addEventListener` on both `upButton` and `downButton`.
- Inside the event listener function, call a function named `changeSlide` and pass the button click direction ("up" or "down") as an argument.

**6. Define `changeSlide` Function:**

- This function takes a direction argument ("up" or "down").
- Inside the function:
  - Get the height of the `.slider-container` element using `sliderContainer.clientHeight` and store it in `sliderHeight`.
  - Based on the `direction` argument:
    - If "up", increment `activeSlideIndex`.
    - If "down", decrement `activeSlideIndex`.
  - Implement logic to handle going beyond the first or last slide:
    - If `activeSlideIndex` becomes negative (going beyond the first slide), set it to `slidesLength - 1` (last slide).
    - If `activeSlideIndex` goes beyond the last slide (`slidesLength - 1`), set it back to 0 (first slide).
  - Update the position of both `.slideRight` and `.slideLeft` elements using CSS transforms:
    - Set the `transform` property of `.slideRight` to `translateY(-${activeSlideIndex * sliderHeight}px)`.
    - Set the `transform` property of `.slideLeft` to `translateY(${activeSlideIndex * sliderHeight}px)`.
