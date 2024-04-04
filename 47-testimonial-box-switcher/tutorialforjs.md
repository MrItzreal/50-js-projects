Roadmap To Rewrite The JavaScript Yourself:

**1. Select HTML Elements:**

- Grab the container for the testimonials `.testimonials-container`
- Get a single testimonial element `.testimonial`
- Find the user image element `.user-image`
- Select the element containing the username `.username`
- Target the element that holds the user's role `.role`

**2. Create an Array of Testimonials:**

- Each item in the array should be an object containing details like:
  - name (text)
  - position (text)
  - photo (image URL)
  - text (testimonial message)

**3. Set Up a Current Index Variable:**

- Create a variable `idx` and initialize it to 1 (represents which testimonial to show)

**4. Define a Function to Update Testimonials:**

- Name the function `updateTestimonials`
- Use array destructuring to grab `name`, `position`, `photo`, and `text` from the current testimonial object in the `testimonials` array based on the `idx`

**5. Update the Inner HTML of Elements:**

- Set the innerHTML of the `.testimonial` element to the current testimonial's text.
- Update the `src` attribute of the `.user-image` element to the current testimonial's photo URL.
- Set the innerHTML of the `.username` element to the current testimonial's name.
- Set the innerHTML of the `.role` element to the current testimonial's position.

**6. Increment Index and Handle Overflow:**

- Increase the `idx` by 1.
- Check if `idx` is greater than the length of the testimonials array minus 1. If so, reset `idx` back to 0 to loop through the testimonials again.

**7. Call the Function Repeatedly:**

- Use `setInterval` to call the `updateTestimonials` function every 10 seconds (10000 milliseconds). This will automatically switch between testimonials.
