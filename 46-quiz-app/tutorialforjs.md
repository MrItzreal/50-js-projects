Roadmap To Rewrite The JavaScript Yourself:

NOTE: Before following the steps I recommend to go over the video
lesson to make sure that you understand what code does what.

**1. Setting Up The Quiz Data:**

- Create an array named `quizData`.
- Inside the array, create objects containing the following properties for each question:
  - `question`: The question text itself.
  - `a`, `b`, `c`, `d`: Answer choices for the question (text).
  - `correct`: The identifier for the correct answer (e.g., "a", "b", etc.).

**2. Grabbing HTML Elements:**

- Use `document.getElementById` to target elements with specific IDs:
  - `quiz`: The overall quiz container element.
  - `answer`: A class that selects all answer choices (likely checkboxes or radio buttons).
  - `question`: The element displaying the question text.
  - `a_text` to `d_text`: Elements displaying the text for each answer choice (a, b, c, d).
  - `submitBtn`: The submit button element.

**3. Initializing Values:**

- Create variables:
  - `currentQuiz`: Keeps track of the current question index (starts at 0).
  - `score`: Stores the number of correct answers (starts at 0).
- Call a function named `loadQuiz` to display the first question.

**4. `loadQuiz` Function:**

- Call the `deselectAnswers` function to ensure no previous answers are selected.
- Access the current question data object using `quizData[currentQuiz]`.
- Update the content of the following elements with the corresponding question data properties:
  - `questionEl.innerText`: Question text.
  - `a_text.innerText` to `d_text.innerText`: Text for each answer choice (a, b, c, d).

**5. `deselectAnswers` Function:**

- Use `document.querySelectorAll` to select all elements with the class `answer` (likely checkboxes or radio buttons).
- Loop through each answer element using `forEach`.
- Set the `checked` property of each answer element to `false` to deselect them.

**6. `getSelected` Function:**

- Create a variable `answer` to store the selected answer ID.
- Loop through all answer elements using `forEach`.
- Inside the loop, check if the current element is checked (`answerEl.checked`).
- If checked, set the `answer` variable to the current element's ID (`answerEl.id`).
- After the loop, return the `answer` variable (which holds the ID of the selected answer, if any).

**7. Submit Button Event Listener:**

- Add an event listener to the `submitBtn` element, triggering a function upon clicking the button.
- Inside the event listener function:
  - Call the `getSelected` function to get the ID of the selected answer (if any).
  - Check if an answer is selected (if `answer` is not null).
    - If selected, compare the answer ID (`answer`) with the `correct` property of the current question data object (`quizData[currentQuiz].correct`).
      - If the answer matches the correct answer, increment the `score` variable.
    - Increment the `currentQuiz` index to move to the next question.
    - Check if there are more questions remaining (`currentQuiz < quizData.length`):
      - If more questions, call `loadQuiz` to display the next question.
      - If no more questions, update the content of the `quiz` element with HTML displaying the final score and a "Reload" button. The HTML should include:
        - An `<h2>` element showing the score (correct answers out of total questions).
        - A `<button>` element with an `onclick` attribute set to reload the page (`location.reload()`) when clicked.
