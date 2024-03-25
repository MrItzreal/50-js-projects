Roadmap To Rewrite The JavaScript Yourself:

**1. Set up the "Add" button:**

- Select the "Add" button element using its ID.
- Attach an event listener to the button that calls a function named `addNewNote()` when clicked.

**2. Define the `addNewNote()` function:**

- Create a new `div` element to represent a note.
- Add a "note" class to the new element.
- Populate the inner HTML of the note element with:
  - A tools section containing edit and delete buttons.
  - A main section (initially hidden if no text is provided).
  - A text area (initially hidden if text is provided).
- Select the edit, delete, main, and text area elements within the note.
- Set the value of the text area to the provided text (if any).
- Use the `marked` library to format the text and set it as the content of the main section.
- Attach event listeners to the edit and delete buttons to handle their actions.
- Attach an event listener to the text area to handle changes in its value.
- Append the newly created note element to the body of the HTML document.

**3. Handle notes in localStorage (last steps):**

- Retrieve any saved notes from localStorage and parse them into an array.
- If there are saved notes, iterate through them and call `addNewNote()` for each one to display them.
- Define a function named `updateLS()` to update localStorage:
  - Select all text areas in the document.
  - Create an empty array to store notes.
  - Iterate through the text areas and push their values into the notes array.
  - Store the updated notes array in localStorage as a JSON string.
- Call `updateLS()` whenever a note is added, edited, or deleted.
