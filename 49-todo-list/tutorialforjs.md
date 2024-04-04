Roadmap To Rewrite The JavaScript Yourself:

**1. Access HTML Elements:**

- Grab the form using `document.getElementById("form")`.
- Select the input field using `document.getElementById("input")`.
- Target the list of todos using `document.getElementById("todos")`.

**2. Retrieve Todos from Local Storage:**

- Parse the saved todos from Local Storage using `JSON.parse(localStorage.getItem("todos"))`.
- If there are saved todos, loop through them and call the `addTodo` function for each one to display them.

**3. Handle Form Submission:**

- Add an event listener to the form to listen for the "submit" event.
- Inside the listener, prevent the default form submission behavior using `e.preventDefault()`.
- Call the `addTodo` function to create a new todo.

**4. Create a Function to Add Todos:**

- Define a function named `addTodo` that accepts an optional todo object (used for existing todos from Local Storage).
- Grab the text from the input field or use the provided todo text.
- If there's text:
  - Create a new list item element using `document.createElement("li")`.
  - If it's an existing todo and is completed, add the "completed" class to the list item.
  - Set the innerText of the list item to the todo text.
  - Add event listeners to the list item:
    - A "click" event listener to toggle the "completed" class and update Local Storage.
    - A "contextmenu" event listener to prevent the default right-click menu and remove the todo on right-click, as well as update Local Storage.
  - Append the list item to the todosUl element.
  - Clear the input field.
  - Call the `updateLS` function to update Local Storage.

**5. Create a Function to Update Local Storage:**

- Define a function named `updateLS`.
- Get all list item elements using `querySelectorAll("li")`.
- Create an empty todos array.
- Loop through the list items and create todo objects with their text and completed status, pushing them into the todos array.
- Store the todos array in Local Storage using `localStorage.setItem("todos", JSON.stringify(todos))`.
