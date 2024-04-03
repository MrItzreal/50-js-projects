Roadmap To Rewrite The JavaScript Yourself:

**1. Select Elements:**

- Use `document.querySelector` to target the button that opens the navigation menu with class `.open-btn`. (Store this in a variable named `openBtn`)
- Use `document.querySelector` to target the button that closes the navigation menu with class `.close-btn`. (Store this in a variable named `closeBtn`)
- **OR** (alternative approach)
- Use `document.querySelectorAll` to select all elements with the class `.nav` that represent the navigation items. (Store this in a variable named `nav`)

**2. Add Event Listeners:**

- Add an event listener to the `openBtn` element that listens for the "click" event.
- Inside the event listener function:
  - Loop through each element in the `nav` variable using `forEach`.
  - For each element, use the `classList.toggle("visible")` method to toggle the class "visible" on the element. This will show/hide the navigation based on its current state.

**3. Repeat for Closing (Optional):**

- Repeat steps 2a and 2b for the `closeBtn` element. This creates a separate click event listener for the close button that also toggles the "visible" class on the navigation elements.

**4. (Optional) Combine Listeners:**

- If you only want one set of navigation elements to toggle and don't need separate open/close buttons, you can combine the logic from steps 2a and 2b into a single event listener function attached to either `openBtn` or `closeBtn`. The toggle functionality will still achieve the show/hide behavior.
