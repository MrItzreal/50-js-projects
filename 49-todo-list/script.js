const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

//LocalStorage
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents submit

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault(); //prevents right click menu popup
      todoEl.remove();
      updateLS();
    });

    todosUl.appendChild(todoEl);
    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) =>
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    })
  );
  localStorage.setItem("todos", JSON.stringify(todos));
}

//localStorage: data is saved even after closing window,
//it only deletes when you explicitly clear it yourself.

//SessionStorage: data is saved until you close window,
//once closed the data is cleared.

//Local storage uses the key & value pairs:
// Examples:
// localStorage.setItem("name","Izzy");
// localStorage.getItem("name");
// localStorage.removeItem("name");
